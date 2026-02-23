import type { ReactNode } from 'react';

// Root layout: minimal wrapper required by Next.js.
// The [locale]/layout.tsx provides the actual <html> and <body>.
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
