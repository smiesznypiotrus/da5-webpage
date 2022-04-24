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
  const head_banner = _.select(data.allFile.edges, node => {
    return node.node.name === "maroko_banner"
  })
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
                        className={classNames("img-akt")}
                        alt="Akt Banner">
                    </img>
                </GridItem>
                <GridItem xs={12} sm={12} md={8}>
                    <CardBody>
                      <p
                        className={classNames(
                          classes.description,
                          classes.grayText,
                          "body-text",
                          "body-akt"
                        )}>
                        <b>AKT czyli Akademicki Klub Turystyczny</b> to źródło podróżniczych inspiracji, które nie pozwolą nam usiedzieć w miejscu. 
                        Wezwanie Papieża Franciszka do wstania z wygodnej sofy bierzemy w naszym Klubie dosłownie.<br/><br/>
                        Organizujemy studenckie wyjazdy, ale chcemy stworzyć także - pomiędzy nimi - przestrzeń do dzielenia się naszymi podróżniczymi przygodami poprzez spotkania autorskie czy wystawy fotografii podróżniczej.<br/><br/> 
                        Zapraszamy, choć AKTualnie możemy być w podroży…
                      </p>
                    </CardBody>
                </GridItem>
                <GridContainer style={{
                  boxShadow: " 0px 3px 6px #00000029",
                  borderRadius: "10px",
                  margin: "40px",
                  width: "100%",
                  paddingBottom: "30px",
                }}>
                  <GridItem xs={12} sm={12} md={12} style={{
                    padding: "0px",
                  }}>
                    <div style= {{
                      height: "50px",
                      backgroundColor: "#B8935A",
                      borderRadius: "10px 10px 0px 0px",
                      textAlign: "left",
                      padding: "12px 15px",
                      fontFamily: "Lato",
                      fontWeight: "bold",
                    }}>Nasza najbliższa podróż:</div>
                  </GridItem>
                  <GridItem xs={12} style={{
                    padding: "0px",
                  }}>
                  <Img
                    style={{
                      width: "100%",
                      objectFit: "cover",
                      marginBottom: "20px",
                    }}
                    fluid={head_banner[0].node.childImageSharp.fluid}
                    alt={head_banner[0].node.name}
                  />
                  </GridItem>
                  <GridItem xs={2}>
                  <div className={classNames(
                            classes.description,
                            classes.grayText,
                            "body-text",
                            "grid-text-header",
                          )}
                          style= {{
                            fontWeight: "bold",
                          }}>
                          Termin</div>
                  </GridItem>
                  <GridItem xs={10}>
                  <div className={classNames(
                            classes.description,
                            classes.grayText,
                            "body-text",
                            "grid-text",
                          )}>
                      Wyjazd wieczorem 08.07, powrót w nocy z 18/19.05.2021 r. 6 dni roboczych, 2 weekendy</div>
                  </GridItem>
                  <GridItem xs={2}>
                  <div className={classNames(
                            classes.description,
                            classes.grayText,
                            "body-text",
                            "grid-text-header",
                          )}
                          style= {{
                            fontWeight: "bold",
                          }}>
                      Dla kogo?</div>
                  </GridItem>
                  <GridItem xs={10}>
                  <div className={classNames(
                            classes.description,
                            classes.grayText,
                            "body-text",
                            "grid-text",
                          )}>
                      Dla studentów i młodych w wieku 18-30 lat. Wyjazd będzie aktywny, więc zalecamy przygotować się kondycyjnie. Żeby zapisać się na wyjazd nie musisz być aktywnym członkiem DA5, choć serdecznie do tego zapraszamy!</div>
                  </GridItem>
                  <GridItem xs={2}>
                  <div className={classNames(
                            classes.description,
                            classes.grayText,
                            "body-text",
                            "grid-text-header",
                          )}
                          style= {{
                            fontWeight: "bold",
                          }}>
                      Koszt</div>
                  </GridItem>
                  <GridItem xs={10}>
                  <div className={classNames(
                            classes.description,
                            classes.grayText,
                            "body-text",
                            "grid-text",
                          )}
                          style={{
                            fontWeight: "bold",
                          }}>
                      <p>1300zł</p>
                      <div>Cena zawiera:</div>
                      <p style={{
                        fontWeight: "normal",
                        paddingTop: "8px",
                        marginBottom: "20px"
                        }}>Noclegi, Wyżywienie, Transport, Sprzęt turystyczny (kuchenki gazowe, palniki etc.), Ubezpieczenie turystyczne, Bilety wstępu, Opieka duchowa naszych duszpasterzy</p>
                      <div>Cena nie zawiera:</div>
                      <p style={{
                        fontWeight: "normal",
                        paddingTop: "8px",
                        marginBottom: "10px",
                        }}>Posiłków "na mieście", Namiotów i śpiworów, ewentualnych testów na Covid</p>
                      </div>
                  </GridItem>
                  <GridItem xs={2}>
                  <div className={classNames(
                            classes.description,
                            classes.grayText,
                            "body-text",
                            "grid-text-header",
                          )}
                          style= {{
                            fontWeight: "bold",
                          }}>
                      Wyżywienie</div>
                  </GridItem>
                  <GridItem xs={10}>
                  <div className={classNames(
                            classes.description,
                            classes.grayText,
                            "body-text",
                            "grid-text",
                          )}>
                      Jedzenie przyrządzamy wspólnie z produktów kupowanych ze wspólnej kasy. W planie dwa posiłki kuchni lokalnej w restauracjach i min. 2 ogniska.</div>
                  </GridItem>
                  <GridItem xs={2}>
                  <div className={classNames(
                            classes.description,
                            classes.grayText,
                            "body-text",
                            "grid-text-header",
                          )}>
                      Noclegi</div>
                  </GridItem>
                  <GridItem xs={10}>
                  <div className={classNames(
                            classes.description,
                            classes.grayText,
                            "body-text",
                            "grid-text",
                          )}>
                      Około połowa noclegów na kempingach, druga połowa na kwaterach i hostelach. Każdy nocleg odbywa się w innym miejscu.</div>
                  </GridItem>
                  <GridItem xs={2}>
                  <div className={classNames(
                            classes.description,
                            classes.grayText,
                            "body-text",
                            "grid-text-header",
                          )}>
                      Trasa</div>
                  </GridItem>
                  <GridItem xs={10}>
                  <div className={classNames(
                            classes.description,
                            classes.grayText,
                            "body-text",
                            "grid-text",
                          )}>
                      Szczegółowy plan wyjazdu możecie zobaczyć na powyższej mapie.</div>
                  </GridItem>
                  <GridItem xs={2} style={{
                            paddingRight: "0px"
                          }}>
                  <div className={classNames(
                            classes.description,
                            classes.grayText,
                            "body-text",
                            "grid-text-header",
                          )}>
                      Data zgłoszenia</div>
                  </GridItem>
                  <GridItem xs={10}>
                  <div className={classNames(
                            classes.description,
                            classes.grayText,
                            "body-text",
                            "grid-text",
                          )}>
                      Do 8 czerwca</div>
                  </GridItem>
                  <GridItem xs={2}>
                  <div className={classNames(
                            classes.description,
                            classes.grayText,
                            "body-text",
                            "grid-text-header",
                          )}>
                      Zaliczka</div>
                  </GridItem>
                  <GridItem xs={10}>
                  <div className={classNames(
                            classes.description,
                            classes.grayText,
                            "body-text",
                            "grid-text",
                          )}>
                      500zł, płatna do 10 czerwca</div>
                  </GridItem>
                  <GridItem xs={2}>
                  <div className={classNames(
                            classes.description,
                            classes.grayText,
                            "body-text",
                            "grid-text-header",
                          )}>
                      Plan wyjazdu</div>
                  </GridItem>
                  <GridItem xs={10}>
                  <div className={classNames(
                            classes.description,
                            classes.grayText,
                            "body-text",
                            "grid-text",
                          )}
                          style={{
                            marginBottom: "20px",
                          }}>
                      Wyjazd ma charakter objazdowy. Zobaczymy drewniane cerkwie położone na północy państwa w górzystym regionie Maramuresz. Ten odizolowany od reszty obszar posiada liczne obiekty sakralne zbudowane z drewna, a pochodzące nawet z XVII wieku. Liczne jeziora górskie i wąwozy, piękne doliny, wodospady podkreślają tylko niezwykłość tego kraju. Dla miłośników pieszych wędrówek i zdobywania szczytów atrakcji z pewnością nie zabraknie. Czym byłaby Rumunia bez Transylwanii i wampirów? To właśnie z tego regionu świata pochodzą opowieści o straszliwych krwiopijcach, którym przewodzić miał legendarny Drakula, który nie przez przypadek zasłużył sobie na taką pamięć. W planie również: trzy trekkingi górskie o zróżnicowanym poziomie trudności, minimum dwa wieczory przy ognisku, wizyta w kopalni soli oraz zwiedzanie dwóch starówek rumuńskich miast.</div>
                  </GridItem>
                  <GridItem xs={6}>
                    <div className={classNames(
                            classes.description,
                            classes.grayText,
                            "body-text",
                            "grid-text",
                          )}
                          style={{
                            textAlign: "right",
                            paddingRight: "10px",
                          }}>
                      Zgłoszenie na wyjazd przyjmujemy<br/>przez maila duszpasterstwa:</div>
                  </GridItem>
                  <GridItem xs={6}>
                    <a 
                    href="mailto:piotr.pyciak@gmail.com"
                    className={classNames(
                      classes.contactUs
                    )}
                    // style= {{
                    //     height: "50px",
                    //     width: "250px",
                    //     backgroundColor: "#B8935A",
                    //     borderRadius: "20px",
                    //     marginTop: "15px",
                    //     paddingTop: "13px",
                    //     textAlign: "center",
                    //     fontFamily: "Lato",
                    //     fontWeight: "bold",
                    //   }}
                      >Napisz do nas
                      </a>
                  </GridItem>
                </GridContainer>
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
