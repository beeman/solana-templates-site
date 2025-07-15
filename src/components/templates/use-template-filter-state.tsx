import { parseAsArrayOf, parseAsString, useQueryState } from 'nuqs'
import { TemplateListing } from '@/types'
import { useMemo } from 'react'
import { filterListings } from './filter-listings'

// TODO: Move these filtered keywords to the generators
const filteredKeywords = ['legacy', 'template', 'solana']

export function useTemplateFilterState({ listings }: { listings: TemplateListing[] }) {
  const [search, setSearch] = useQueryState('search', parseAsString.withDefault(''))
  const [activeSources, setActiveSources] = useQueryState('sources', parseAsArrayOf(parseAsString).withDefault([]))
  const [activeKeywords, setActiveKeywords] = useQueryState('keywords', parseAsArrayOf(parseAsString).withDefault([]))

  const sources = useMemo(() => {
    const all = listings.flatMap((l) => l.source.name)

    return Array.from(new Set(all))
  }, [listings])

  const keywords = useMemo(() => {
    const all = listings.flatMap((l) => l.keywords)
    const filtered = all.filter((k) => !filteredKeywords.includes(k))

    return Array.from(new Set(filtered)).sort()
  }, [listings])

  const filteredListings = useMemo(
    () => filterListings({ listings, search, activeKeywords, activeSources }),
    [listings, search, activeKeywords, activeSources],
  )

  return {
    activeKeywords,
    activeSources,
    clear: async () => {
      await Promise.all([setSearch(''), setActiveSources([]), setActiveKeywords([])])
    },
    filteredListings,
    hasFilters: activeKeywords.length || activeSources.length || search !== '',
    keywords,
    search,
    setSearch,
    sources,
    toggleKeyword: async (keyword: string) => {
      await setActiveKeywords(
        activeKeywords.includes(keyword) ? activeKeywords.filter((k) => k !== keyword) : [...activeKeywords, keyword],
      )
    },
    toggleSource: async (source: string) => {
      await setActiveSources(
        activeSources.some((s) => s === source)
          ? activeSources.filter((s) => s !== source)
          : [...activeSources, source],
      )
    },
  }
}
