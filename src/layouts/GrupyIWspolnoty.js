import React from "react"
// Utils -----------------------------------------------------------------
import classNames from "classnames"
import _ from "underscore"
//Gatsby -----------------------------------------------------------------
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
// Components used in this layout -----------------------------------------
import Header from "../components/Header/Header"
import HeaderLinks from "../components/Header/HeaderLinks"
import Footer from "../components/Footer/Footer.js"
// Styles -----------------------------------------------------------------
import { makeStyles } from "@material-ui/core/styles"
import styles from "../assets/jss/material-kit-react/views/landingPage.js"
import teamStyles from "../assets/jss/material-kit-react/views/landingPageSections/teamStyle.js"
import customStyles from "./CustomClasses.js"
import "font-awesome/css/font-awesome.min.css"
import "../assets/css/custom-style.css"

const allStyles = {
  ...styles,
  ...customStyles,
  ...teamStyles,
}

const useStyles = makeStyles(allStyles)

const GrupyIWspolnoty = () => {
  const classes = useStyles()

  const data = useStaticQuery(graphql`
    query getGrupyIWspolnotyPhotos {
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

  return (
    <>
      <Header
        color="white"
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
        <img
          src="https://firebasestorage.googleapis.com/v0/b/da5-webpage.appspot.com/o/groups_banner.svg?alt=media&token=975c28d0-9c69-4062-8f1c-35a5dbfe2337"
          className={classNames("normal-banner")}
          alt="Grupy I Wspólnoty"
        />

        <img
          src="https://firebasestorage.googleapis.com/v0/b/da5-webpage.appspot.com/o/groups_banner_mobile.svg?alt=media&token=04448c28-90d5-44bd-9685-252ed0debbf2"
          className={classNames("mobile-banner")}
          alt="Grupy I Wspólnoty"
        />

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            width: "70%",
            marginRight: "auto",
            marginLeft: "auto",
          }}>

          {/* ========== Row ==========  */}  
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
            }}>
            <Link to="/grupy/exodus" className={classes.navLink}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "10px",
                  margin: "20px 10px 30px 10px",
                  minWidth: "200px",
                }}>
                <img
                  style={{ width: "100px" }}
                  src="https://firebasestorage.googleapis.com/v0/b/da5-webpage.appspot.com/o/ico_Exodus.svg?alt=media&token=e8879b00-d164-4b3d-835d-0ed3515730bb"
                  alt="Exodus"></img>
                <p className={classNames(classes.lightText)}>Męska wspólnota</p>
                <p className={classNames(classes.boldText)}>EXODUS</p>
              </div>
            </Link>

            <Link to="/grupy/oaza" className={classes.navLink}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "10px",
                  margin: "20px 10px 30px 10px",
                  minWidth: "200px",
                }}>
                <img
                  style={{ width: "100px" }}
                  src="https://firebasestorage.googleapis.com/v0/b/da5-webpage.appspot.com/o/ico_Oaza.svg?alt=media&token=0181ed72-b319-4495-8e5e-0cd4285d2fc1"
                  alt="OAZA"></img>
                <p className={classNames(classes.boldText)}>OAZA</p>
                <p className={classNames(classes.lightText)}>
                  Ruch Światło Życie
                </p>
              </div>
            </Link>

            <Link
              to="/grupy/swietlica-dla-niepelnosprawnych"
              className={classes.navLink}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "10px",
                  margin: "20px 10px 30px 10px",
                  minWidth: "200px",
                  justifyContent: "center",
                }}>
                <img
                  style={{ width: "100px" }}
                  src="https://firebasestorage.googleapis.com/v0/b/da5-webpage.appspot.com/o/ico_swietlica.svg?alt=media&token=83c63810-aa61-4643-9597-99194c8d529b"
                  alt="Świetlica dla niepełnosprawnych"></img>
                <p className={classNames(classes.lightText)}>Świetlica dla</p>
                <p
                  className={classNames(classes.boldText)}
                  style={{ textAlign: "center" }}>
                  NIEPEŁNOSPRAWNYCH
                </p>
              </div>
            </Link>
          </div>

          {/* ========== Row ==========  */} 
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
            }}>
            <Link to="/grupy/od-slowa-do-slowa" className={classes.navLink}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "10px",
                  margin: "20px 10px 30px 10px",
                  minWidth: "200px",
                }}>
                <img
                  style={{ width: "100px" }}
                  src="https://firebasestorage.googleapis.com/v0/b/da5-webpage.appspot.com/o/ico_Od%20slowa.svg?alt=media&token=6b75e239-d1da-4500-a7a1-d4ca3372057a"
                  alt="Od Słowa do Słowa"></img>
                <p className={classNames(classes.boldText)}>OD SŁOWA</p>
                <p className={classNames(classes.lightText)}>do Słowa</p>
              </div>
            </Link>

            <Link to="/grupy/taize" className={classes.navLink}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "10px",
                  margin: "20px 10px 30px 10px",
                  minWidth: "200px",
                }}>
                <img
                  style={{ width: "100px" }}
                  src="https://firebasestorage.googleapis.com/v0/b/da5-webpage.appspot.com/o/ico_Taize.svg?alt=media&token=0ec7fbdb-4682-408e-9576-b14b51e64c90"
                  alt="Taize"></img>
                <p className={classNames(classes.lightText)}>Spotkania</p>
                <p className={classNames(classes.boldText)}>TAIZE</p>
              </div>
            </Link>

            <Link to="/grupy/liturgiczna" className={classes.navLink}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "10px",
                  margin: "20px 10px 30px 10px",
                  minWidth: "200px",
                }}>
                <img
                  style={{ width: "100px" }}
                  src="https://firebasestorage.googleapis.com/v0/b/da5-webpage.appspot.com/o/ico_Liturgiczna.svg?alt=media&token=4987426d-2e89-48e4-b53d-6d5c8ad2b461"
                  alt="Liturgiczna"></img>
                <p className={classNames(classes.boldText)}>Liturgiczna</p>
                <p className={classNames(classes.lightText)}>Służba Ołtarza</p>
              </div>
            </Link>
          </div>

          {/* ========== Row ==========  */} 
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
            }}>
            <Link to="/grupy/uwielbienie" className={classes.navLink}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "10px",
                  margin: "20px 10px 30px 10px",
                  minWidth: "200px",
                }}>
                <img
                  style={{ width: "100px" }}
                  src="https://firebasestorage.googleapis.com/v0/b/da5-webpage.appspot.com/o/ico_Uwielbienie.svg?alt=media&token=aa3afb15-f17a-4af0-ac11-880ab7f04742"
                  alt="Uwielbiene"></img>
                <p className={classNames(classes.lightText)}>Studenckie</p>
                <p className={classNames(classes.boldText)}>UWIELBIENIE</p>
              </div>
            </Link>

            <Link to="/grupy/sport" className={classes.navLink}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "10px",
                  margin: "20px 10px 30px 10px",
                  minWidth: "200px",
                }}>
                <img
                  style={{ width: "100px" }}
                  src="https://firebasestorage.googleapis.com/v0/b/da5-webpage.appspot.com/o/ico_sport.svg?alt=media&token=28f9f93f-72db-4512-862d-ba45aec8b280"
                  alt="Sportowy Piątek"></img>
                <p className={classNames(classes.boldText)}>SPORTOWY</p>
                <p className={classNames(classes.lightText)}>Piątek</p>
              </div>
            </Link>

            <Link to="/grupy/schola" className={classes.navLink}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "10px",
                  margin: "20px 10px 30px 10px",
                  minWidth: "200px",
                }}>
                <img
                  style={{ width: "100px" }}
                  src="https://firebasestorage.googleapis.com/v0/b/da5-webpage.appspot.com/o/ico_Schola.svg?alt=media&token=896bd71f-576c-44d9-94b8-1dcfac92d31d"
                  alt="Schola Akademicka"></img>
                <p className={classNames(classes.lightText)}>Schola</p>
                <p className={classNames(classes.boldText)}>AKADEMICKA</p>
              </div>
            </Link>
          </div>

          {/* ========== Row ==========  */} 
          <div
            style={{
              display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "center",
            }}>
            <Link to="/grupy/dobry-start" className={classes.navLink}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "10px",
                  margin: "20px 10px 30px 10px",
                  minWidth: "200px",
                }}>
                <img
                  style={{ width: "100px" }}
                  src="https://firebasestorage.googleapis.com/v0/b/da5-webpage.appspot.com/o/ico_Od%20slowa.svg?alt=media&token=6b75e239-d1da-4500-a7a1-d4ca3372057a"
                  alt="Dobry start"></img>
                <p className={classNames(classes.lightText)}>Dobry</p>
                <p className={classNames(classes.boldText)}>START</p>
              </div>
            </Link>
          </div>
          <div
            style={{
              display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "center",
            }}>
            <Link to="/grupy/postakademicka" className={classes.navLink}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "10px",
                  margin: "20px 10px 30px 10px",
                  minWidth: "200px",
                }}>
                <img
                  style={{ width: "100px" }}
                  src="https://firebasestorage.googleapis.com/v0/b/da5-webpage.appspot.com/o/ico_Od%20slowa.svg?alt=media&token=6b75e239-d1da-4500-a7a1-d4ca3372057a"
                  alt="Dobry start"></img>
                <p className={classNames(classes.lightText)}>Grupa</p>
                <p className={classNames(classes.boldText)}>POSTAKADEMICKA</p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default GrupyIWspolnoty
