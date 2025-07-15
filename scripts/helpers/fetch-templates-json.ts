import { TemplateGroup, TemplateSource } from '@/types'
import { getTemplatesJsonUrl } from './get-templates-json-url'

export async function fetchTemplatesJson(source: TemplateSource): Promise<TemplateGroup[]> {
  const url = getTemplatesJsonUrl(source)
  const response = await fetch(url)

  return await response.json()
}
