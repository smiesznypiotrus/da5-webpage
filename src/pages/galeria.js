import React from "react"
import Galeria from "../layouts/Galeria"
import SEO from "../components/seo"

class GaleriaPage extends React.Component {
  render() {
    return (
      <>
        <SEO
          title="Galeria"
          description="Ta strona zabiera naszą galerię"
          keywords="Galeria, zdięcia"></SEO>
        <Galeria />
      </>
    )
  }
}

export default GaleriaPage
