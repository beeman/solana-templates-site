import { TemplateListing } from '@/types'
import { TemplatesUiGridItem } from '@/components/templates/templates-ui-grid-item'

export function TemplatesUiGrid({ listings }: { listings: TemplateListing[] }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {listings.map((listing, index) => (
        <TemplatesUiGridItem key={index} listing={listing} />
      ))}
    </div>
  )
}
