import Head  from "next/head";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({children}) {
  return (
    <div className="relative max-w-screen h-screen w-full flex flex-col">
      <Head>
        <title>Resto</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>

      <main className="mt-[80px] relative z-40 flex-1">
        {children}
      </main>

      <Footer/>
    </div>
  )
}
