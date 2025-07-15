import { Template, TemplateListing, TemplateSource } from '@/types'
import { getRepoUrl } from './get-repo-url'
import { getRepoReadmeContent } from './get-repo-readme-content'
import { parseReadmeContent } from './parse-readme-content'

export async function getTemplateListing({
  source,
  template,
}: {
  source: TemplateSource
  template: Template
}): Promise<TemplateListing> {
  const readmeContent = await getRepoReadmeContent({ owner: source.owner, path: template.path, repo: source.repo })
  const readme = await parseReadmeContent({ content: readmeContent })
  // TODO: get preview image if available
  return {
    source,
    ...template,
    readme,
    repoUrl: getRepoUrl({ owner: source.owner, path: template.path, repo: source.repo }),
  }
}
