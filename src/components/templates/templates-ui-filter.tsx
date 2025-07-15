import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useTemplateFilterState } from '@/components/templates/use-template-filter-state'
import { TemplateListing } from '@/types'

export function TemplatesUiFilter({ listings }: { listings: TemplateListing[] }) {
  const { activeKeywords, keywords, search, setSearch, toggleKeyword } = useTemplateFilterState({ listings })

  return (
    <div className="space-y-6">
      <div>
        <Label>Search</Label>
        <div className="pt-2">
          <Input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search templates..." />
        </div>
      </div>
      <div>
        <Label>Filters</Label>
        <div className="space-y-2 pt-2">
          {keywords.map((keyword) => (
            <Button
              key={keyword}
              variant={activeKeywords.includes(keyword) ? 'default' : 'outline'}
              onClick={() => toggleKeyword(keyword)}
              className="w-full justify-start"
            >
              {getKeywordLabel(keyword)}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}

function getKeywordLabel(keyword: string) {
  switch (keyword) {
    case 'anchor-basic':
      return 'Anchor Basic'
    case 'anchor-counter':
      return 'Anchor Counter'
    case 'express':
      return 'Express'
    case 'gill':
      return 'Gill'
    case 'nextjs':
      return 'Next.js'
    case 'node':
      return 'Node'
    case 'react':
      return 'React'
    case 'solana-kit':
      return '@solana/kit'
    case 'solana-web3js':
      return '@solana/web3.js'
    case 'tailwind':
      return 'Tailwind'
    case 'typescript':
      return 'TypeScript'
    case 'vite':
      return 'Vite'
    case 'wallet-adapter':
      return 'Wallet Adapter'
    case 'wallet-ui':
      return 'Wallet UI'
    default:
      return keyword
  }
}
