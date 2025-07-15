import { TemplatesFeatureDetail } from '@/components/templates/templates-feature-detail'

export default async function TemplateDetailPage({ params }: { params: Promise<{ name: string }> }) {
  const { name } = await params
  return <TemplatesFeatureDetail name={name} />
}
