'use client'

import { TemplatesFeatureDetail } from '@/components/templates/templates-feature-detail'

export default function TemplateDetailPage({ params }: { params: { name: string } }) {
  return <TemplatesFeatureDetail name={params.name} />
}
