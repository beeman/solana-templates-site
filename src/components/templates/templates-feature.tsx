'use client'

import { AppHero } from '@/components/app-hero'
import templatesJson from './templates.json' assert { type: 'json' }
import { TemplateListing } from '@/types'
import { useMemo, useState } from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const listings = templatesJson as TemplateListing[]

export function TemplatesFeature() {
  return (
    <div>
      <AppHero
        title="Templates"
        subtitle="Jumpstart your app development process with pre-built solutions from Solana Developers."
      />
      <TemplatesLayout listings={listings} />
    </div>
  )
}

export function TemplatesLayout({ listings }: { listings: TemplateListing[] }) {
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
          <TemplatesFilter
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
                <TemplatesFilter
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
        <TemplatesGrid listings={filteredListings} />
      </div>
    </div>
  )
}

export function TemplatesFilter({
  keywords,
  activeKeywords,
  setActiveKeywords,
  search,
  setSearch,
}: {
  keywords: string[]
  activeKeywords: string[]
  setActiveKeywords: (keywords: string[]) => void
  search: string
  setSearch: (search: string) => void
}) {
  const toggleKeyword = (keyword: string) => {
    setActiveKeywords(
      activeKeywords.includes(keyword) ? activeKeywords.filter((k) => k !== keyword) : [...activeKeywords, keyword],
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <Label>Search</Label>
        <Input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search templates..." />
      </div>
      <div>
        <Label>Filters</Label>
        <div className="space-y-2 pt-2">
          {keywords.map((keyword) => (
            <Button
              key={keyword}
              variant={activeKeywords.includes(keyword) ? 'default' : 'outline'}
              onClick={() => toggleKeyword(keyword)}
              className="w-full justify-start"
            >
              {keyword}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}

export function TemplatesGrid({ listings }: { listings: TemplateListing[] }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {listings.map((listing, index) => (
        <TemplatesGridItem key={index} listing={listing} />
      ))}
    </div>
  )
}

import { ExternalLinkIcon } from 'lucide-react'

export function TemplatesGridItem({ listing }: { listing: TemplateListing }) {
  return (
    <div className="border rounded-lg overflow-hidden">
      <div className="bg-gray-100 dark:bg-gray-800 h-48 flex items-center justify-center">
        <h3 className="text-lg font-bold">{listing.name}</h3>
      </div>
      <div className="p-4 space-y-2">
        <h3 className="text-lg font-bold">{listing.name}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">{listing.description}</p>
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">by {listing.source.name}</p>
          <a href={listing.repoUrl} target="_blank" rel="noopener noreferrer" className="text-sm flex items-center gap-1 hover:underline">
            View Repo <ExternalLinkIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  )
}
