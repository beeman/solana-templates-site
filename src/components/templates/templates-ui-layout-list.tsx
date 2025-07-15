'use client'
import { TemplateListing } from '@/types'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { TemplatesUiGrid } from '@/components/templates/templates-ui-grid'

import { TemplatesUiFilter } from '@/components/templates/templates-ui-filter'
import { useTemplateFilterState } from '@/components/templates/use-template-filter-state'
import { Button } from '@/components/ui/button'

export function TemplatesUiLayoutList({ listings }: { listings: TemplateListing[] }) {
  const { clear, filteredListings } = useTemplateFilterState({ listings })

  return (
    <div className="grid md:grid-cols-4 gap-4 lg:gap-8">
      <div className="md:col-span-1">
        <div className="hidden md:block">
          <TemplatesUiFilter listings={listings} />
        </div>
        <div className="md:hidden">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Filter and Search</AccordionTrigger>
              <AccordionContent>
                <TemplatesUiFilter listings={listings} />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <div className="md:col-span-3">
        {filteredListings.length ? (
          <TemplatesUiGrid listings={filteredListings} />
        ) : (
          <div className="space-y-2">
            <div className="font-bold text-lg">No templates found</div>
            <Button variant="outline" onClick={clear}>
              Clear filters
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
