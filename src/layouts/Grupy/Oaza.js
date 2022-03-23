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
import "../../assets/css/oaza-style.css"

const allStyles = {
  ...styles,
  ...customStyles,
  ...teamStyles,
}

const useStyles = makeStyles(allStyles)

const Oaza = () => {
  const classes = useStyles()

  const data = useStaticQuery(graphql`
    query oazaGetPictures {
      allFile(filter: { relativePath: { regex: "/Oaza/" } }) {
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
    return node.node.name === "group_photo"
  })
  const background = _.select(data.backgroundPic.edges, node => {
    return node.node.name === "background"
  })
  const banner = _.select(data.allFile.edges, node => {
    return node.node.name === "Banner_02"
  })
  const point1 = _.select(data.allFile.edges, node => {
    return node.node.name === "ico__oaza-13"
  })
  const point2 = _.select(data.allFile.edges, node => {
    return node.node.name === "ico__oaza-14"
  })
  const point3 = _.select(data.allFile.edges, node => {
    return node.node.name === "ico__oaza-15"
  })
  const liderPic = _.select(data.allFile.edges, node => {
    return node.node.name === "Lider_profile"
  })
  const dateBanner = _.select(data.allFile.edges, node => {
    return node.node.name === "Date_oaza"
  })
  const stairsLogo = _.select(data.allFile.edges, node => {
    return node.node.name === "Localisation-06"
  })

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
          left: "50%",
          transform: "translateX(-50%)",
        }}>
        <img
          src={banner[0].node.publicURL}
          style={{ width: "100%", height: "auto", marginBottom: "0px" }}
          alt="Oaza Banner"></img>
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
                  <h6 className={classNames("quote")}>Idąc do Źródła</h6>
                  <p
                    className={classNames(
                      classes.description,
                      classes.grayText,
                      "body-text"
                    )}>
                    Nasza wspólnota gromadzi studentów i młodych pracujących,
                    którzy idą
                    <span className={classNames("oaza-color")}>
                      &nbsp;programem formacyjnym Ruchu Światło-Życie stworzonym
                      przez ks. Franciszka Blachnickiego.
                    </span>
                  </p>
                  <p
                    className={classNames(
                      classes.description,
                      classes.grayText,
                      "body-text"
                    )}>
                    Spotykamy się raz w tygodniu na
                    <span className={classNames("oaza-color")}>
                      &nbsp;wspólnej modliwie, Eucharystii i spotkaniach
                      formacyjnych.&nbsp;
                    </span>
                    Składają się one z części ogólnej, na których spotykają się
                    wszyscy nasi oazowicze oraz spotkań w małych grupach, gdzie
                    uczestnicy zgłębiają
                    <span className={classNames("oaza-color")}>
                      &nbsp;różne aspekty wiary i relacji z Bogiem&nbsp;
                    </span>
                    w zależności od stopnia formacji.
                  </p>
                  <p
                    className={classNames(
                      classes.description,
                      classes.grayText,
                      "body-text"
                    )}>
                    <span className={classNames("oaza-color")}>
                      W wakacje wyjeżdżamy na dwutygodniowe rekolekcje,&nbsp;
                    </span>
                    które podsumowują rok formacyjny i dają okazję do
                    doświadczenia miłości i bliskości Pana Boga w liturgii, we
                    wspólnocie, na modlitwie i poprzez słowa Pisma Świętego.
                  </p>
                  <p
                    className={classNames(
                      classes.description,
                      classes.grayText,
                      "body-text"
                    )}>
                    Nasz Ruch stara się wychowywać naszych uczestników do
                    <span className={classNames("oaza-color")}>
                      &nbsp;bezinteresownej służby Bogu i wspólnocie, życia
                      Ewangelią i dbania o odnowę życia duchowego i
                      parafialnego&nbsp;
                    </span>
                    zgodnie z postanowieniami Soboru Watykańskiego II.
                  </p>

                  <br></br>

                  <p
                    className={classNames(
                      classes.description,
                      classes.grayText,
                      "body-text",
                      "strikearound-oaza"
                    )}>
                    {" "}
                    Przyjdź, jeśli…{" "}
                  </p>
                  <GridItem xs={12} sm={12} md={12}>
                    <div className={classNames("icon-text-container")}>
                      <img
                        className={classNames("icon")}
                        src={point1[0].node.publicURL}
                        alt="Punkt 1"
                      />
                      <p
                        className={classNames(
                          classes.description,
                          classes.grayText,
                          "body-text"
                        )}>
                        Szukasz swojego miejsca w Kościele na stałe, a nie tylko
                        grupy modlitewnej "na chwilę"
                      </p>
                    </div>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={12}>
                    <div className={classNames("icon-text-container")}>
                      <img
                        className={classNames("icon")}
                        src={point2[0].node.publicURL}
                        alt="Punkt 2"
                      />
                      <p
                        className={classNames(
                          classes.description,
                          classes.grayText,
                          "body-text"
                        )}>
                        Chcesz dołączyć do grupy która oprócz formacji rocznej
                        proponuje rekolekcje wakacyjne, które są integralnym
                        elementem formacji
                      </p>
                    </div>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={12}>
                    <div className={classNames("icon-text-container")}>
                      <img
                        className={classNames("icon")}
                        src={point3[0].node.publicURL}
                        alt="Punkt 3"
                      />
                      <p
                        className={classNames(
                          classes.description,
                          classes.grayText,
                          "body-text"
                        )}>
                        Szukasz wspólnoty, w której znajdziesz zarówno modlitwę
                        uwielbienia jak i zachwyt liturgią oraz poznawanie Słowa
                        Bożego a także rozwijanie własnych talentów i służenie
                        nimi dla wspólnoty
                      </p>
                    </div>
                  </GridItem>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <Card plain>
                    <GridItem xs={6} sm={6} md={6} className={classes.itemGrid}>
                      <Img
                        fluid={liderPic[0].node.childImageSharp.fluid}
                        alt="OazaLeaderPic"
                        className={classNames(
                          classes.imgRaised,
                          classes.imgRoundedCircle,
                          classes.imgFluid
                        )}
                      />
                    </GridItem>
                    <h4 className={classes.cardTitle}>
                      Joanna Malinowska
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
                        Na skutek transferu z diecezji włocławskiej,
                        spowodowanego marzeniami o dyplomie Politechniki
                        Łódzkiej, od roku akademickiego 2019/2020 odpowiedzialną
                        wspólnoty jest Joanna Malinowska. 15 lat formacji
                        oazowej odcisnęło trwałe piętno na jej zdrowiu
                        psychicznym, nie rokując nadziei na poprawę. Oprócz
                        spotkań oazowych, można ją często spotkać na wieczorach
                        gier planszowych lub zamkniętą gdzieś w escape roomie.
                      </p>
                    </CardBody>
                    <CardFooter
                      className={classNames(
                        classes.justifyCenter,
                        classes.contactContainer
                      )}>
                      <div>
                        <div
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
                            href="mailto:malinowskajoanna1989@gmail.com"
                            className={classNames(
                              classes.primaryColorText,
                              classes.margin5,
                              classes.spanText
                            )}>
                            malinowskajoanna1989@gmail.com
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
                          Poniedziałek
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
                              Kawiarenka
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
          <BackToGrupy/>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Oaza
