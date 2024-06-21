import React from "react"
// Utils -----------------------------------------------------------------
import _ from "underscore"
import classNames from "classnames"
//Gatsby -----------------------------------------------------------------
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
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
import { makeStyles } from "@material-ui/core/styles"
import styles from "../../assets/jss/material-kit-react/views/landingPage.js"
import teamStyles from "../../assets/jss/material-kit-react/views/landingPageSections/teamStyle.js"
import customStyles from "../CustomClasses"
import "font-awesome/css/font-awesome.min.css"
import "../../assets/css/custom-style.css"
import statics from "../../components/colors"
import "../../assets/css/dobrystart-style.css"

const allStyles = {
  ...styles,
  ...customStyles,
  ...teamStyles,
}

const useStyles = makeStyles(allStyles)

const Obczajnik = () => {
  const classes = useStyles()

  const data = useStaticQuery(graphql`
    query obczajnikGetPictures {
      allFile(filter: { relativePath: { regex: "/Obczajnik/" } }) {
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
    return node.node.name === "GroupPic"
  })
  const background = _.select(data.backgroundPic.edges, node => {
    return node.node.name === "background"
  })
  const banner = _.select(data.allFile.edges, node => {
    return node.node.name === "Banner_01"
  })
  const point1 = _.select(data.allFile.edges, node => {
    return node.node.name === "Points__EXODUS_1"
  })
  const point2 = _.select(data.allFile.edges, node => {
    return node.node.name === "Points__EXODUS_2"
  })
  const point3 = _.select(data.allFile.edges, node => {
    return node.node.name === "Points__EXODUS_3"
  })
  const MarialiderPic = _.select(data.allFile.edges, node => {
    return node.node.name === "Maria_profile"
  })
  const BartekliderPic = _.select(data.allFile.edges, node => {
    return node.node.name === "Bartek_profile"
  })
  const dateBanner = _.select(data.allFile.edges, node => {
    return node.node.name === "Date_exodus"
  })
  const stairsLogo = _.select(data.allFile.edges, node => {
    return node.node.name === "Location_exodus"
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
          alt="ExodusBanner"
          ></img>
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
                  Przepis na idealny niedzielny wieczór:
                  </h6>
                  <p
                    className={classNames(
                      classes.description,
                      classes.grayText,
                      "body-text"
                    )}>  
                    1. Zacznij od Akademickiej Mszy św. w Archikatedrze o godzinie 19:00 doprawionej szczyptą 
                    anielskich głosów naszej scholi.<br/>2. Tuż po niej skieruj się na północny zachód wprost do 
                    budynku znajdującego się przy ul. Skorupki 5.<br/>3. Po przejściu 54 schodów dotarłeś do obCZAJNIKa! 
                    Czyli spotkania, na którym zaspokoisz swoje pragnienie (mamy herbatkę i ciasteczka!) oraz poznasz 
                    nowych ludzi i nawiążesz nowe przyjaźnie! Wpadaj i obczaj jak to działa!
                    
                  </p>

                  <p
                    className={classNames(
                      classes.description,
                      classes.grayText,
                      "body-text",
                      "strikearound"
                    )}>
                    {" "}
                    Dołącz do nas, jeśli…{" "}
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
                        Poszukujesz wspólnoty, która oprócz
                        <span className={classNames("body-text-orange")}>
                          &nbsp;modlitwy&nbsp;
                        </span>
                        da Ci także możliwość nawiązania
                        <span className={classNames("body-text-orange")}>
                          &nbsp;bliższych relacji i przyjaźni.&nbsp;
                        </span>
                      </p>
                    </div>
                  </GridItem>

                  <GridItem xs={12} sm={12} md={12}>
                    <div className={classNames("icon-text-container")}>
                      <img
                        className={classNames("icon")}
                        src={point2[0].node.publicURL}
                        alt=""
                      />

                      <p
                        className={classNames(
                          classes.description,
                          classes.grayText,
                          "body-text"
                        )}>
                        Chcesz zmieniać siebie, aby być
                        <span className={classNames("body-text-orange")}>
                          &nbsp;lepszym dla innych. &nbsp;
                        </span>
                        Potrafisz od siebie wymagać i widzisz
                        <span className={classNames("body-text-orange")}>
                          &nbsp;potrzebę ciągłej zmiany na drodze do prawdziwej
                          męskości,&nbsp;
                        </span>
                        do której wzywa nas Bóg.
                      </p>
                    </div>
                  </GridItem>

                  <GridItem xs={12} sm={12} md={12}>
                    <div className={classNames("icon-text-container")}>
                      <img
                        className={classNames("icon")}
                        src={point3[0].node.publicURL}
                        alt="Punkt 2"
                      />

                      <p
                        className={classNames(
                          classes.description,
                          classes.grayText,
                          "body-text"
                        )}>
                        Chcesz
                        <span className={classNames("body-text-orange")}>
                          &nbsp;zaangażować się w formację, &nbsp;
                        </span>
                        a nie tylko przyjść na spotkanie raz w miesiącu jako
                        anonimowy gość.
                      </p>
                    </div>
                  </GridItem>
                </GridItem>
                {/* =============================================================
                    Group leader profile
                  ============================================================= */}
                <GridItem xs={12} sm={12} md={4}>
                  {/* <Card plain> */}
                    <GridItem xs={6} sm={6} md={6} className={classes.itemGrid}>
                      <Img
                        fluid={BartekliderPic[0].node.childImageSharp.fluid}
                        alt="BartekLeaderPic"
                        className={classNames(
                          classes.imgRaised,
                          classes.imgRoundedCircle,
                          classes.imgFluid
                        )}
                      />
                    </GridItem>
                    <h4 className={classes.cardTitle}>
                      Bartek Paczkowski
                      <br />
                      <small className={classes.smallTitle}>Lider</small>
                    </h4>
                  {/* <Card plain> */}
                    <GridItem xs={6} sm={6} md={6} className={classes.itemGrid}>
                      <Img
                        fluid={MarialiderPic[0].node.childImageSharp.fluid}
                        alt="MariaLeaderPic"
                        className={classNames(
                          classes.imgRaised,
                          classes.imgRoundedCircle,
                          classes.imgFluid
                        )}
                      />
                    </GridItem>
                    <h4 className={classes.cardTitle}>
                      Marysia Kamerduła
                      <br />
                      <small className={classes.smallTitle}>Liderka</small>
                    </h4>
                    {/* <CardBody>
                      <p
                        className={classNames(
                          classes.description,
                          classes.grayText,
                          "body-text"
                        )}>
                        Jeden z młodszych członków grupy. Z racji, że trzeba tu
                        coś o sobie napisać to wymienię swoje zainteresowania:
                        górski trekking (nie tylko w Polsce), pielgrzymki oraz
                        dobre memy.
                        <br />
                        <br />
                        Nasze exodusowe hasło to "Walić! Walić! Walić!"
                      </p>
                    </CardBody> */}
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
                            href="mailto:piotr.pyciak@gmail.com"
                            className={classNames(
                              classes.primaryColorText,
                              classes.margin5,
                              classes.spanText
                            )}>
                            piotr.pyciak@gmail.com
                          </a>
                        </div> */}
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
                            href="https://www.facebook.com/smiesznypiotrus "
                            className={classNames(
                              classes.margin5,
                              classes.spanText,
                              classes.description
                            )}
                            style={{ textDecoration: "none" }}>
                            smiesznypiotrus
                          </a>
                        </div> */}
                        {/* =============================================================
                            Meeting information
                          ============================================================= */}
                        <img
                          src={dateBanner[0].node.publicURL}
                          alt="DateBanner"
                          style={{ paddingTop: "25px" }} //25px
                        />

                        <p
                          className={classNames(
                            classes.description,
                            classes.grayText,
                            "meeting-date"
                          )}>
                          Niedziela
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
                              Salka “Underground”
                            </p>
                          </div>
                        </GridItem>
                      </div>
                    </CardFooter>
                  {/* </Card> */}
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

export default Obczajnik
