import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql, Link } from "gatsby"
// Utils -----------------------------------------------------------------
import { makeStyles } from "@material-ui/core/styles"
import _ from "underscore"
// Components used in this layout -----------------------------------------
import Header from "../components/Header/Header"
import HeaderLinks from "../components/Header/HeaderLinks"
import GridContainer from "../components/Grid/GridContainer"
import GridItem from "../components/Grid/GridItem"
import Footer from "../components/Footer/Footer.js"
import Card from "../components/Card/Card.js"
import CardBody from "../components/Card/CardBody.js"
// Styles -----------------------------------------------------------------
import classNames from "classnames"
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

const NaszeInicjatywy = () => {
  const classes = useStyles()

  const data = useStaticQuery(graphql`
    query NaszeInicjatywy {
      allFile(filter: { relativePath: { regex: "/NaszeInic/" } }) {
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
  const OnMovie = _.select(data.allFile.edges, node => {
    return node.node.name === "OnMovie"
  })
  const szkutnia = _.select(data.allFile.edges, node => {
    return node.node.name === "SZKUTNIA"
  })
  const piatekPic = _.select(data.allFile.edges, node => {
    return node.node.name === "Piatek_fb"
  })
  const akt = _.select(data.allFile.edges, node => {
    return node.node.name === "akt"
  })
  const w1 = _.select(data.allFile.edges, node => {
    return node.node.name === "1"
  })
  const w2 = _.select(data.allFile.edges, node => {
    return node.node.name === "2"
  })
  const w3 = _.select(data.allFile.edges, node => {
    return node.node.name === "3"
  })
  const w4 = _.select(data.allFile.edges, node => {
    return node.node.name === "4"
  })
  const w5 = _.select(data.allFile.edges, node => {
    return node.node.name === "5"
  })
  const w6 = _.select(data.allFile.edges, node => {
    return node.node.name === "6"
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
        }}>

        <img
          src="https://firebasestorage.googleapis.com/v0/b/da5-webpage.appspot.com/o/nasze_inicjatywy_banner.svg?alt=media&token=5795f062-dad1-485e-9a97-83ad90cbe75e"
          className={classNames("normal-banner")}
          alt="Nasze Inicjatywy"
        />

        <img
          src="https://firebasestorage.googleapis.com/v0/b/da5-webpage.appspot.com/o/Events_mobile.svg?alt=media&token=0fd69e73-ed47-4ff8-a130-e63c15b21ad2"
          className={classNames("mobile-banner")}
          alt="Nasze Inicjatywy"
        />

        <GridContainer
          justify="left"
          style={{ paddingLeft: "50px", paddingRight: "50px" }}>
          <GridItem xs={12} sm={12} md={4}>
            <Card>
              <Img
                fluid={OnMovie[0].node.childImageSharp.fluid}
                style={{ height: "225px", width: "100%" }}
                alt="Nasze Inicjatywy"
                className={classes.imgCardTop}
              />
              <Link
                to="/naszeinicjatywy/onmovie/"
                style={{
                  alignSelf: "center",
                  cursor: "pointer",
                  color: "inherit",
                }}>
                <CardBody style={{ minHeight: "200px" }}>
                  <h5 className={classes.cardTitle}>ONMovie</h5>
                  <p style={{ lineHeight: "2" }}>
                    Tutaj możesz oglądać nasze filmy naszego kanalu
                  </p>
                </CardBody>
              </Link>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card>
              <Img
                fluid={szkutnia[0].node.childImageSharp.fluid}
                style={{ height: "225px", width: "100%" }}
                alt="Stock camera image"
                className={classes.imgCardTop}
              />
              <Link
                to="/naszeinicjatywy/szkutnia/"
                style={{
                  alignSelf: "center",
                  cursor: "pointer",
                  color: "inherit",
                }}>
                <CardBody style={{ minHeight: "200px" }}>
                  <h5 className={classes.cardTitle}>SZKUTNIA</h5>
                  <p style={{ lineHeight: "2" }}>
                    Tutaj znajdziesz nasze podcasty
                  </p>
                </CardBody>
              </Link>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card>
              <Img
                fluid={piatekPic[0].node.childImageSharp.fluid}
                style={{ height: "225px", width: "100%" }}
                alt="Stock camera image"
                className={classes.imgCardTop}
              />
              <Link
                to="/naszeinicjatywy/piatkanapiatek/"
                style={{
                  alignSelf: "center",
                  cursor: "pointer",
                  color: "inherit",
                }}>
                <CardBody style={{ minHeight: "200px" }}>
                  <h5 className={classes.cardTitle}>Piątka na Piątek</h5>
                  <p style={{ lineHeight: "2" }}>
                    Klikaj tu żeby czytać nasze artikuły
                  </p>
                </CardBody>
              </Link>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card>
              <Img
                fluid={akt[0].node.childImageSharp.fluid}
                style={{ height: "225px", width: "100%" }}
                alt="Stock camera image"
                className={classes.imgCardTop}
              />
              <Link
                to="#"
                style={{
                  alignSelf: "center",
                  cursor: "pointer",
                  color: "inherit",
                }}>
                <CardBody style={{ minHeight: "200px" }}>
                  <h5 className={classes.cardTitle}>Akademicki Klub Turystyczny</h5>
                </CardBody>
              </Link>
            </Card>
          </GridItem>
        </GridContainer>
        <GridContainer  
          justify="left"
          style={{ padding: "15px 50px"}}>
          <GridItem xs={12} sm={12} md={6}>
              <Img
                style={{
                  width: "100%",
                  display: "block",
                  objectFit: "cover",
                  borderRadius: "3px",
                  marginBottom: "15px"
                }}
                className={classes.imgCardTop}
                fluid={w1[0].node.childImageSharp.fluid}
                alt={"Zaczynamy nowy rok"}
              />
            </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Img
              style={{
                width: "100%",
                display: "block",
                objectFit: "cover",
                borderRadius: "3px",
                marginBottom: "15px"
              }}
              className={classes.imgCardTop}
              fluid={w2[0].node.childImageSharp.fluid}
              alt={"Misa en Español"}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Img
              style={{
                width: "100%",
                display: "block",
                objectFit: "cover",
                borderRadius: "3px",
                marginBottom: "15px"
              }}
              className={classes.imgCardTop}
              fluid={w3[0].node.childImageSharp.fluid}
              alt={"Roraty"}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Img
              style={{
                width: "100%",
                display: "block",
                objectFit: "cover",
                borderRadius: "3px",
                marginBottom: "15px"
              }}
              className={classes.imgCardTop}
              fluid={w4[0].node.childImageSharp.fluid}
              alt={"Algoritmy Boga"}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Img
              style={{
                width: "100%",
                display: "block",
                objectFit: "cover",
                borderRadius: "3px",
                marginBottom: "15px"
              }}
              className={classes.imgCardTop}
              fluid={w5[0].node.childImageSharp.fluid}
              alt={"Wiara rozum"}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Img
              style={{
                width: "100%",
                display: "block",
                objectFit: "cover",
                borderRadius: "3px",
                marginBottom: "15px"
              }}
              className={classes.imgCardTop}
              fluid={w6[0].node.childImageSharp.fluid}
              alt={"Kler Med"}
            />
          </GridItem>
        </GridContainer>
      </div>

      <Footer />
    </>
  )
}

export default NaszeInicjatywy
