import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useTemplateFilterState } from '@/components/templates/use-template-filter-state'
import { TemplateListing } from '@/types'
import { getLabelKeyword } from '@/components/templates/get-label-keyword'
import { getLabelSource } from '@/components/templates/get-label-source'

export function TemplatesUiFilter({ listings }: { listings: TemplateListing[] }) {
  const {
    activeKeywords,
    activeSources,
    clear,
    hasFilters,
    keywords,
    search,
    setSearch,
    sources,
    toggleKeyword,
    toggleSource,
  } = useTemplateFilterState({ listings })

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <span className="text-lg font-bold py-1">Filter Templates</span>
        {hasFilters ? (
          <Button variant="outline" onClick={() => clear()}>
            Clear
          </Button>
        ) : null}
      </div>
      <Input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search templates..." />
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
              {getLabelKeyword(keyword)}
            </Button>
          ))}
        </div>
      </div>
      <div>
        <Label>Sources</Label>
        <div className="space-y-2 pt-2">
          {sources.map((item) => (
            <Button
              key={item}
              variant={activeSources.some((s) => s === item) ? 'default' : 'outline'}
              onClick={() => toggleSource(item)}
              className="w-full justify-start"
            >
              {getLabelSource(item)}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
