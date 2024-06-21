import React from "react"
// Utils -----------------------------------------------------------------
import { makeStyles } from "@material-ui/core/styles"
import _ from "underscore"
import { useStaticQuery } from "gatsby"
// Components ------------------------------------------------------------
import GridItem from "../Grid/GridItem"
import Card from "../Card/Card"
import CardBody from "../Card/CardBody"
import { cardTitle } from "../../assets/jss/material-kit-react.js"
// Styles -----------------------------------------------------------------
import styles from "../../assets/jss/material-kit-react/views/landingPage.js"

const allStyles = {
  ...styles,
  cardTitle,
}

const useStyles = makeStyles(allStyles)

export default function News(props) {
  const data = useStaticQuery(graphql`
    query getNews {
      allNewsJson {
        edges {
          node {
            title
            description
            image
          }
        }
      }
    }
  `)
  const classes = useStyles()
  const allNews = []
  const newsCards = []

  if (data && data.allNewsJson && data.allNewsJson.edges) {
    _.each(data.allNewsJson.edges, item => {
      allNews.push(item.node)
    })

    _.each(allNews, item => {
      newsCards.push(
        <GridItem
          xs={12}
          sm={12}
          md={6}
          style={{ textAlign: "left" }}
          key={item.title}>
          <Card>
            <img
              src={item.image}
              style={{ height: "225px", width: "100%" }}
              alt={item.title}
              className={classes.imgCardTop}
            />
            <CardBody style={{ minHeight: "225px" }}>
              <h5 className={classes.cardTitle}>{item.title}</h5>
              <p style={{ lineHeight: "2" }}>
                {shortDescription(item.description)}
              </p>
            </CardBody>
            <CardBody style={{ textAlign: "right" }}>
              <p
                style={{
                  margin: "0",
                  display: "inline-block",
                  cursor: "pointer",
                }}
                onClick={() =>
                  props.openModal(
                    true,
                    item.image,
                    item.title,
                    item.description
                  )
                }
                onKeyDown={() =>
                  props.openModal(
                    true,
                    item.image,
                    item.title,
                    item.description
                  )
                }
                aria-hidden="true">
                Więcej
              </p>
            </CardBody>
          </Card>
        </GridItem>
      )
    })
  }

  return <>{newsCards}</>
}

const shortDescription = description => {
  var splitted = description.split(" ")

  if (splitted.length > 20) {
    var summary = ""
    for (var i = 0; i < 20; i++) {
      summary += splitted[i] + " "
    }
    summary += "..."
    return summary
  }

  return description
}
