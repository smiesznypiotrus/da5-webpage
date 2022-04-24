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

const Liderzy = () => {
  const classes = useStyles()

  const data = useStaticQuery(graphql`
    query getLiderzyBackground {
      allFile(filter: { relativePath: { regex: "/Liderzy/" } }) {
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
    return node.node.name === "Maria_profile"
  })

  const ProPic2 = _.select(data.allFile.edges, node => {
    return node.node.name === "Bartek_profile"
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
          left: "50%",
          transform: "translateX(-50%)",
        }}>
        <div>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/da5-webpage.appspot.com/o/Liderzy_banner.svg?alt=media&token=551d7524-df4f-4575-8f50-0a861be7d98d"
            className={classNames("normal-banner")}
            alt="Duszpastertswo"
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/da5-webpage.appspot.com/o/Liderzy_mobile.svg?alt=media&token=d67a0a76-c076-4bff-958b-6fc4ba5cf508"
            className={classNames("mobile-banner")}
            alt="Duszpastertswo"
          />
        </div>

        <div className={classes.container}>
          <div className={classes.section} style={{ paddingTop: "px" }}>
            <GridContainer justify="center">
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
                    Marysia Kamerduła
                    <br />
                    <small className={classes.smallTitle}>Liderka</small>
                  </h4>
                  <CardBody>
                    <p
                      className={classes.description}
                      style={{ marginBottom: "0px" }}>
                      Maria pierwszy raz przyszła do Piątki na któreś spotkanie integracyjne w 2019 roku,
                       a później została na grach, na scholi - a potem została Liderką. Studiuje produkcje filmową
                      i częściej jeździ rowerem niż chodzi. Co więcej, Marysia ma sprecyzowane preferencje kulinarne: 
                       jeśli majonez - tylko kielecki, jeśli kanapki z nutellą - to i z masłem, jeśli żart - to suchar.
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
                          <i className={classes.socials + " fa fa-envelope"} />
                        </Button>
                        <a
                          href="mailto:kamerdula.maria@gmail.com"
                          className={classNames(
                            classes.primaryColorText,
                            classes.margin5,
                            classes.spanText
                          )}>
                          kamerdula.maria@gmail.com
                        </a>
                      </div>

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
                          <i className={classes.socials + " fa fa-phone"} />
                        </Button>
                        <span
                          className={classNames(
                            classes.margin5,
                            classes.spanText,
                            classes.description
                          )}>
                          +48 666 174 187
                        </span>
                      </div>

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
                          <i className={classes.socials + " fa fa-facebook"} />
                        </Button>
                        <a
                          href="https://www.facebook.com/da.piatka"
                          className={classNames(
                            classes.margin5,
                            classes.spanText,
                            classes.description
                          )}
                          style={{ textDecoration: "none" }}>
                          Facebook
                        </a>
                      </div> */}
                    </div>
                  </CardFooter>
                </Card>
              </GridItem>

              <GridItem xs={12} sm={12} md={6}>
                <Card plain>
                  <GridItem xs={6} sm={4} md={4} className={classes.itemGrid}>
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
                    Bartek Paczkowski
                    <br />
                    <small className={classes.smallTitle}>Lider</small>
                  </h4>
                  <CardBody>
                    <p
                      className={classes.description}
                      style={{ marginBottom: "0px" }}>
                      Pierwsze związane z DA5 wspomnienie Bartka to zastępowanie gitarzysty na jednej z prób scholi. 
                      Obecnie nasz nowy Lider gra nam nie tylko na gitarze, ale i na skrzypcach - ten instrument 
                      to jego specjalność, studiowana na Akademii Muzycznej Bartek należy do teamu 
                      "najpierw płatki - potem mleko", nosi tradycyjny zegarek i ma pamięć złotej rybki.
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
                          <i className={classes.socials + " fa fa-envelope"} />
                        </Button>
                        <a
                          href="mailto:bpaczkowski@onet.pl"
                          className={classNames(
                            classes.primaryColorText,
                            classes.margin5,
                            classes.spanText
                          )}>
                          bpaczkowski@onet.pl
                        </a>
                      </div>

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
                          <i className={classes.socials + " fa fa-phone"} />
                        </Button>
                        <span
                          className={classNames(
                            classes.margin5,
                            classes.spanText,
                            classes.description
                          )}>
                          +48 721 769 407
                        </span>
                      </div>

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
                          <i className={classes.socials + " fa fa-facebook"} />
                        </Button>
                        <a
                          href="https://www.facebook.com/bartosz.paczkowski.391"
                          className={classNames(
                            classes.margin5,
                            classes.spanText,
                            classes.description
                          )}
                          style={{ textDecoration: "none" }}>
                          Facebook
                        </a>
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Liderzy
