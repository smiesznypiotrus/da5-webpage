// @material-ui/core components -------------------------------------------
import { makeStyles } from "@material-ui/core/styles"

// nodejs library that concatenates classes -------------------------------
import classNames from "classnames"

import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import _ from "underscore"
import { facebookUrl, instagramUrl, openWebsite } from "../Common.js"

// Components used in this layout -----------------------------------------
import Header from "../../components/Header/Header"
import HeaderLinks from "../../components/Header/HeaderLinks"
import GridContainer from "../../components/Grid/GridContainer"
import GridItem from "../../components/Grid/GridItem"
import Footer from "../../components/Footer/Footer.js"
import FbSvg from "../../images/SVGs/Home/__Facebook.svg"
import IgSvg from "../../images/SVGs/Home/__instagram.svg"

// Styles -----------------------------------------------------------------
import styles from "../../assets/jss/material-kit-react/views/landingPage.js"
import teamStyles from "../../assets/jss/material-kit-react/views/landingPageSections/teamStyle.js"
import "font-awesome/css/font-awesome.min.css"
import "../../assets/css/custom-style.css"
import statics from "../../components/colors"

const allStyles = {
  ...styles,
  ...teamStyles,
}

const useStyles = makeStyles(allStyles)

const Duszpasterstwo = () => {
  const classes = useStyles()

  const data = useStaticQuery(graphql`
    query Duszpasterstwo {
      allFile(filter: { relativePath: { regex: "/Duszpastertswo/" } }) {
        edges {
          node {
            name
            publicURL
            childImageSharp {
              fluid(fit: COVER, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }

      backgroundPic: allFile(
        filter: { relativePath: { regex: "/Background/" } }
      ) {
        edges {
          node {
            name
            childImageSharp {
              fluid(fit: COVER, quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  const background = _.select(data.backgroundPic.edges, node => {
    return node.node.name === "background"
  })

  const DuszpasterstwoPic = _.select(data.allFile.edges, node => {
    return node.node.name === "priest"
  })

  return (
    <>
      <Header
        color={statics.navBarColor}
        routes={[]}
        rightLinks={<HeaderLinks />}
        fixed
      />

      <div className={classNames("mobile-banner")}>
        <Header color="white" routes={[]} rightLinks={<HeaderLinks />} fixed />
      </div>

      <Img
        style={{
          position: "fixed",
          opacity: "0.6",
          width: "100%",
          height: "100%",
        }}
        fluid={background[0].node.childImageSharp.fluid}
        alt={background[0].node.name}
      />

      <div
        className={classNames(
          classes.main,
          classes.mainRaised,
          "main-card-margin",
          "floating-card-width"
        )}
        style={{
          display: "inline-block",
          position: "relative",
          left: "50%",
          transform: "translateX(-50%)",
        }}>
        {/* =============================================================
            Page title
          ============================================================= */}

        <div>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/da5-webpage.appspot.com/o/duszpasterstwo_banner.svg?alt=media&token=7ee647dc-1c20-4bdb-9964-03824591af75"
            className={classNames("normal-banner")}
            alt="Duszpastertswo"
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/da5-webpage.appspot.com/o/duszpasterstwo_mobile.svg?alt=media&token=51eed174-1e5a-4448-b3f4-a381b6be7bb4"
            className={classNames("mobile-banner")}
            alt="Duszpastertswo"
          />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}>
          <Img
            fluid={DuszpasterstwoPic[0].node.childImageSharp.fluid}
            alt="..."
            className={classNames(classes.imgRaised, classes.imgFluid)}
            style={{
              width: "50%",
              borderRadius: "10px",
            }}
          />
        </div>

        <p className={classes.description} style={{ margin: "25px" }}>
          Okres studiów to bez wątpienia najpiękniejszy czas w życiu człowieka.
          Jest jednocześnie najważniejszym czasem, bo to właśnie wtedy młody
          człowiek decyduje o przyszłości swojego dorosłego życia. Wybory, które
          nas kształtują potrzebują twórczej obecności drugiego człowieka, stąd
          kluczem do dokonywania dobrych i słusznych decyzji jest zawsze
          odpowiedni towarzysz drogi.
          <br />
          <br />
          Duszpasterstwo Akademickie „Piątka” to propozycja dla tych, którzy w
          swych poszukiwaniach właściwej drogi nie boją się zaufać drugiemu
          człowiekowi i chcą iść naprzód we wspólnocie. Tutaj spotkasz żywego
          Boga, który działa przez tego który jest obok. Bliżej niż myślisz.
          <br />
          <br />
          Znajdziesz nas tuż obok katedry, przy ul. Skorupki 5.
          <br />A także:
        </p>

        <div className={classes.container}>
          <div className={classes.section}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <FbSvg
                  className={classNames(classes.svgLogo)}
                  style={{ cursor: "pointer" }}
                  onClick={() => openWebsite(facebookUrl)}
                  onKeyDown={() => openWebsite(facebookUrl)}
                  aria-hidden="true"
                />
                <h5
                  className={classNames(classes.description, classes.grayText)}>
                  Facebook
                </h5>
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <IgSvg
                  className={classNames(classes.svgLogo)}
                  style={{ cursor: "pointer" }}
                  onClick={() => openWebsite(instagramUrl)}
                  onKeyDown={() => openWebsite(instagramUrl)}
                  aria-hidden="true"
                />
                <h5
                  className={classNames(classes.description, classes.grayText)}>
                  Instagram
                </h5>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Duszpasterstwo
