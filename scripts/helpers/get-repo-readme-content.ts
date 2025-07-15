import { getRepoReadmeUrl } from './get-repo-readme-url'

export async function getRepoReadmeContent({ owner, path, repo }: { owner: string; path: string; repo: string }) {
  try {
    const url = getRepoReadmeUrl({ owner, path, repo })
    console.log(`Fetching README content for ${owner}/${repo}/${path} from ${url}`)
    const response = await fetch(url)
    return await response.text()
  } catch (error) {
    console.error(`Error fetching README content for ${owner}/${repo}/${path}: ${error}`)
    return ''
  }
}
