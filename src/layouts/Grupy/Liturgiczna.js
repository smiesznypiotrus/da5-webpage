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



const allStyles = {
  ...styles,
  ...customStyles,
  ...teamStyles,
}

const useStyles = makeStyles(allStyles)

const Liturgiczna = () => {
  const classes = useStyles()

  const data = useStaticQuery(graphql`
    query liturgicznaGetPictures {
      allFile(filter: { relativePath: { regex: "/Liturgiczna/" } }) {
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
    return node.node.name === "Photo_6"
  })
  const background = _.select(data.backgroundPic.edges, node => {
    return node.node.name === "background"
  })
  const banner = _.select(data.allFile.edges, node => {
    return node.node.name === "Banner_06"
  })
  const point1 = _.select(data.allFile.edges, node => {
    return node.node.name === "ico__lso-19"
  })
  const point2 = _.select(data.allFile.edges, node => {
    return node.node.name === "ico__lso-20"
  })
  const point3 = _.select(data.allFile.edges, node => {
    return node.node.name === "ico__lso-21"
  })
  const liderPic = _.select(data.allFile.edges, node => {
    return node.node.name === "Lider_profile"
  })
  const dateBanner = _.select(data.allFile.edges, node => {
    return node.node.name === "Date_Liturgiczna"
  })
  const stairsLogo = _.select(data.allFile.edges, node => {
    return node.node.name === "Localisation-08"
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
        }}
      >
        <img
          src={banner[0].node.publicURL}
          style={{ width: "100%", height: "auto", marginBottom: "0px" }}
          alt="Liturgiczna Banner"
        ></img>
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
                  Tam, gdzie człowiek spotyka Boga
                  </h6>
                  <p
                    className={classNames(
                      classes.description,
                      classes.grayText,
                      "body-text"
                    )}
                  >
                    Liturgiczna Służba Ołtarza naszego duszpasterstwa to grupa młodych mężczyzn, którzy chcą <span className={classNames("body-text-bold", "color-liturgiczna")}>pogłębiać relację z Panem Bogiem</span> poprzez bezpośredni <span className={classNames("body-text-bold", "color-liturgiczna")}>udział w Uczcie Eucharystycznej.</span> Pogłębianie naszej wiedzy z dziedziny liturgii i stosowanie jej w praktyce służy lepszemu posługiwaniu na <span className={classNames("body-text-bold", "color-liturgiczna")}>Cześć i Chwałę Pana.</span>
                  </p>
                  <p
                    className={classNames(
                      classes.description,
                      classes.grayText,
                      "body-text"
                    )}
                  >
                  Spotkania formacyjne odbywają się w każdą niedzielę o 18:00 przed Mszą Świętą. Podczas tych spotkań duży nacisk kładzie się na omawianie bieżących spraw, omawianie przebiegu Liturgii i <span className={classNames("body-text-bold", "color-liturgiczna")}>rozwój ducha liturgii</span> wśród członków grupy.
                  </p>
                  <p
                    className={classNames(
                      classes.description,
                      classes.grayText,
                      "body-text"
                    )}
                  >
                  Jesteśmy bardzo otwarci na nowe osoby, dlatego jeśli szukasz formacji nastawionej na pogłębianie relacji z Panem Bogiem przejawiające się w budowaniu piękna liturgii, to LSO jest miejsce dla Ciebie.
                  </p>
                  <br></br>
                  <p
                    className={classNames(
                      classes.description,
                      classes.grayText,
                      "body-text",
                      "strikearound-liturgiczna"
                    )}
                  >
                    {" "}
                    Dołącz do nas, jeśli… 
                    {" "}
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
                        )}
                      >
                        Chcesz pogłębiać swoją relację z Panem Bogiem, będąc  
                        <span className={classNames("body-text-bold", "color-liturgiczna")}>
                            &nbsp;blisko Jego ołtarza.&nbsp;
                        </span>
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
                        )}
                      >
                        Jesteś 
                        <span className={classNames("body-text-bold", "color-liturgiczna")}>
                            &nbsp;zdyscyplinowany,&nbsp;
                        </span>
                        potrafisz 
                        <span className={classNames("body-text-bold", "color-liturgiczna")}>
                            &nbsp;wymagać od siebie&nbsp;
                        </span>
                        i chciałbyś formować się w duchu liturgii.
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
                        )}
                      >
                          Lubisz przygotowywać bądź uczestniczyć w liturgii, która jest 
                    
                    <span className={classNames("body-text-bold", "color-liturgiczna")}>
                    &nbsp;dobrze i dokładnie przygotowana, aby swoim pięknem przybliżała wiernych do Chrystusa.&nbsp;
                    </span>
                    
                      </p>
                    </div>
                  </GridItem>
                  


                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <Card plain>
                    <GridItem xs={6} sm={6} md={6} className={classes.itemGrid}>
                      <Img
                        fluid={liderPic[0].node.childImageSharp.fluid}
                        alt="Leader pic"
                        className={classNames(
                          classes.imgRaised,
                          classes.imgRoundedCircle,
                          classes.imgFluid
                        )}
                      />
                    </GridItem>
                    <h4 className={classes.cardTitle}>
                    Mateusz Jędrzejec
                      <br />
                      <small className={classes.smallTitle}>Lider</small>
                    </h4>
                    <CardBody>
                      <p
                        className={classNames(
                          classes.description,
                          classes.grayText,
                          "body-text"
                        )}
                      >
                          Damian, student farmacji. Do LSO naszego duszpasterstwa należę od 4 lat, a  liturgią pasjonuję się od kiedy pamiętam. Lubię dzielić się jej pięknem i przygotowywać ją, tak aby „Jej piękno cieszyło oczy wiernych, którzy są jej uczestnikami.”
                          <br />
                          <br />
                          Wolny czas? Pizza ze znajomymi lub inne dobre jedzonko! Albo poznawanie nowych ludzi, szczególnie takich „świrów liturgicznych” jak ja 😊
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
                            <i
                              className={classes.socials + " fa fa-envelope"}
                            />
                          </Button>
                          <a
                            href="mailto:tomaszewski.dam@gmail.com"
                            className={classNames(
                              classes.primaryColorText,
                              classes.margin5,
                              classes.spanText
                            )}
                          >
                            marcelinapokorska@gmail.com 
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
                            <i
                              className={classes.socials + " fa fa-facebook"}
                            />
                          </Button>
                          <a
                            href="https://www.facebook.com/damian.tomaszewski.104"
                            className={classNames(
                              classes.margin5,
                              classes.spanText,
                              classes.description
                            )}
                            style={{ textDecoration: "none" }}
                          >
                            damian.tomaszewski.104
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
                          )}
                        >
                          Czwartek
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
                              )}
                            >
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

export default Liturgiczna
