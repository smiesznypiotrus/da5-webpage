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
import CardBody from "../../components/Card/CardBody"
import CardFooter from "../../components/Card/CardFooter"
import Button from "../../components/CustomButtons/Button"
import Footer from "../../components/Footer/Footer.js"
import BackToGrupy from "../../components/CustomButtons/BackToGrupy"

// Styles -----------------------------------------------------------------
import styles from "../../assets/jss/material-kit-react/views/landingPage.js"
import teamStyles from "../../assets/jss/material-kit-react/views/landingPageSections/teamStyle.js"
import customStyles from "../CustomClasses"
import "font-awesome/css/font-awesome.min.css"
import "../../assets/css/custom-style.css"
import statics from "../../components/colors"
import "../../assets/css/group-style.css"

const allStyles = {
  ...styles,
  ...customStyles,
  ...teamStyles,
}

const useStyles = makeStyles(allStyles)

const Akt = () => {
  const classes = useStyles()

  const data = useStaticQuery(graphql`
    query aktGetPictures {
      allFile(filter: { relativePath: { regex: "/Akt/" } }) {
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

//   const groupPic = _.select(data.allFile.edges, node => {
//     return node.node.name === "group_photo"
//   })
  const background = _.select(data.backgroundPic.edges, node => {
    return node.node.name === "background"
  })
  const logo = _.select(data.allFile.edges, node => {
    return node.node.name === "Akt_logo"
  })
//   const point2 = _.select(data.allFile.edges, node => {
//     return node.node.name === "ico__akt-23"
//   })
//   const point3 = _.select(data.allFile.edges, node => {
//     return node.node.name === "ico__akt-24"
//   })
//   const liderPic = _.select(data.allFile.edges, node => {
//     return node.node.name === "Lider_profile"
//   })
//   const dateBanner = _.select(data.allFile.edges, node => {
//     return node.node.name === "Date_uwielbienia"
//   })
//   const stairsLogo = _.select(data.allFile.edges, node => {
//     return node.node.name === "Localisation-04"
//   })

  return (
    <>
      <Header
        color={statics.navBarColor}
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
          left: "48%",
          transform: "translateX(-50%)",
        }}>
        
        <div className={classNames("padding-div")}>
          <div className={classes.container}>
            <div className={classes.section}>
              <GridContainer>
                {/* =============================================================
                    Grupy picture and description
                  ============================================================= */}
                <GridItem xs={12} sm={12} md={4}>
                    <img
                        src={logo[0].node.publicURL}
                        style={{ width: "90%", height: "auto", marginBottom: "30px" , textAlign: "left", marginLeft: "7%"}}
                        alt="Akt Banner">
                    </img>
                </GridItem>
                <GridItem xs={12} sm={12} md={8}>
                    <CardBody>
                      <p
                        className={classNames(
                          classes.description,
                          classes.grayText,
                          "body-text"
                        )}
                        style={{
                            marginTop: "-20px",
                            fontFamily: "Lato",
                            letterSpacing: "0.06em",
                            paddingLeft: "7%",
                            paddingRight: "6%",
                        }}>
                        <b>AKT czyli Akademicki Klub Turystyczny</b> to źródło podróżniczych inspiracji, które nie pozwolą nam usiedzieć w miejscu. 
                        Wezwanie Papieża Franciszka do wstania z wygodnej sofy bierzemy w naszym Klubie dosłownie.<br/><br/>
                        Organizujemy studenckie wyjazdy, ale chcemy stworzyć także - pomiędzy nimi - przestrzeń do dzielenia się naszymi podróżniczymi przygodami poprzez spotkania autorskie czy wystawy fotografii podróżniczej.<br/><br/> 
                        Zapraszamy, choć AKTualnie możemy być w podroży…
                      </p>
                    </CardBody>
                </GridItem>
                {/* =============================================================
                    Group leader profile
                  ============================================================= */}
                {/* <GridItem xs={12} sm={12} md={4}>
                  <Card plain>
                    <GridItem xs={6} sm={6} md={6} className={classes.itemGrid}>
                      <Img
                        fluid={liderPic[0].node.childImageSharp.fluid}
                        alt="LeaderPic"
                        className={classNames(
                          classes.imgRaised,
                          classes.imgRoundedCircle,
                          classes.imgFluid
                        )}
                      />
                    </GridItem>
                    <h4 className={classes.cardTitle}>
                      ks. Mateusz Wójtowicz
                      <br />
                      <small className={classes.smallTitle}>Lider</small>
                    </h4>
                    <CardBody>
                      <p
                        className={classNames(
                          classes.description,
                          classes.grayText,
                          "body-text"
                        )}>
                        Uwielbiać Boga nieustannie i dziękować Mu za to, ile codziennie dostaje… to i tak za mało, 
                        ale robię co w moich siłach. I nie wyobrażam sobie  nie zapraszać Was do tego czym sam żyje.
                      </p>
                    </CardBody> */}
                    {/* =============================================================
                        Leader contact
                      ============================================================= */}
                    {/* <CardFooter
                      className={classNames(
                        classes.justifyCenter,
                        classes.contactContainer
                      )}>
                      <div> */}
                        {/* =============================================================
                            Mail information
                          ============================================================= */}
                        {/* <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                          }}>
                          <Button
                            justIcon
                            color="transparent"
                            className={classes.margin5}>
                            <i
                              className={classes.socials + " fa fa-envelope"}
                            />
                          </Button>
                          <a
                            href="mailto:duszpasterstwo.piatka@gmail.com"
                            className={classNames(
                              classes.primaryColorText,
                              classes.margin5,
                              classes.spanText
                            )}>
                            duszpasterstwo.piatka@gmail.com
                          </a>
                        </div> */}
                        {/* =============================================================
                            Phone information
                          ============================================================= */}

                        {/* =============================================================
                            Facebook information
                          ============================================================= */}
                        {/* <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                          }}>
                          <Button
                            justIcon
                            color="transparent"
                            className={classes.margin5}>
                            <i
                              className={classes.socials + " fa fa-facebook"}
                            />
                          </Button>
                          <a
                            href="https://www.facebook.com/mateusz.wojtowicz.144"
                            className={classNames(
                              classes.margin5,
                              classes.spanText,
                              classes.description
                            )}
                            style={{ textDecoration: "none" }}>
                            mateusz.wojtowicz.144
                          </a>
                        </div>
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
                          Wtorek
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
                                "body-text",
                                "icon-label"
                              )}>
                              Kaplica
                            </p>
                          </div>
                        </GridItem>
                      </div>
                    </CardFooter>
                  </Card>
                </GridItem>*/}
              </GridContainer> 
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Akt
