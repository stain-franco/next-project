import Layout from "../components/Layout"

const HomePage = () => {
  return (
    <div>
      <h1>¡Bienvenido a mi sitio web!</h1>
      <p>Este es el contenido de mi página de inicio.</p>
    </div>
  )
}

HomePage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}

export default HomePage
