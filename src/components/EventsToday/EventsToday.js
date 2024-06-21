import React from "react"
import { Link, useStaticQuery } from "gatsby"
// Utils ----------------------------------------------------------------
import moment from "moment"
import _ from "underscore"
import classNames from "classnames"
// Components ------------------------------------------------------------
import Card from "../Card/Card.js"
import CardBody from "../Card/CardBody.js"
import CardHeader from "../Card/CardHeader.js"
// Styles -----------------------------------------------------------------
import "../../assets/css/custom-style.css"

export default function EventsToday() {
  const data = useStaticQuery(graphql`
    query getEventsByDay {
      allPlanTygodniaJson {
        nodes {
          day
          events {
            hour
            name
          }
        }
      }
    }
  `)
  var eventsToday = []

  if (data && data.allPlanTygodniaJson.nodes) {
    const day = getDayOfTheWeek()
    const today = _.find(data.allPlanTygodniaJson.nodes, item => {
      return item.day === day
    })

    if (today) {
      _.each(today.events, event => {
        eventsToday.push(
          <div key={"EventToday-" + event.name}>
            <span style={{ fontWeight: "bold" }}>{event.hour}</span>
            <span> - </span>
            <span>{event.name}</span>
          </div>
        )
      })
    }
  }

  return (
    <Card>
      <CardHeader color="danger" style={{ textAlign: "center" }}>
        Dziś w duszpasterstwie
      </CardHeader>
      <CardBody style={{ display: "flex", flexDirection: "column" }}>
        {eventsToday}
        <br />
        {/* <hr /> */}
        <Link to="/plantygodnia" className={classNames("yellow-background")}
                  style={{
                    color: "white",
                    textAlign: "center",
                    borderRadius: "25px",
                    marginTop: "-10px",
                    fontWeight: "600",
                    fontFamily: `'Lato', sans-serif`,
                    textTransform: "uppercase",
                    fontSize: "0.9rem"
                  }}>
          Zobacz plan tygodniowy
        </Link>
      </CardBody>
    </Card>
  )
}

function getDayOfTheWeek() {
  var day = ""
  switch (moment().day()) {
    case 1:
      day = "Poniedziałek"
      break
    case 2:
      day = "Wtorek"
      break
    case 3:
      day = "Środa"
      break
    case 4:
      day = "Czwartek"
      break
    case 5:
      day = "Piątek"
      break
    case 6:
      day = "Sobota"
      break
    default:
      day = "Niedziela"
  }
  return day
}
