import { SaasProvider } from '@saas-ui/react'
import CharMaker from './charMaker.js'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SaasProvider>
       <CharMaker></CharMaker>
      </SaasProvider>
    </main>
  )
}
