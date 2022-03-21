import React from "react"
import { Link } from "gatsby"
// Utils ----------------------------------------------------------------
import window from "global"
import { makeStyles } from "@material-ui/core/styles"
// Components ------------------------------------------------------------
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import Tooltip from "@material-ui/core/Tooltip"
import CustomDropdown from "../CustomDropdown/CustomDropdown.js"
import Button from "../CustomButtons/Button.js"
// Styles -----------------------------------------------------------------
import styles from "../../assets/jss/material-kit-react/components/headerLinksStyle"
import "font-awesome/css/font-awesome.min.css"

const useStyles = makeStyles(styles)

export default function HeaderLinks() {
  const classes = useStyles()
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
      <Link to="/plantygodnia" className={classes.navLink}>
              Plan Tygodnia
            </Link>
        {/* <CustomDropdown
          noLiPadding
          buttonText="Plan"
          buttonProps={{
            className: classes.navLink,
            color: "transparent",
          }}
          dropdownList={[
            <Link to="/plantygodnia" className={classes.dropdownLink}>
              Plan Tygodnia
            </Link>,
            // <Link to="/wtymmiesiacu" className={classes.dropdownLink}>
            //   W Tym Miesiącu
            // </Link>,
          ]}
        /> */}
      </ListItem>

      <ListItem className={classes.listItem}>
        <Link to="/grupyiwspolnoty" className={classes.navLink}>
          Grupy i wspólnoty
        </Link>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Link to="/galeria" className={classes.navLink}>
          Galeria
        </Link>
      </ListItem>

      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="O nas"
          buttonProps={{
            className: classes.navLink,
            color: "transparent",
          }}
          dropdownList={[
            <Link to="/ONas/duszpasterze" className={classes.dropdownLink}>
              Duszpasterze
            </Link>,
            <Link to="/ONas/duszpasterstwo" className={classes.dropdownLink}>
              Duszpasterstwo
            </Link>,
            <Link to="/ONas/liderzy" className={classes.dropdownLink}>
              Liderzy
            </Link>
          ]}
        />
      </ListItem>

      <ListItem className={classes.listItem}>
        <Link to="/sakramenty" className={classes.navLink}>
          Sakramenty
        </Link>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Link to="/naszeinicjatywy" className={classes.navLink}>
          Nasze Inicjatywy
        </Link>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Śledź nas na acebooku"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}>
          <Button
            color="transparent"
            href="https://www.facebook.com/da.piatka"
            target="_blank"
            className={classes.navLink}>
            <i className={classes.socialIcons + " fa fa-facebook-square"} />
          </Button>
        </Tooltip>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Obserwuj nas na Instagramie"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}>
          <Button
            color="transparent"
            href="https://www.instagram.com/dapiatka/"
            target="_blank"
            className={classes.navLink}>
            <i className={classes.socialIcons + " fa fa-instagram"} />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  )
}