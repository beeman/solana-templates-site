export function getLabelSource(source: string) {
  switch (source) {
    case 'solana':
      return 'Solana Foundation'
    case 'solana-mobile':
      return 'Solana Mobile'
    default:
      return source
  }
}
