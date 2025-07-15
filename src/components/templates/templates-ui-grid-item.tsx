import { TemplateListing } from '@/types'
import Link from 'next/link'
import { ExternalLinkIcon } from 'lucide-react'

export function TemplatesUiGridItem({ listing }: { listing: TemplateListing }) {
  return (
    <Link href={`/templates/${listing.name}`} className="border rounded-lg overflow-hidden" passHref>
      <div className="bg-gray-100 dark:bg-gray-800 h-48 flex items-center justify-center">
        <h3 className="text-lg font-bold">{listing.name}</h3>
      </div>
      <div className="p-4 space-y-2">
        <h3 className="text-lg font-bold">{listing.name}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">{listing.description}</p>
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">by {listing.source.name}</p>
          <a
            href={listing.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm flex items-center gap-1 hover:underline"
          >
            View Repo <ExternalLinkIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </Link>
  )
}
