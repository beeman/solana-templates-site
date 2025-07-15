import { TemplateListing } from '@/types'

export function filterListings({
  listings,
  search,
  activeKeywords,
  activeSources,
}: {
  listings: TemplateListing[]
  search: string
  activeKeywords: string[]
  activeSources: string[]
}) {
  return listings
    .filter((l) => {
      if (search.trim() === '') {
        return true
      }
      const inName = l.name.toLowerCase().includes(search)
      const inDescription = l.description.toLowerCase().includes(search)
      const inKeywords = l.keywords.some((k) => k.toLowerCase().includes(search))

      return inName || inDescription || inKeywords
    })
    .filter((l) => (activeSources.length ? activeSources.some((s) => l.source.name === s) : true))
    .filter((l) => activeKeywords.every((k) => l.keywords.includes(k)))
}
