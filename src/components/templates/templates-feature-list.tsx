'use client'

import { AppHero } from '@/components/app-hero'
import templatesJson from './templates.json' assert { type: 'json' }
import { TemplateListing } from '@/types'
import { TemplatesUiLayoutList } from '@/components/templates/templates-ui-layout-list'

const listings = templatesJson as TemplateListing[]

export function TemplatesFeatureList() {
  return (
    <div>
      <AppHero
        title="Templates"
        subtitle="Jumpstart your app development process with pre-built solutions from Solana Developers."
      />
      <TemplatesUiLayoutList listings={listings} />
    </div>
  )
}
