import { parseAsArrayOf, parseAsString, useQueryState } from 'nuqs'
import { TemplateListing } from '@/types'
import { useMemo } from 'react'

// TODO: Move these filtered keywords to the generators
const filteredKeywords = ['legacy', 'template']

export function useTemplateFilterState({ listings }: { listings: TemplateListing[] }) {
  const [search, setSearch] = useQueryState('search', parseAsString.withDefault(''))
  const [activeKeywords, setActiveKeywords] = useQueryState('keywords', parseAsArrayOf(parseAsString).withDefault([]))

  const keywords = useMemo(() => {
    const all = listings.flatMap((l) => l.keywords)
    const filtered = all.filter((k) => !filteredKeywords.includes(k))

    return Array.from(new Set(filtered)).sort()
  }, [listings])

  const filteredListings = useMemo(() => {
    const q = (search ?? '').toLowerCase()
    const keywords = activeKeywords ?? []
    return listings
      .filter((l) => {
        const inName = l.name.toLowerCase().includes(q)
        const inDescription = l.description.toLowerCase().includes(q)
        const inKeywords = l.keywords.some((k) => k.toLowerCase().includes(q))

        return inName || inDescription || inKeywords
      })
      .filter((l) => keywords.every((k) => l.keywords.includes(k)))
  }, [listings, search, activeKeywords])

  return {
    activeKeywords,
    clear: async () => {
      await setSearch('')
      await setActiveKeywords([])
    },
    filteredListings,
    keywords,
    search,
    setActiveKeywords,
    setSearch,
    toggleKeyword: async (keyword: string) => {
      await setActiveKeywords(
        activeKeywords.includes(keyword) ? activeKeywords.filter((k) => k !== keyword) : [...activeKeywords, keyword],
      )
    },
  }
}
