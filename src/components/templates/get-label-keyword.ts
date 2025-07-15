export function getLabelKeyword(keyword: string) {
  switch (keyword) {
    case 'anchor-basic':
      return 'Anchor Basic'
    case 'anchor-counter':
      return 'Anchor Counter'
    case 'expo':
      return 'Expo'
    case 'express':
      return 'Express'
    case 'gill':
      return 'Gill'
    case 'nextjs':
      return 'Next.js'
    case 'node':
      return 'Node'
    case 'react':
      return 'React'
    case 'react-native':
      return 'React Native'
    case 'react-native-paper':
      return 'React Native Paper'
    case 'solana-kit':
      return '@solana/kit'
    case 'solana-web3js':
      return '@solana/web3.js'
    case 'tailwind':
      return 'Tailwind'
    case 'typescript':
      return 'TypeScript'
    case 'vite':
      return 'Vite'
    case 'wallet-adapter':
      return 'Wallet Adapter'
    case 'wallet-ui':
      return 'Wallet UI'
    default:
      return keyword
  }
}
