import React from "react"
import Exodus from "./../../layouts/Grupy/Exodus"
import Helmet from "react-helmet"
import SEO from "../../components/seo"


const ExodusPage = () => (
    <div>
        <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet" />
        </Helmet>
        <SEO
        title="Exodus"
        description="Męska wspólnota"
        keywords="Exodus, wspólnota, męska"></SEO>
        <Exodus />
    </div>
    
)

export default ExodusPage
