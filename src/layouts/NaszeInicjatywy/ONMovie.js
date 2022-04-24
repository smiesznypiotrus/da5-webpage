import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
// Utils -----------------------------------------------------------------
import { makeStyles } from "@material-ui/core/styles"
import _ from "underscore"
// Components used in this layout -----------------------------------------
import Header from "../../components/Header/Header"
import HeaderLinks from "../../components/Header/HeaderLinks"
import Footer from "../../components/Footer/Footer.js"
import Youtube from "../../components/Youtube/Youtube"
// Styles -----------------------------------------------------------------
import classNames from "classnames"
import styles from "../../assets/jss/material-kit-react/views/landingPage.js"
import teamStyles from "../../assets/jss/material-kit-react/views/landingPageSections/teamStyle.js"
import customStyles from "./../CustomClasses.js"
import "font-awesome/css/font-awesome.min.css"
import "../../assets/css/custom-style.css"
import statics from "../../components/colors"

const allStyles = {
  ...styles,
  ...customStyles,
  ...teamStyles,
}

const useStyles = makeStyles(allStyles)

const ONMovie = () => {
  const classes = useStyles()

  const data = useStaticQuery(graphql`
    query ONMovie {
      allOnMovieJson {
        edges {
          node {
            playlistLink
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

  const videoComponents = []

  const background = _.select(data.backgroundPic.edges, node => {
    return node.node.name === "background"
  })

  // const links = data.allOnMovieJson.edges[0].node.links

  // _.forEach(links, link => {
  //     videoComponents.push(
  //         <>
  //           <div className="podcast" key={link} style={{ marginTop: '30px', marginBottom: '30px'}}>
  //               <Youtube id={link} />
  //           </div>
  //         </>
  //     )
  // })

  const playlistLink = data.allOnMovieJson.edges[0].node.playlistLink

  videoComponents.push(
    <>
      <div className="podcast" key={playlistLink} style={{ marginTop: '30px', marginBottom: '30px'}}>
          <Youtube id={playlistLink} />
      </div>
    </>
)




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
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            {videoComponents}
          </div>
      </div>
      <Footer />
    </>
  )
}

export default ONMovie
