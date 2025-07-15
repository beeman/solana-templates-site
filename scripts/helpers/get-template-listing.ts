import { Template, TemplateListing, TemplateSource } from '@/types'
import { getRepoUrl } from './get-repo-url'

export function getTemplateListing({
  source,
  template,
}: {
  source: TemplateSource
  template: Template
}): TemplateListing {
  return {
    source,
    ...template,
    repoUrl: getRepoUrl({ owner: source.owner, path: template.path, repo: source.repo }),
  }
}
