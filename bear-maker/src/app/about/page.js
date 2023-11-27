import { SaasProvider } from '@saas-ui/react'
import Navbar from '../components/navbar.js'
import { Courier_Prime } from 'next/font/google';

export default function About() {
    return <>
    <Navbar/>
    {/* <SaasProvider> */}
        <div className="aboutContainer">
            <h1 className="aboutHeader">About</h1>
            <p className="aboutText">
                Build-A-Ted is a joint venture by TEDxCMU Innovation and TEDxCMU Salon.
            </p>
            <h2 className='aboutHeader'>Salon</h2>
            <p className='aboutText'>
                TEDxCMU Salon is a tight-knit team that uplifts student voices and strengthens our Carnegie Mellon community through self-curated events, projects, and gatherings outside of the annual TEDx mainstage conference. We strive for relevance to our current collective moment and impact on community. Feel free to engage with our past events, including Food For Thought and Black Academics Matter, via tedxcmu.org.
            </p>
            <a className="selectButton" href="https://www.tedxcmu.org/">TEDxCMU</a>
        
            <h2 className='aboutHeader'>Innovation</h2>
            <p className='aboutText'>
                The TEDxCMU Innovation team creates interactive experiences for the TEDxCMU board and its events. We spearhead challenging and creative projects, using technology to deliver impactful solutions. Past projects include our TEDxCMU mobile app, virtual platforms for our main events, and an LED matrix. We also curate local innovators for the annual TEDxCMU Innovation Expo in the Spring to accompany our main event. Feel free to check out some of our past projects on our Github.
            </p>
            <a className="selectButton" href="https://github.com/TEDxCMU">Github</a>
            </div>
        
    {/* </SaasProvider> */}
  </>;
  }