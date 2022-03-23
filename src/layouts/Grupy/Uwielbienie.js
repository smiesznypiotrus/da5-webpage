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
import "../../assets/css/exodus-style.css"

const allStyles = {
  ...styles,
  ...customStyles,
  ...teamStyles,
}

const useStyles = makeStyles(allStyles)

const Uwielbienie = () => {
  const classes = useStyles()

  const data = useStaticQuery(graphql`
    query uwielbienieGetPictures {
      allFile(filter: { relativePath: { regex: "/Uwielbienie/" } }) {
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
    return node.node.name === "Banner-07"
  })
  const point1 = _.select(data.allFile.edges, node => {
    return node.node.name === "ico__uwielbienie-22"
  })
  const point2 = _.select(data.allFile.edges, node => {
    return node.node.name === "ico__uwielbienie-23"
  })
  const point3 = _.select(data.allFile.edges, node => {
    return node.node.name === "ico__uwielbienie-24"
  })
  const liderPic = _.select(data.allFile.edges, node => {
    return node.node.name === "Lider_profile"
  })
  const dateBanner = _.select(data.allFile.edges, node => {
    return node.node.name === "Date_uwielbienia"
  })
  const stairsLogo = _.select(data.allFile.edges, node => {
    return node.node.name === "Localisation-04"
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
          alt="Uwielbienie Banner">
          </img>
        <div className={classNames("padding-div")}>
          <div className={classes.container}>
            <div className={classes.section}>
              <GridContainer>
                {/* =============================================================
                    Grupy picture and description
                  ============================================================= */}
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
                    Uwielbiaj duszo moja Pana
                  </h6>
                  <p
                    className={classNames(
                      classes.description,
                      classes.grayText,
                      "body-text"
                    )}>
                    W każdy wtorek o godz. 20.00 gromadzimy się w naszej kaplicy, aby
                    <span className={classNames("uwielbienie-color")}>
                      &nbsp;uwielbiać Jezusa w Najświętszym Sakramencie.
                    </span>
                  </p>

                  <p
                    className={classNames(
                      classes.description,
                      classes.grayText,
                      "body-text"
                    )}>
                    Chcemy wówczas oddać chwałę naszemu Panu poprzez
                    <span className={classNames("uwielbienie-color")}>
                      &nbsp;pełen radości śpiew i spontaniczną modlitwę.&nbsp;
                    </span>
                  </p>

                  <p
                    className={classNames(
                      classes.description,
                      classes.grayText,
                      "body-text"
                    )}>
                    <span className={classNames("uwielbienie-color")}>
                      &nbsp;Przebywanie w Jego obecności&nbsp;
                    </span>
                    przez te kilkanaście minut ma nam pomóc odnajdywać Go w
                    różnych sytuacjach życia i wszystkie te sytuacje czynić
                    uwielbieniem za Jego miłość.
                  </p>

                  <br></br>

                  <p
                    className={classNames(
                      classes.description,
                      classes.grayText,
                      "body-text",
                      "strikearound-uwielbienie"
                    )}>
                    {" "}
                    Przyjdź, jeśli…{" "}
                  </p>

                  <GridItem xs={12} sm={12} md={12}>
                    <div className={classNames("icon-text-container")}>
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
                        Poszukujesz przestrzeni
                        <span className={classNames("uwielbienie-color")}>
                          &nbsp;modlitwy wspólnotowej i doświadczenia bliskości
                          Boga&nbsp;
                        </span>
                        modlitwy wspólnotowej i doświadczenia bliskości Boga.
                      </p>
                    </div>
                  </GridItem>

                  <GridItem xs={12} sm={12} md={12}>
                    <div className={classNames("icon-text-container")}>
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
                        Pragniesz rozwijać
                        <span className={classNames("uwielbienie-color")}>
                          &nbsp;wrażliwość na siebie i innych&nbsp;
                        </span>
                        oraz na dobro, którego często nie widzimy lub ponad
                        którym przechodzimy do porządku dziennego.
                      </p>
                    </div>
                  </GridItem>

                  <GridItem xs={12} sm={12} md={12}>
                    <div className={classNames("icon-text-container")}>
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
                        <span className={classNames("uwielbienie-color")}>
                          Skupić się bardziej na Bogu &nbsp;
                        </span>
                        i Jego prowadzeniu, niż na sobie, swoich zamiarach,
                        planach.
                      </p>
                    </div>
                  </GridItem>
                </GridItem>
                {/* =============================================================
                    Group leader profile
                  ============================================================= */}
                <GridItem xs={12} sm={12} md={4}>
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
                    </CardBody>
                    {/* =============================================================
                        Leader contact
                      ============================================================= */}
                    <CardFooter
                      className={classNames(
                        classes.justifyCenter,
                        classes.contactContainer
                      )}>
                      <div>
                        {/* =============================================================
                            Mail information
                          ============================================================= */}
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
                            href="mailto:duszpasterstwo.piatka@gmail.com"
                            className={classNames(
                              classes.primaryColorText,
                              classes.margin5,
                              classes.spanText
                            )}>
                            duszpasterstwo.piatka@gmail.com
                          </a>
                        </div>
                        {/* =============================================================
                            Phone information
                          ============================================================= */}

                        {/* =============================================================
                            Facebook information
                          ============================================================= */}
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

export default Uwielbienie
