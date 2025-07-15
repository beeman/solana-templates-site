import { TemplateGroup, TemplateListing, TemplateSource } from '@/types'
import { getTemplateListings } from './get-template-listings'
import { fetchTemplatesJson } from './fetch-templates-json'

export function parseTemplateGroups({
  groups,
  source,
}: {
  groups: TemplateGroup[]
  source: TemplateSource
}): TemplateListing[] {
  const tag = `[${source.name}]`

  if (!groups.length) {
    console.log(`${tag} No template groups found`)
    return []
  }
  const templates = groups.flatMap((group) => group.templates)

  if (!templates.length) {
    console.log(`${tag} No templates found`)
    return []
  }
  console.log(`${tag} Found ${templates.length} templates:`, templates.map((template) => template.name).join(', '))
  return getTemplateListings({ source, templates })
}

export async function getListings({ sources }: { sources: TemplateSource[] }) {
  const result: TemplateListing[] = []

  for (const source of sources) {
    try {
      const groups = await fetchTemplatesJson(source)
      result.push(...parseTemplateGroups({ groups, source }))
    } catch (error) {
      console.error(`[${source.name}] Error fetching templates: ${error}`)
    }
  }

  return result
}
