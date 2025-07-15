import { AppHero } from '@/components/app-hero'
import templatesJson from './templates.json' assert { type: 'json' }
import { TemplateListing } from '@/types'

const listings = templatesJson as TemplateListing[]

export function TemplatesFeature() {
  return (
    <div>
      <AppHero
        title="Templates"
        subtitle="Jumpstart your app development process with pre-built solutions from Solana Developers."
      />

      <TemplatesLayout listings={listings} />
      <pre>{JSON.stringify(listings, null, 2)}</pre>
    </div>
  )
}

export function TemplatesLayout({ listings }: { listings: TemplateListing[] }) {
  return (
    <div>
      <TemplatesFilter listings={listings} />
      <TemplatesGrid listings={listings} />
    </div>
  )
}

export function TemplatesFilter({ listings }: { listings: TemplateListing[] }) {
  return <div>{listings.length} templates</div>
}

export function TemplatesGrid({ listings }: { listings: TemplateListing[] }) {
  return (
    <div>
      {listings.map((listing, index) => (
        <TemplatesGridItem key={index} listing={listing} />
      ))}
    </div>
  )
}

export function TemplatesGridItem({ listing }: { listing: TemplateListing }) {
  return <pre>{JSON.stringify(listing, null, 2)}</pre>
}
