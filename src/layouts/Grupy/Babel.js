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
import "../../assets/css/group-style.css"

const allStyles = {
  ...styles,
  ...customStyles,
  ...teamStyles,
}

const useStyles = makeStyles(allStyles)

const Babel = () => {
  const classes = useStyles()

  const data = useStaticQuery(graphql`
    query babelGetPictures {
      allFile(filter: { relativePath: { regex: "/Babel/" } }) {
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
    return node.node.name === "Banner_Babel"
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
  const liderPic = _.select(data.allFile.edges, node => {
    return node.node.name === "Lider_profile"
  })
  const dateBanner = _.select(data.allFile.edges, node => {
    return node.node.name === "Date_Babel"
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
          alt="BabelBanner"
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
                  "Take five" with DA5!
                  </h6>
                  <p
                    className={classNames(
                      classes.description,
                      classes.grayText,
                      "body-text"
                    )}>
                    Jesteśmy świeżo działającą <span className={classNames("body-text-bold", "color-babel")}>grupą anglojęzyczną</span> pomagającą osobom z <span className={classNames("body-text-bold", "color-babel")}>innych krajów</span> odnaleźć swoje miejsce w Łodzi!</p>
                    <p
                    className={classNames(
                      classes.description,
                      classes.grayText,
                      "body-text"
                    )}>Jak to wszystko funkcjonuje?</p>
<p
                    className={classNames(
                      classes.description,
                      classes.grayText,
                      "body-text"
                    )}>Polscy studenci każdego miesiąca szykują wydarzenia, spotkania a także <span className={classNames("body-text-bold", "color-babel")}>uwielbienia w języku angielskim.</span> Jest to jedna z nielicznych szans doświadczenia wspólnoty i żywego <span className={classNames("body-text-bold", "color-babel")}>kontaktu z Panem Bogiem</span> w kraju, w którym tak właściwie wszystko dla naszych przyjaciół zza granicy jest <span className={classNames("body-text-bold", "color-babel")}>nieznane.</span></p>
<p
                    className={classNames(
                      classes.description,
                      classes.grayText,
                      "body-text"
                    )}>Oprócz wspólnej <span className={classNames("body-text-bold", "color-babel")}>modlitwy i wsparcia duchowego</span> warto wspomnieć, że jest to świetna okazja do poprawienia swoich umiejętności językowych a także poznania wielu <span className={classNames("body-text-bold", "color-babel")}>innych tradycji i kultur.</span>
                  </p>

                  <br></br>

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
                        Chciałbyś  
                        <span className={classNames("body-text-bold", "color-babel")}>
                        &nbsp;otworzyć się&nbsp;
                        </span>
                        na innych, a tym samym pomóc w organizacji spotkań i wydarzeń.
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
                        Chcesz zobaczyć funkcjonowanie 
                        <span className={classNames("body-text-bold", "color-babel")}>
                          &nbsp;wspólnoty anglojęzycznej&nbsp;
                        </span>
                        złożonej z wielu przedstawicieli
                        <span className={classNames("body-text-bold", "color-babel")}>
                          &nbsp;krajów europejskich,&nbsp;
                        </span>
                        i nie tylko.
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
                        Lubisz
                        <span className={classNames("body-text-bold", "color-babel")}>
                          &nbsp;posługiwać się powszechnie znanymi językami&nbsp;
                        </span>
                        i chcialbys pomóc w przyjęciu zagranicznych studentów w DA5.
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
                        alt="BabelLeaderPic"
                        className={classNames(
                          classes.imgRaised,
                          classes.imgRoundedCircle,
                          classes.imgFluid
                        )}
                      />
                    </GridItem>
                    <h4 className={classes.cardTitle}>
                      Martyna Bagińska
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
                        Jestem studentką pedagogiki opiekuńczo - wychowawczej, a w duszpasterstwie pojawiłam się pierwszy raz około 1,5 roku temu. Moją największą pasją jest podróżowanie i poznawanie nowych kultur! 
Dlatego właśnie zaangażowałam się w działanie grupy anglojęzycznej Babel! Cieszę się, że mogłam stworzyć tutaj to, czego brakowało mi tak mocno podczas mieszkania za granicą - wielokulturową i różnorodną wspólnotę osób o podobnych wartościach.
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
                            href="mailto:martyna.baginska8@gmail.com"
                            className={classNames(
                              classes.primaryColorText,
                              classes.margin5,
                              classes.spanText
                            )}>
                            martyna.baginska8@gmail.com
                          </a>
                        </div>
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

export default Babel
