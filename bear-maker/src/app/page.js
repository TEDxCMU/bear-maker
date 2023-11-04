import { SaasProvider } from '@saas-ui/react'
import CharMaker from './charMaker.js'
import Navbar from './components/navbar.js'


export default function Home() {
  return (
    <>
      <Navbar/>
      <SaasProvider>
       <CharMaker></CharMaker>
      </SaasProvider>
    </>
  )
}
