export interface TemplateSource {
  name: string
  owner: string
  repo: string
}

export interface TemplateGroup {
  description: string
  directory: string
  name: string
  templates: Template[]
}

export interface Template {
  description: string
  keywords: string[]
  name: string
  path: string
  readme: string
  repoUrl: string
}

export type TemplateListing = Template & {
  source: TemplateSource
}
