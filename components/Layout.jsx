import Head  from "next/head";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({children}) {
  return (
    <div className="relative w-screen h-screen flex flex-col">
      <Head>
        <title>Resto</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>

      <main className="mt-[80px] max-h-full relative z-40 container-wrapper flex-1">
        {children}
      </main>

      <Footer/>
    </div>
  )
}
