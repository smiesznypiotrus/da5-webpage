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

// Styles -----------------------------------------------------------------
import styles from "../../assets/jss/material-kit-react/views/landingPage.js"
import teamStyles from "../../assets/jss/material-kit-react/views/landingPageSections/teamStyle.js"
import customStyles from "../CustomClasses.js"
import "font-awesome/css/font-awesome.min.css"
import "../../assets/css/custom-style.css"
import statics from "../../components/colors"

const allStyles = {
  ...styles,
  ...customStyles,
  ...teamStyles,
}

const useStyles = makeStyles(allStyles)

const Duszpasterze = () => {
  const classes = useStyles()

  const data = useStaticQuery(graphql`
    query getPriestsBackground {
      allFile(filter: { relativePath: { regex: "/Duszpasterze/" } }) {
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

  const ProPic1 = _.select(data.allFile.edges, node => {
    return node.node.name === "Piotr_Tarabasz_profile"
  })

  const ProPic2 = _.select(data.allFile.edges, node => {
    return node.node.name === "Mateusz_Wojtowicz_profile"
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
          left: "50%", // Move the element to the left by 50% of the container's width
          transform: "translateX(-50%)",
        }}
      >
        <img
          src="https://firebasestorage.googleapis.com/v0/b/da5-webpage.appspot.com/o/Priests_banner.svg?alt=media&token=a62399d9-3a6e-4e20-8ce0-e1afaf2a0ad0"
          className={classNames("normal-banner")}
          alt="Normal Banner Duszpasterze"
        />

        <img
          src="https://firebasestorage.googleapis.com/v0/b/da5-webpage.appspot.com/o/priests_banner_mobile.svg?alt=media&token=31147100-68a2-44d0-89e8-3b07dde6660d"
          className={classNames("mobile-banner")}
          alt="Mobile Banner Duszpasterze"
        />

        {/* <div className={classes.container}>
          <div className={classes.normalPageTitleContainer}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <h2 className={classNames(classes.title, classes.grayText)}>
                  Obecni Duszpasterze
                </h2>
              </GridItem>
            </GridContainer>
          </div>
        </div> */}

        <div className={classes.container}>
          <div className={classes.section} style={{ paddingTop: "px" }}>
            <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
                <Card plain>
                  <GridItem xs={6} sm={4} md={4} className={classes.itemGrid}>
                  <Img
                        fluid={ProPic1[0].node.childImageSharp.fluid}
                        alt="..."
                        className={classNames(
                          classes.imgRaised,
                          classes.imgRoundedCircle,
                          classes.imgFluid
                        )}
                      />
                  </GridItem>
                  <h4 className={classes.cardTitle}>
                  Ks. Piotr Tarabasz
                    
                  </h4>
                  <CardBody>
                    <p
                      className={classes.description}
                      style={{ marginBottom: "0px" }}
                    >
                      Pochodzę z północnych rubieży miasta Łodzi, a kapłanem jestem od roku 2009. Od tego czasu posługiwałem jako wikariusz w dwóch parafiach: w Widawie i w Tomaszowie Mazowieckim. Zanim przyszedłem do Piątki jako duszpasterz akademicki, przez 5 lat studiowałem filozofię w Pampelunie.
<br />
<br />
Moją pasją jest ... bycie ciekawym świata, lubię poznawać to, co nowe. Stąd, być może, moje zamiłowanie do podróży i ogólnie pojętej aktywności, choć przyznam, że sportów wyczynowo niestety nie uprawiam.

                    </p>
                  </CardBody>
                  <CardFooter
                    className={classNames(
                      classes.justifyCenter,
                      classes.contactContainer
                    )}
                  >
                    <div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                      >
                        <Button
                          justIcon
                          color="transparent"
                          className={classes.margin5}
                        >
                          <i className={classes.socials + " fa fa-envelope"} />
                        </Button>
                        <a
                          href="mailto:somemail@gmail.com"
                          className={classNames(
                            classes.primaryColorText,
                            classes.margin5,
                            classes.spanText
                          )}
                        >
                          duszpasterstwo.piatka@gmail.com
                        </a>
                      </div>

                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                      >
                        <Button
                          justIcon
                          color="transparent"
                          className={classes.margin5}
                        >
                          <i className={classes.socials + " fa fa-phone"} />
                        </Button>
                        <span
                          className={classNames(
                            classes.margin5,
                            classes.spanText,
                            classes.description
                          )}
                        >
                          +48 781 384 678
                        </span>
                      </div>

                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                      >
                        <Button
                          justIcon
                          color="transparent"
                          className={classes.margin5}
                        >
                          <i className={classes.socials + " fa fa-facebook"} />
                        </Button>
                        <a
                          href="https://www.facebook.com/piotr.tarabasz"
                          className={classNames(
                            classes.margin5,
                            classes.spanText,
                            classes.description
                          )}
                          style={{ textDecoration: "none" }}
                        >
                          Piotr.tarabasz 
                        </a>
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              </GridItem>
              
              <GridItem xs={12} sm={12} md={6}>
                <Card plain>
                  <GridItem xs={6} sm={4} md={4} className={classes.itemGrid}>
                    {/* <img
                      src="https://i.redd.it/6onq25y0sh311.jpg"
                      alt="..."
                      className={classNames(
                        classes.imgRaised,
                        classes.imgRoundedCircle,
                        classes.imgFluid
                      )}
                    /> */}
                    <Img
                        fluid={ProPic2[0].node.childImageSharp.fluid}
                        alt="..."
                        className={classNames(
                          classes.imgRaised,
                          classes.imgRoundedCircle,
                          classes.imgFluid
                        )}
                      />
                  </GridItem>
                  <h4 className={classes.cardTitle}>
                  Ks. Mateusz Wójtowicz
                    
                  </h4>
                  {/* ========== x Mateusz opis ==========  */}
                  <CardBody>
                    <p
                      className={classes.description}
                      style={{ marginBottom: "0px" }}
                    >
Ksiądz, więc duszpasterz, ale także i fryzjer! Energia, porywczość, ale z uśmiechem. Kierownictwo duchowe, modlitwa, 
a to wszystko śpiewająco! Przez Maryję do Jezusa w Duchu Świętym oczywiście.
<br /><br />
Tak staram się żyć.
<br /><br />
Uwielbiać Boga nieustannie i dziękować Mu za to, ile codziennie dostaje… to i tak za mało, ale robię co w moich siłach. I nie wyobrażam sobie  nie zapraszać Was do tego czym sam żyje.
<br /><br /></p>
                  </CardBody>
                  <CardFooter
                    className={classNames(
                      classes.justifyCenter,
                      classes.contactContainer
                    )}
                  >
                    <div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                      >
                        <Button
                          justIcon
                          color="transparent"
                          className={classes.margin5}
                        >
                          <i className={classes.socials + " fa fa-envelope"} />
                        </Button>
                        <a
                          href="mailto:somemail@gmail.com"
                          className={classNames(
                            classes.primaryColorText,
                            classes.margin5,
                            classes.spanText
                          )}
                        >
                          duszpasterstwo.piatka@gmail.com
                        </a>
                      </div>

                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                      >
                        <Button
                          justIcon
                          color="transparent"
                          className={classes.margin5}
                        >
                          <i className={classes.socials + " fa fa-phone"} />
                        </Button>
                        <span
                          className={classNames(
                            classes.margin5,
                            classes.spanText,
                            classes.description
                          )}
                        >
                          +48 781 384 678
                        </span>
                      </div>

                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                      >
                        <Button
                          justIcon
                          color="transparent"
                          className={classes.margin5}
                        >
                          <i className={classes.socials + " fa fa-facebook"} />
                        </Button>
                        <a
                          href="https://www.facebook.com/mateusz.wojtowicz.144"
                          className={classNames(
                            classes.margin5,
                            classes.spanText,
                            classes.description
                          )}
                          style={{ textDecoration: "none" }}
                        >
                          mateusz.wojtowicz.144
                        </a>
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              </GridItem>

              
            </GridContainer>
          </div>
        </div>

        <div className={classes.container}>
          <div className={classes.normalPageTitleContainer}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <h2 className={classNames(classes.title, classes.grayText)}>
                  Byli duszpasterze
                </h2>
              </GridItem>
            </GridContainer>
          </div>
        </div>

        <div className={classes.container}>
          <div className={classes.section} style={{ paddingTop: "px" }}>
            <GridContainer justify="center">
              <GridItem xs={6} sm={6} md={2}>
                <h5 className={classes.pastPriests}>
                  Ksiądz Przemysław Góra
                  <br />
                  <small className={classes.smallTitle}>2016-2019</small>
                </h5>
              </GridItem>
              <GridItem xs={6} sm={6} md={2}>
                <h5 className={classes.pastPriests}>
                  Ksiądz Bartłomiej Franczak
                  <br />
                  <small className={classes.smallTitle}>2015-2017</small>
                </h5>
              </GridItem>
              <GridItem xs={6} sm={6} md={2}>
                <h5 className={classes.pastPriests}>
                  Ksiądz Łukasz Tarnawski
                  <br />
                  <small className={classes.smallTitle}>2012-2016</small>
                </h5>
              </GridItem>
              <GridItem xs={6} sm={6} md={2}>
                <h5 className={classes.pastPriests}>
                  Ksiądz Piotr Mieloszyński
                  <br />
                  <small className={classes.smallTitle}>2014-2015</small>
                </h5>
              </GridItem>
              <GridItem xs={6} sm={6} md={2}>
                <h5 className={classes.pastPriests}>
                  Ksiądz Paweł Dziedziczak
                  <br />
                  <small className={classes.smallTitle}>2000 – 2014</small>
                </h5>
              </GridItem>
              <GridItem xs={6} sm={6} md={2}>
                <h5 className={classes.pastPriests}>
                  Ksiądz Jan Czekalski
                  <br />
                  <small className={classes.smallTitle}>2007 – 2012</small>
                </h5>
              </GridItem>
              <GridItem xs={6} sm={6} md={2}>
                <h5 className={classes.pastPriests}>
                  Ksiądz Marek Kaczmarek
                  <br />
                  <small className={classes.smallTitle}>1996 – 2000</small>
                </h5>
              </GridItem>
              <GridItem xs={6} sm={6} md={2}>
                <h5 className={classes.pastPriests}>
                  Ksiądz Jan Słomka
                  <br />
                  <small className={classes.smallTitle}>1993 – 1996</small>
                </h5>
              </GridItem>
              <GridItem xs={6} sm={6} md={2}>
                <h5 className={classes.pastPriests}>
                  Ksiądz Paweł Lisowski
                  <br />
                  <small className={classes.smallTitle}>1990 – 2007</small>
                </h5>
              </GridItem>
              <GridItem xs={6} sm={6} md={2}>
                <h5 className={classes.pastPriests}>
                  Ksiądz Mirosław Strożka
                  <br />
                  <small className={classes.smallTitle}>1975 – 1990</small>
                </h5>
              </GridItem>
              <GridItem xs={6} sm={6} md={2}>
                <h5 className={classes.pastPriests}>
                  Ksiądz Jan Sobczak
                  <br />
                  <small className={classes.smallTitle}>1964 – 1974</small>
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

export default Duszpasterze
