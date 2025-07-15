import { TemplateListing, TemplateSource } from '@/types'
import { writeFileSync } from 'node:fs'
import { getListings } from './helpers/parse-template-groups'

const outputPath = './src/components/templates/templates.json'
const sources: TemplateSource[] = [
  {
    name: 'solana',
    owner: 'solana-developers',
    repo: 'solana-templates',
  },
  {
    name: 'solana-mobile',
    owner: 'solana-developers',
    repo: 'solana-mobile-templates',
  },
]

const listings: TemplateListing[] = await getListings({ sources })
const json = JSON.stringify(listings, null, 2) + '\n'
writeFileSync(outputPath, json)
console.log(' => Written templates to', outputPath)
