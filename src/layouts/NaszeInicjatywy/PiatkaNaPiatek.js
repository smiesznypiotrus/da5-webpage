import React, { useState } from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
// Utils -----------------------------------------------------------------
import { makeStyles } from "@material-ui/core/styles"
import _ from "underscore"
// Components used in this layout -----------------------------------------
import Header from "../../components/Header/Header"
import HeaderLinks from "../../components/Header/HeaderLinks"
import Footer from "../../components/Footer/Footer.js"
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos"
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos"
// Styles -----------------------------------------------------------------
import classNames from "classnames"
import styles from "../../assets/jss/material-kit-react/views/landingPage.js"
import teamStyles from "../../assets/jss/material-kit-react/views/landingPageSections/teamStyle.js"
import customStyles from "./../CustomClasses.js"
import "font-awesome/css/font-awesome.min.css"
import "../../assets/css/custom-style.css"

const allStyles = {
  ...styles,
  ...customStyles,
  ...teamStyles,
}

const useStyles = makeStyles(allStyles)

const PiatkaNaPiatek = () => {
  const [articleInfo, setArticleInfo] = useState({
    articleList: [],
    index: 0,
  })
  const classes = useStyles()

  const data = useStaticQuery(graphql`
    query getPiatka {
      allPiatkaNaPiatekJson {
        edges {
          node {
            articles {
              description
              image
              title
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

  const thumbnails = []
  const articleData = data.allPiatkaNaPiatekJson.edges[0].node.articles
  articleInfo.articleList = articleData

  _.each(articleData, (item, index) => {
    thumbnails.push(
      <img
        src={item.image}
        alt={item.title}
        width="125px"
        height="65px"
        className="article-thumbnail"
        style={{
          objectFit: "cover",
          margin: "5px",
          cursor: "pointer",
        }}
        onClick={() => changeIndex(index)}
        onKeyDown={() => changeIndex(index)}
        aria-hidden="true"
        key={item.title}
      />
    )
  })

  const changeIndex = x => {
    setArticleInfo({
      index: x,
    })
  }

  const nextItem = () => {
    if (articleInfo.index + 1 < articleInfo.articleList.length) {
      setArticleInfo({
        index: articleInfo.index + 1,
      })
    }
  }

  const previousItem = () => {

    if (articleInfo.index - 1 >= 0) {
      setArticleInfo({
        index: articleInfo.index - 1,
      })
    }
  }

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
          "main-card-margin",
          "floating-card-width"
        )}
        style={{
          display: "inline-block",
          position: "relative",
          left: "50%",
          transform: "translateX(-50%)",
          padding: "30px",
        }}>
        <div className="article-main-div">
          <div
            className="article"
            style={{
              display: "flex",
              flexDirection: "column",
            }}>
            <div className="article-carrousel">
              <ArrowBackIosIcon
                onClick={previousItem}
                style={{
                  cursor: "pointer",
                  visibility: articleInfo.index !== 0 ? "visible" : "hidden",
                }}
              />

              <img
                style={{
                  width: "85%",
                  height: "450px",
                  objectFit: "cover",
                  margin: "0",
                }}
                src={articleInfo.articleList[articleInfo.index].image}
                alt={articleInfo.articleList[articleInfo.index].title}
              />

              <ArrowForwardIosIcon
                onClick={nextItem}
                style={{
                  cursor: "pointer",
                  visibility:
                    articleInfo.index < articleInfo.articleList.length - 1
                      ? "visible"
                      : "hidden",
                }}
              />
            </div>
            <div
              style={{
                paddingTop: "15px",
              }}>
              {thumbnails}
            </div>
          </div>

          <div className="article">
            <h2>{articleInfo.articleList[articleInfo.index].title}</h2>
            <p>{articleInfo.articleList[articleInfo.index].description}</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default PiatkaNaPiatek
