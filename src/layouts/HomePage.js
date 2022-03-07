import React from "react"
import { useState } from "react"
// Gatsby ----------------------------------------------------------------
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
// Utils -----------------------------------------------------------------
import classNames from "classnames"
import _ from "underscore"
// Components ------------------------------------------------------------
import { makeStyles } from "@material-ui/core/styles"
import Header from "../components/Header/Header"
import HeaderLinks from "../components/Header/HeaderLinks"
import Parallax from "../components/Parallax/Parallax"
import GridContainer from "../components/Grid/GridContainer"
import GridItem from "../components/Grid/GridItem"
import Footer from "../components/Footer/Footer.js"
import MapCard from "../components/Maps/MapCard.js"
import { Carousel } from "react-responsive-carousel"
import Card from "../components/Card/Card.js"
import CardBody from "../components/Card/CardBody.js"
import EventsToday from "../components/EventsToday/EventsToday"
import News from "../components/News/News"
import { facebookUrl, instagramUrl, openWebsite } from "./Common.js"
//SVG's -------------------------------------------------------------------
import Herbata from "../images/SVGs/Home/ico_how_to_start_1.svg"
import SpotkanieLogo from "../images/SVGs/Home/ico_how_to_start_2.svg"
import Wyjdz from "../images/SVGs/Home/ico_how_to_start_3.svg"
import FbSvg from "../images/SVGs/Home/__Facebook.svg"
import IgSvg from "../images/SVGs/Home/__instagram.svg"
// Styles -----------------------------------------------------------------
import styles from "../assets/jss/material-kit-react/views/landingPage.js"
import customStyles from "./CustomClasses.js"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import "../assets/css/custom-style.css"
import { cardTitle } from "../assets/jss/material-kit-react.js"
import statics from "../components/colors"

const allStyles = {
  ...styles,
  ...customStyles,
  cardTitle,
}

const useStyles = makeStyles(allStyles)

const HomePage = () => {
  const classes = useStyles()
  const [modalOpen, setModal] = useState(false)
  const [modalPic, setModalPic] = useState("")
  const [modalText, setModalText] = useState("")
  const [modalTitle, setModalTitle] = useState("")

  function modalClicked(open, url, title, text) {
    setModal(open)
    setModalPic(url)
    setModalText(text)
    setModalTitle(title)
  }

  const data = useStaticQuery(graphql`
    query getHomePage {
      homePics: allFile(filter: { relativePath: { regex: "/^Home/" } }) {
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

      backgroundPic: allFile(
        filter: { relativePath: { regex: "/Background/" } }
      ) {
        edges {
          node {
            name
            childImageSharp {
              fluid(fit: COVER) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  var homePics = []

  if (data && data.homePics && data.homePics.edges) {
    _.each(data.homePics.edges, item => {
      homePics.push(item.node)
    })
  }

  const kaplica = _.select(data.homePics.edges, node => {
    return node.node.name === "kaplica"
  })

  const background = _.select(data.backgroundPic.edges, node => {
    return node.node.name === "background"
  })

  return (
    <div className={modalOpen ? "modal-block" : ""}>
      {/* {modalOpen && (
        <div
          style={{
            backgroundColor: "black",
            opacity: "0.9",
            width: "100%",
            height: "100%",
            position: "fixed",
            zIndex: "499",
          }}></div>
      )} */}

      {!modalOpen && (
        <Header
          color={statics.navBarColor}
          height="200"
          routes={[]}
          rightLinks={<HeaderLinks />}
          fixed
          // changeColorOnScroll={{
          //   height: 200,
          //   color: "rose",
          // }}
        />
      )}

      {modalOpen && (
        <Card
          className="modal-width"
          style={{
            position: "fixed",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: "500",
            height: "85vh",
            margin: "0",
          }}>
          <img
            src={modalPic}
            style={{ height: "225px", width: "100%", overflowY: "hidden" }}
            alt="Modal Banner"
            className={classes.imgCardTop}
          />
          <p
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              backgroundColor: "white",
              borderRadius: "5px",
              color: "black",
              padding: "5px 10px",
              cursor: "pointer",
            }}
            onClick={() => setModal(false)}
            onKeyDown={() => setModal(false)}
            aria-hidden="true">
            X
          </p>

          <CardBody style={{ minHeight: "225px", overflowY: "scroll" }}>
            <h5 className={classes.cardTitle} style={{ textAlign: "center" }}>
              {modalTitle}
            </h5>
            <p style={{ lineHeight: "2", whiteSpace: "pre-wrap" }}>
              {modalText}
            </p>
          </CardBody>
        </Card>
      )}

      <Img
        style={{
          zIndex: "-10",
          position: "fixed",
          opacity: "0.6",
          width: "100%",
          height: "100%",
        }}
        className={classes.imgCardTop}
        fluid={background[0].node.childImageSharp.fluid}
        alt={background[0].node.name}
      />

      {/* ========== Parallax ==========  */}
      <Parallax filterZ>
        <Img
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            objectFit: "cover",
          }}
          className={classes.imgCardTop}
          fluid={kaplica[0].node.childImageSharp.fluid}
          alt={kaplica[0].node.name}
        />
        <div className={classes.container}>
          <GridContainer
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}>
            <GridItem xs={12} sm={12} md={8} style={{ marginBottom: "15px" }}>
              <h1
                className={classNames(
                  classes.title,
                  "main-page-title",
                  "home-title-320",
                  "shadow-background"
                )}>
                Duszpasterstwo Akademickie Piątka
              </h1>

              <div
              // className={classNames("yellow-background", "yellow-subtitle")}
              >
                <div
                  className={classNames("home-hide-415", "quoteBodyOld")}
                  style={{
                    margin: "0",
                    padding: "0",
                  }}>
                  Przyjdź, drzwi dla Ciebie są zawsze otwarte!
                </div>
              </div>
            </GridItem>

            {/* ========== Dziś w duszpasterstwie ==========  */}
            <GridItem
              xs={8}
              sm={8}
              md={4}
              style={{ alignSelf: "center", padding: "0px" }}>
              <EventsToday />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div
        className={classNames(
          classes.main,
          classes.mainRaised,
          "homeRaisedDiv"
        )}>
        {/* ========== Jak zacząć? ==========  */}
        <div>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/da5-webpage.appspot.com/o/how_to_start_banner.svg?alt=media&token=cb331a4c-0f05-4a5d-8912-2b0772c3a049"
            className={classNames("normal-banner")}
            alt="Jak zacząć?"
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/da5-webpage.appspot.com/o/how_to_start_mobile_banner.svg?alt=media&token=09596653-aea1-43a1-9ff1-3cbdbb46a2e6"
            className={classNames("mobile-banner")}
            alt="Jak zacząć?"
          />
        </div>

        <div className={classes.container}>
          <div className={classes.firstSection}>
            <h5 className={classNames(classes.description, classes.grayText)}>
              Duszpasterstwo Akademickie to propozycja dla tych, którzy w swych
              poszukiwaniach właściwej drogi nie boją się zaufać drugiemu
              człowiekowi i chcą iść naprzód we wspólnocie.
              <br />
              <br />
              Tutaj spotkasz żywego Boga, który działa przez tego który jest
              obok. Bliżej niż myślisz.
            </h5>
            <br />
            <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={4}>
                    <Herbata className={classNames(classes.svgLogo)} />
                    <Link to="/grupyiwspolnoty">
                      <div className={classNames("purple-background")}>
                        <h5
                          className={classNames(
                            classes.description,
                            classes.purpleSubtitle
                          )}
                          style={{
                            margin: "0px",
                            padding: "0px",
                            color: "white",
                          }}>
                          Wejdź na herbatę
                        </h5>
                      </div>
                    </Link>
                    <h5
                      className={classNames(
                        classes.description,
                        classes.grayText
                      )}>
                      po Mszy Świętej Akademickiej w niedzielę o 19.00
                    </h5>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <SpotkanieLogo className={classNames(classes.svgLogo)} />
                    <Link to="/grupy/od-slowa-do-slowa">
                      <div className={classNames("purple-background")}>
                        <h5
                          className={classNames(
                            classes.description,
                            classes.purpleSubtitle
                          )}
                          style={{
                            margin: "0px",
                            padding: "0px",
                            color: "white",
                          }}>
                          Przyjdź na spotkanie
                        </h5>
                      </div>
                    </Link>
                    <h5
                      className={classNames(
                        classes.description,
                        classes.grayText
                      )}>
                      w środę o 19.00
                    </h5>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <Wyjdz className={classNames(classes.svgLogo)} />
                    <Link to="/akt">
                      <div className={classNames("purple-background")}>
                        <h5
                          className={classNames(
                            classes.description,
                            classes.purpleSubtitle
                          )}
                          style={{
                            margin: "0px",
                            padding: "0px",
                            color: "white",
                          }}>
                          Wyjedź nami
                        </h5>
                      </div>
                    </Link>

                    <h5
                      className={classNames(
                        classes.description,
                        classes.grayText
                      )}>
                      na ferie, wakacje, długi weekend lub weź udział w luźnym
                      spotkaniu integracyjnym
                    </h5>
                  </GridItem>
                </GridContainer>
                <h5
                  className={classNames(classes.description, classes.grayText)}>
                  Możesz też po prostu przyjść na którekolwiek spotkanie lub
                  modlitwę, które odbywają się w duszpasterstwie.
                </h5>
                <Link
                  to="/grupyiwspolnoty"
                  className={classNames("yellow-background")}
                  style={{
                    color: "white",
                    borderRadius: "25px",
                    padding: "10px 25px",
                    boxShadow: "3px 3px 5px #989898",
                  }}>
                  POZNAJ NASZE GRUPY
                </Link>
              </GridItem>
            </GridContainer>
          </div>
        </div>

        {/* ========== Aktualności ==========  */}
        <div>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/da5-webpage.appspot.com/o/news_banner.svg?alt=media&token=9171ba79-62c2-4a1e-9845-affc9de1ef46"
            className={classNames("normal-banner")}
            alt="Aktualności"
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/da5-webpage.appspot.com/o/news_banner_mobile.svg?alt=media&token=eecca23c-4343-4316-95af-4cf39084d210"
            className={classNames("mobile-banner")}
            alt="Aktualności"
          />
        </div>

        <div className={classes.container}>
          <div className={classes.section}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={12}></GridItem>
            </GridContainer>
            <GridContainer
              style={{
                display: "flex",
              }}>
              {/* ========== News Element ==========  */}
              <News
                openModal={(shouldOpen, url, title, description) =>
                  modalClicked(shouldOpen, url, title, description)
                }
              />
            </GridContainer>
          </div>
        </div>

        {/* ========== Quote Slider / Słowo od patrona ==========  */}
        <div style={{ paddingTop: "35px" }}>
          <div>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/da5-webpage.appspot.com/o/main_quote_banner.svg?alt=media&token=69a369c9-6cdb-4b25-9f07-51c7f34f8b7e"
              className={classNames("normal-banner")}
              style={{ margin: 0 }}
              alt="Cytaty"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/da5-webpage.appspot.com/o/main_quote_banner_mobile.svg?alt=media&token=ff012e24-b102-494e-9b12-514fc21945c4"
              className={classNames("mobile-banner")}
              style={{ margin: 0 }}
              alt="Cytaty"
            />
          </div>

          <GridContainer justify="center" style={{ marginTop: "-10px" }}>
            <GridItem
              xs={12}
              sm={12}
              md={12}
              className={"carousel-outer"}
              style={{ height: "400px", position: "relative" }}>
              <Carousel
                animationHandler="fade"
                className={"carousel"}
                swipeable={false}
                showStatus={false}
                showThumbs={true}
                autoPlay={true}
                infiniteLoop={true}
                interval={6000}>
                {/* ========== Quote 1  // Cytat 1 ==========  */}
                {/* <div className={classes.fullHeight}>
                  <div className={classes.overlay}>
                    <p className={"quoteBody"}>
                      „Jezus jest ze mną. Nie mam się czego bać”
                    </p>
                    <p className={"quoteAuthor"}>
                      błogosławiony Pier Giorgio Frassati
                    </p>
                    <Link
                      to="/grupyiwspolnoty"
                      className={classNames("yellow-background")}
                      style={{
                        lineHeight: "1rem",
                        color: "black",
                        borderRadius: "15px",
                        padding: "5px 25px",
                        boxShadow: "3px 3px 5px black",
                        fontSize: "15px",
                      }}>
                      <span className="quoteSubtitle">
                        CHCESZ JECHAĆ W GORY JAK FRASSATI?
                      </span>
                      <br />
                      <span
                        className="quoteSubtitle"
                        style={{ fontWeight: "bold" }}>
                        ZRÓB TO Z NAMI!
                      </span>
                    </Link>
                  </div>
                </div> */}
                {/* ========== Quote 2 ==========  */}
                <div className={classes.fullHeight}>
                  <div className={classes.overlay}>
                    <p className={"quoteBody"}>
                      „Prawdziwe dobro czyni się niepostrzeżenie, powoli,
                      codziennie, w zwykłych sprawach”
                    </p>
                    {/* <p className={"quoteAuthor"}>
                      błogosławiony Pier Giorgio Frassati
                    </p> */}
                  </div>
                </div>
                {/* ========== Quote 3 ==========  */}
                <div className={classes.fullHeight}>
                  <div className={classes.overlay}>
                    <p className={"quoteBody"}>
                      „Puste słowa zastępuję modlitwami”
                    </p>
                    {/* <p className={"quoteAuthor"}>
                      błogosławiony Pier Giorgio Frassati
                    </p> */}
                  </div>
                </div>
                {/* ========== Quote 3 ==========  */}
                {/* <div className={classes.fullHeight}>
                  <div className={classes.overlay}>
                    <p className={"quoteBody"}>
                      „Bóg bardzo dobrze podzielił nasze życie, przeplatając
                      okresy radości porami powagi”
                    </p>
                    <p className={"quoteAuthor"}>
                      błogosławiony Pier Giorgio Frassati
                    </p>
                  </div>
                </div> */}
                {/* ========== Quote 4 ==========  */}
                {/* <div className={classes.fullHeight}>
                  <div className={classes.overlay}>
                    <p className={"quoteBody"}>
                      „Przyszłość jest w ręku Boga. Lepiej być nie może!”
                    </p>
                    <p className={"quoteAuthor"}>
                      błogosławiony Pier Giorgio Frassati
                    </p>
                  </div>
                </div> */}
              </Carousel>
            </GridItem>
          </GridContainer>
        </div>

        {/* ========== Obserwuj nas ==========  */}
        <div>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/da5-webpage.appspot.com/o/follow_us_banner.svg?alt=media&token=0811ce3e-54f0-4a02-816e-97ccca414c98"
            className={classNames("normal-banner")}
            alt="Obserwuj nas"
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/da5-webpage.appspot.com/o/follow_us_banner_mobile.svg?alt=media&token=dca2d8c2-9aa7-4964-b032-2aee74b18947"
            className={classNames("mobile-banner")}
            alt="Obserwuj nas"
          />
        </div>
        <div className={classes.container}>
          <div className={classes.section}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={12}>
                <h5
                  className={classNames(classes.description, classes.grayText)}>
                  Możesz nas znaleźć także na:
                </h5>
              </GridItem>
            </GridContainer>

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

        {/* ========== Jak do nas trafić? ==========  */}
        <div className={classes.container}>
          <MapCard />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default HomePage
