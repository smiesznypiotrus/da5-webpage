// @material-ui/core components -------------------------------------------
import { makeStyles } from "@material-ui/core/styles"

// nodejs library that concatenates classes -------------------------------
import classNames from "classnames"

import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import _ from "underscore"

// Components used in this layout -----------------------------------------
import Header from "../../components/Header/Header"
import HeaderLinks from "../../components/Header/HeaderLinks"
import GridContainer from "../../components/Grid/GridContainer"
import GridItem from "../../components/Grid/GridItem"
import Card from "../../components/Card/Card"
import CardFooter from "../../components/Card/CardFooter"
import Footer from "../../components/Footer/Footer.js"

// Styles -----------------------------------------------------------------
import styles from "../../assets/jss/material-kit-react/views/landingPage.js"
import teamStyles from "../../assets/jss/material-kit-react/views/landingPageSections/teamStyle.js"
import customStyles from "../CustomClasses"
import "font-awesome/css/font-awesome.min.css"
import "../../assets/css/custom-style.css"
import "../../assets/css/oaza-style.css"

const allStyles = {
  ...styles,
  ...customStyles,
  ...teamStyles,
}

const useStyles = makeStyles(allStyles)

const Sport = () => {
  const classes = useStyles()

  const data = useStaticQuery(graphql`
    query spoortGetPictures {
      allFile(filter: { relativePath: { regex: "/Sport/" } }) {
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
              fluid(fit: COVER, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  const groupPic = _.select(data.allFile.edges, node => {
    return node.node.name === "Photo_8"
  })
  const background = _.select(data.backgroundPic.edges, node => {
    return node.node.name === "background"
  })
  const banner = _.select(data.allFile.edges, node => {
    return node.node.name === "Banner_08"
  })
  const point1 = _.select(data.allFile.edges, node => {
    return node.node.name === "ico__sport-04"
  })
  const point2 = _.select(data.allFile.edges, node => {
    return node.node.name === "ico__sport-05"
  })
  const point3 = _.select(data.allFile.edges, node => {
    return node.node.name === "ico__sport-06"
  })
  const dateBanner = _.select(data.allFile.edges, node => {
    return node.node.name === "Date_sport"
  })
  const stairsLogo = _.select(data.allFile.edges, node => {
    return node.node.name === "Localisation-05"
  })

  return (
    <>
      <Header
        color="transparent"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 150,
          color: "white",
        }}
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
          src={banner[0].node.publicURL}
          style={{ width: "100%", height: "auto", marginBottom: "0px" }}
          alt="Sport Banner"></img>
        <div className={classNames("padding-div")}>
          <div className={classes.container}>
            <div className={classes.section}>
              <GridContainer>
                <GridItem xs={12} sm={12} md={8}>
                  <Img
                    style={{
                      width: "100%",
                      objectFit: "cover",
                      borderRadius: "3px",
                      marginBottom: "10px",
                    }}
                    fluid={groupPic[0].node.childImageSharp.fluid}
                    alt={groupPic[0].node.name}
                  />
                  <h6 className={classNames("quote")}>
                    W zdrowym ciele, zdrowy duch
                  </h6>
                  <p
                    className={classNames(
                      classes.description,
                      classes.grayText,
                      "body-text"
                    )}>
                    Duszpasterstwo Akademickie
                    <span className={classNames("sport-color")}>
                      &nbsp;stawia na Twój rozwój fizyczny,&nbsp;
                    </span>
                    proponując możliwość uprawiania sportu.
                  </p>

                  <p
                    className={classNames(
                      classes.description,
                      classes.grayText,
                      "body-text"
                    )}>
                    W każdy piątek o godz. 20.00 spotykamy się w „Piątce” i
                    wspólnie ruszamy do sali gimnastycznej Wyższego Seminarium
                    Duchownego.
                  </p>

                  <p
                    className={classNames(
                      classes.description,
                      classes.grayText,
                      "body-text"
                    )}>
                    Oczywiście wybieramy
                    <span className={classNames("sport-color")}>
                      &nbsp;wyłącznie gry zespołowe,&nbsp;
                    </span>
                    tak aby
                    <span className={classNames("sport-color")}>
                      &nbsp;wzmocnić nie tylko ciało, ale i naszą wspólnotę.
                    </span>
                  </p>

                  <br></br>

                  <p
                    className={classNames(
                      classes.description,
                      classes.grayText,
                      "body-text",
                      "strikearound-sport"
                    )}>
                    {" "}
                    Przyjdź, jeśli lubisz grać w...{" "}
                  </p>
                  <GridItem xs={12} sm={12} md={12}>
                    <div
                      className={classNames("icon-text-container")}
                      style={{ justifyContent: "flex-start" }}>
                      <img
                        className={classNames("icon")}
                        src={point1[0].node.publicURL}
                        alt="Point 1"
                      />
                      <p
                        className={classNames(
                          classes.description,
                          classes.grayText,
                          "body-text"
                        )}>
                        Piłkę nożną
                      </p>
                    </div>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={12}>
                    <div
                      className={classNames("icon-text-container")}
                      style={{ justifyContent: "flex-start" }}>
                      <img
                        className={classNames("icon")}
                        src={point2[0].node.publicURL}
                        alt="Point 2"
                      />
                      <p
                        className={classNames(
                          classes.description,
                          classes.grayText,
                          "body-text"
                        )}>
                        Koszykówkę
                      </p>
                    </div>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={12}>
                    <div
                      className={classNames("icon-text-container")}
                      style={{ justifyContent: "flex-start" }}>
                      <img
                        className={classNames("icon")}
                        src={point3[0].node.publicURL}
                        alt="Point 3"
                      />

                      <p
                        className={classNames(
                          classes.description,
                          classes.grayText,
                          "body-text"
                        )}>
                        Siatkówkę
                      </p>
                    </div>
                  </GridItem>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <Card plain>
                    <CardFooter
                      className={classNames(
                        classes.justifyCenter,
                        classes.contactContainer
                      )}>
                      <div>
                        <img
                          src={dateBanner[0].node.publicURL}
                          alt="DateBanner"
                          style={{ paddingTop: "25px" }}
                        />
                        <p
                          className={classNames(
                            classes.description,
                            classes.grayText,
                            "meeting-date"
                          )}>
                          Piątek
                          <br />
                          <span style={{ fontWeight: "normal" }}>20:00</span>
                        </p>
                        <GridItem xs={12} sm={12} md={12}>
                          <div className={classNames("icon-text-container")}>
                            <img
                              alt="Location_Logo"
                              className={classNames("icon")}
                              src={stairsLogo[0].node.publicURL}
                            />
                            <p
                              className={classNames(
                                classes.description,
                                classes.grayText,
                                "body-text"
                              )}>
                              Tymczasowo zawieszone :( &nbsp; trwa remont Sali gimnastycznej
                            </p>
                          </div>
                        </GridItem>
                      </div>
                    </CardFooter>
                  </Card>
                </GridItem>
              </GridContainer>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Sport
