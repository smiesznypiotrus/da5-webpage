import React from "react"
import PlanTygodnia from "../layouts/PlanTygodnia"
import SEO from "../components/seo"

const IndexPage = () => (
  <>
    <SEO
      title="Plan Tygodnia"
      description="Tutaj możesz znaleźć nasz Plan Tygodnia"
      keywords="Plan Tygodnia, DA5, Godziny"></SEO>
    <PlanTygodnia></PlanTygodnia>
  </>
)

export default IndexPage
