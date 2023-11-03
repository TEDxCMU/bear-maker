import { SaasProvider } from '@saas-ui/react'
import CharMaker from './charMaker.js'


export default function Home() {
  return (
    <>
      <SaasProvider>
      <CharMaker/>
      </SaasProvider>
    </>
  )
}
