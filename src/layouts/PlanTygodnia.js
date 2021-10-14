import React from "react"
import { useStaticQuery } from "gatsby"
// Utils ----------------------------------------------------------------
import classNames from "classnames"
import _ from "underscore"
// Components used in this layout -----------------------------------------
import Header from "../components/Header/Header"
import HeaderLinks from "../components/Header/HeaderLinks"
import GridContainer from "../components/Grid/GridContainer"
import GridItem from "../components/Grid/GridItem"
import Card from "../components/Card/Card"
import CardBody from "../components/Card/CardBody"
import Footer from "../components/Footer/Footer.js"
import Img from "gatsby-image"
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

const PlanTygodnia = () => {
  const classes = useStyles()

  const data = useStaticQuery(graphql`
    query getPlanTygodnia {
      allPlanTygodniaJson {
        edges {
          node {
            day
            events {
              hour
              name
              icon
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

  var dailyPlan = []
  if (data && data.allPlanTygodniaJson && data.allPlanTygodniaJson.edges) {
    _.each(data.allPlanTygodniaJson.edges, item => {
      dailyPlan.push(item.node)
    })
  }
  var dailyPlanCards = []
  _.each(dailyPlan, (item, i) => {
    var events = []
    _.each(item.events, (event, index) => {
      if (event.icon != null) {
        events.push(
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
            key={index}>
            <img
              src={event.icon}
              height="50px"
              style={{
                margin: "0px",
                position: "relative",
                left: "-50px",
              }}
              alt={event.name}
            />
            <h5
              className={classNames(classes.description)}
              style={{
                lineHeight: "0.8em",
                marginTop: "25px",
                position: "relative",
                left: "-30px",
              }}>
              <span style={{ lineHeight: "1.55em", fontWeight: "bold" }}>
                {event.hour} -{" "}
              </span>
              <span style={{ lineHeight: "1.55em" }}>{event.name}</span>
              <br />
            </h5>
          </div>
        )
      } else {
        events.push(
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
            key={index}>
            <h5
              className={classNames(classes.description)}
              style={{
                lineHeight: "0.8em",
                marginTop: "25px",
                position: "relative",
                left: "20px",
              }}
              key={index}>
              <span style={{ lineHeight: "1.55em", fontWeight: "bold" }}>
                {event.hour} -{" "}
              </span>
              <span style={{ lineHeight: "1.55em" }}>{event.name}</span>
              <br />
            </h5>
          </div>
        )
      }
    })
    dailyPlanCards.push(
      <GridItem xs={12} sm={12} md={12} key={i}>
        <Card>
          <CardBody style={{ marginTop: "20px" }}>
            <span
              className={classNames(classes.title)}
              style={{ fontSize: "1.4rem", lineHeight: "1.55em" }}>
              {item.day}
              <br />
            </span>
            <span
              className={classNames(classes.description)}
              style={{ fontSize: "1rem", lineHeight: "1.55em" }}>
              {item.date}
            </span>
            {events}
          </CardBody>
        </Card>
      </GridItem>
    )
  })

  return (
    <>
      <Header
        color="transparent"
        routes={[]}
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 150,
          color: "white",
        }}
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
          "floating-card-width",
          "main-card-margin"
        )}
        style={{
          display: "inline-block",
          position: "relative",
          left: "50%", // Move the element to the left by 50% of the container's width
          transform: "translateX(-50%)",
          overflowX: "hidden",
        }}>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/da5-webpage.appspot.com/o/weekly_plan_banner.svg?alt=media&token=de0dcbfa-1cce-4e7e-9af8-fc52a10e332f"
          className={classNames("normal-banner")}
          alt="Plan Tygodnia Banner"
        />
        <img
          src="https://firebasestorage.googleapis.com/v0/b/da5-webpage.appspot.com/o/weekly_plan_banner_mobile.svg?alt=media&token=196ffa1b-81ef-4f4b-a177-2109b80387e2"
          className={classNames("mobile-banner")}
          alt="Plan Tygodnia Banner"
        />

        <GridContainer style={{ paddingLeft: "40px", paddingRight: "40px" }}>
          {dailyPlanCards}
        </GridContainer>
      </div>

      <Footer />
    </>
  )
}

export default PlanTygodnia
