import React from "react"
import Swietlica from "./../../layouts/Grupy/Swietlica"
import Helmet from "react-helmet"
import SEO from "../../components/seo"

const SwietlicaPage = () => (
  <div>
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <SEO
      title="Świetlica"
      description="Świetlica dla niepełnosprawnych"
      keywords="Świetlica, niepełnosprawnych"></SEO>
    <Swietlica />
  </div>
)

export default SwietlicaPage
