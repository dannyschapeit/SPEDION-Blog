import Meta from '../components/meta'
import Footer from '../components/footer'
import Header from '../components/header'

export default function Layout({ children, meta_desc}) {
  return (
    <>
      <Header />
      <Meta description={meta_desc}/>
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}
