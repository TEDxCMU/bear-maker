import Link from 'next/link'

export default function Navbar(props) {
    return (<>
        <nav>
            <section className="navRight">
                <Link href="/"><strong>TEDxCMU Build-a-Ted</strong></Link>
            </section>
            <section className="navLeft">
                <Link href="/about"><strong>About</strong></Link>
            </section>
        </nav>
        </>
    )
  }
  