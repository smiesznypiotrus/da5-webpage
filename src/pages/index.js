import React from "react"
import HomePage from "../layouts/HomePage"
import SEO from "../components/seo"

function IndexPage() {
  return (
    <>
      <SEO
        title="Duszpasterstwo Akademickie Piątka w Łodzi"
        description="Ta strona zabiera informację z Duszpastertswa Ackademickiego z Łodzi"
        keywords="Duszpasterstwo, Łódź, Piątka"></SEO>
      <HomePage></HomePage>
    </>
  )
}

export default IndexPage
