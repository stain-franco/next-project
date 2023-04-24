import Header from "./Header"
import Footer from "./Footer"

const Layout = ({children}) => {
  return (
    <div>
        <Header/>
        <h1>Nuevos cambios para el Layout</h1>
        {children}
        <Footer/>
    </div>
  )
}

export default Layout