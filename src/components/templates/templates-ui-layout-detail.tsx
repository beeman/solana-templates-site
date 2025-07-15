import { Button } from '@/components/ui/button'
import { ExternalLinkIcon } from 'lucide-react'
import { AppModal } from '@/components/app-modal'
import { TemplatesUiGenerateCommand } from '@/components/templates/templates-ui-generate-command'
import { TemplateListing } from '@/types'

export function TemplatesUiLayoutDetail({ listing }: { listing: TemplateListing }) {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
        <div className="md:col-span-2 space-y-6">
          <div>
            <div className="aspect-video bg-gray-100 dark:bg-gray-800 border rounded-lg mb-4">
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-red-500 mr-2">*</span> Screenshot
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">README</h2>
            <div className="prose dark:prose-invert max-w-none border rounded-lg p-4 bg-gray-50 dark:bg-gray-900">
              <div dangerouslySetInnerHTML={{ __html: listing.readme }} />
            </div>
          </div>
        </div>
        <div className="md:col-span-1 space-y-6">
          <div className="border rounded-lg p-4 space-y-4">
            <h3 className="text-lg font-bold">Template Details</h3>
            <div className="space-y-2">
              <p className="text-sm">
                <strong>Author:</strong> {listing.source.owner}
              </p>
              <p className="text-sm">
                <strong>Frameworks:</strong> <span className="text-red-500">*</span>
              </p>
              <p className="text-sm">
                <strong>Use Cases:</strong> <span className="text-red-500">*</span>
              </p>
              <p className="text-sm">
                <strong>CSS:</strong> <span className="text-red-500">*</span>
              </p>
            </div>
            <Button className="w-full" asChild>
              <a href={listing.repoUrl} target="_blank" rel="noopener noreferrer">
                View on GitHub <ExternalLinkIcon className="h-4 w-4 ml-2" />
              </a>
            </Button>
            <AppModal title={`Generate`}>
              <div className="space-y-4  overflow-x-auto">
                <p>
                  Generate a new Solana project using the <strong>{listing.name}</strong> template.
                </p>
                <TemplatesUiGenerateCommand listing={listing} />
                <p>Run the command above in your terminal to get started.</p>
              </div>
            </AppModal>
          </div>
          <div className="border rounded-lg p-4 space-y-4">
            <h3 className="text-lg font-bold">Features</h3>
            <ul className="list-disc list-inside space-y-2">
              {listing.keywords.map((keyword) => (
                <li key={keyword}>{keyword}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
