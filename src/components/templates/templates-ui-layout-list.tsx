import { TemplateListing } from '@/types'
import { useMemo, useState } from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { TemplatesUiGrid } from '@/components/templates/templates-ui-grid'

import { TemplatesUiFilter } from '@/components/templates/templates-ui-filter'

export function TemplatesUiLayoutList({ listings }: { listings: TemplateListing[] }) {
  const [search, setSearch] = useState('')
  const [activeKeywords, setActiveKeywords] = useState<string[]>([])

  const keywords = useMemo(() => {
    const allKeywords = listings.flatMap((l) => l.keywords)
    return Array.from(new Set(allKeywords)).sort()
  }, [listings])

  const filteredListings = useMemo(() => {
    return listings
      .filter((l) => l.name.toLowerCase().includes(search.toLowerCase()))
      .filter((l) => activeKeywords.every((k) => l.keywords.includes(k)))
  }, [listings, search, activeKeywords])

  return (
    <div className="grid md:grid-cols-4 gap-4 lg:gap-8">
      <div className="md:col-span-1">
        <div className="hidden md:block">
          <TemplatesUiFilter
            keywords={keywords}
            activeKeywords={activeKeywords}
            setActiveKeywords={setActiveKeywords}
            search={search}
            setSearch={setSearch}
          />
        </div>
        <div className="md:hidden">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Filter and Search</AccordionTrigger>
              <AccordionContent>
                <TemplatesUiFilter
                  keywords={keywords}
                  activeKeywords={activeKeywords}
                  setActiveKeywords={setActiveKeywords}
                  search={search}
                  setSearch={setSearch}
                />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <div className="md:col-span-3">
        <TemplatesUiGrid listings={filteredListings} />
      </div>
    </div>
  )
}
