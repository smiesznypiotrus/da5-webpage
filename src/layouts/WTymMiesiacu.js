import React from "react"
import { useStaticQuery, graphql } from "gatsby"
// Utils -----------------------------------------------------------------
import classNames from "classnames"
import _ from "underscore"
// Components used in this layout -----------------------------------------
import Img from "gatsby-image"
import Header from "../components/Header/Header"
import HeaderLinks from "../components/Header/HeaderLinks"
import GridContainer from "../components/Grid/GridContainer"
import GridItem from "../components/Grid/GridItem"
import Footer from "../components/Footer/Footer.js"
// Styles -----------------------------------------------------------------
import { makeStyles } from "@material-ui/core/styles"
import styles from "../assets/jss/material-kit-react/views/landingPage.js"
import teamStyles from "../assets/jss/material-kit-react/views/landingPageSections/teamStyle.js"
import customStyles from "./CustomClasses.js"
import "font-awesome/css/font-awesome.min.css"
import "../assets/css/custom-style.css"

const allStyles = {
  ...styles,
  ...customStyles,
  ...teamStyles,
}

const useStyles = makeStyles(allStyles)

const WTymMiesiacu = () => {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query getMonthPhotos {
      allFile(filter: { relativePath: { regex: "/^WTtymMiesiącu/" } }) {
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
  var images = []
  /* ==========================================================
        Map each element of the query to a corresponding element
    ============================================================= */
  if (data && data.allFile && data.allFile.edges) {
    var flattenedNodes = []
    _.each(data.allFile.edges, item => {
      flattenedNodes.push(item.node)
    })
    _.each(flattenedNodes, node => {
      images.push(
        <GridItem xs={12} sm={12} md={6} key={node.name}>
          <Img
            style={{
              width: "100%",
              display: "block",
              objectFit: "cover",
              borderRadius: "3px",
            }}
            className={classes.imgCardTop}
            fluid={node.childImageSharp.fluid}
            alt={node.name}
          />
        </GridItem>
      )
    })
  }

  const background = _.select(data.backgroundPic.edges, node => {
    return node.node.name === "background"
  })

  return (
    <>
      <Header
        color="white"
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
          overflowX: "hidden",
          borderRadius: "0px 0px 6px 6px",
        }}>
        
        <div className={classes.container}>
          <div className={classes.normalPageTitleContainer}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <h2 className={classNames(classes.title, classes.grayText)}>
                  W Tym Miesiącu
                </h2>
              </GridItem>
            </GridContainer>
          </div>
        </div>

        <GridContainer>
          {images}
        </GridContainer>
      </div>

      <Footer />
    </>
  )
}

export default WTymMiesiacu
