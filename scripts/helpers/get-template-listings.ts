import { Template, TemplateListing, TemplateSource } from '@/types'
import { getTemplateListing } from './get-template-listing'

export function getTemplateListings({
  source,
  templates,
}: {
  source: TemplateSource
  templates: Template[]
}): TemplateListing[] {
  return templates.map((template) => getTemplateListing({ source, template }))
}
