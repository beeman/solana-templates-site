'use client'

import { AppHero } from '@/components/app-hero'
import templatesJson from './templates.json' assert { type: 'json' }
import { TemplateListing } from '@/types'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { TemplatesUiLayoutDetail } from '@/components/templates/templates-ui-layout-detail'

const listings = templatesJson as TemplateListing[]

export function TemplatesFeatureDetail({ name }: { name: string }) {
  const listing = listings.find((l) => l.name === name)

  if (!listing) {
    return (
      <div>
        <AppHero title="Not Found" subtitle={`Template with name "${name}" not found.`} />
        <div className="text-center">
          <Button asChild>
            <Link href="/templates">Back to templates</Link>
          </Button>
        </div>
      </div>
    )
  }
  return (
    <div>
      <div className="container py-4">
        <Button variant="link" className="pl-0" asChild>
          <Link href="/templates">Back to templates</Link>
        </Button>
      </div>
      <AppHero title={listing.name} subtitle={listing.description} />
      <TemplatesUiLayoutDetail listing={listing} />
    </div>
  )
}
