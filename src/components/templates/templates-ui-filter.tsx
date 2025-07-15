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
              {keyword}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
