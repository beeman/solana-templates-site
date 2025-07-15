import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export function TemplatesUiFilter({
  keywords,
  activeKeywords,
  setActiveKeywords,
  search,
  setSearch,
}: {
  keywords: string[]
  activeKeywords: string[]
  setActiveKeywords: (keywords: string[]) => void
  search: string
  setSearch: (search: string) => void
}) {
  const toggleKeyword = (keyword: string) => {
    setActiveKeywords(
      activeKeywords.includes(keyword) ? activeKeywords.filter((k) => k !== keyword) : [...activeKeywords, keyword],
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <Label>Search</Label>
        <Input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search templates..." />
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
