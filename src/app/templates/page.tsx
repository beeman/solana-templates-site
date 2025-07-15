import { TemplatesFeatureList } from '@/components/templates/templates-feature-list'
import { Suspense } from 'react'

export default function Home() {
  return (
    <Suspense>
      <TemplatesFeatureList />
    </Suspense>
  )
}
