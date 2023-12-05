import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <img src="/351logo_square.png" width="200" height="200" alt="351 design logo"/>
        <Header title="Trusted guides for active travel" />
        <p>351 design is a digital and print publishing company.</p>
        <p>We create adventure travel guidebooks, maps, and digital assets that help people explore cities and holiday destinations in an active way.</p>
        <a href="mailto:contact@351design.com">
                  <button type="button" class="contact-button">
                    Contact
                  </button>
                </a>

      </main>

      <Footer />
    </div>
  )
}
