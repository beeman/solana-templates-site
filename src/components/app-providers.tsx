'use client'

import { ThemeProvider } from '@/components/theme-provider'
import { ReactQueryProvider } from './react-query-provider'
import { NuqsAdapter } from 'nuqs/adapters/next/app'
import React from 'react'

export function AppProviders({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <NuqsAdapter>
      <ReactQueryProvider>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </ReactQueryProvider>
    </NuqsAdapter>
  )
}
