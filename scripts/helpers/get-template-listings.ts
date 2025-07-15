import { Template, TemplateListing, TemplateSource } from '@/types'
import { getTemplateListing } from './get-template-listing'

export async function getTemplateListings({
  source,
  templates,
}: {
  source: TemplateSource
  templates: Template[]
}): Promise<TemplateListing[]> {
  return Promise.all(templates.map((template) => getTemplateListing({ source, template })))
}
