import React from "react";
import PropTypes from "prop-types";
import {withStyles} from "material-ui/styles";

// Material UI Components
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";

// Proprietary Components
import TypographyMaterial from "./TypographyMaterial";
import IconButtonMaterial from "./IconButtonMaterial";
import AvatarMaterial from "./AvatarMaterial";
import ButtonMaterial from "./ButtonMaterial";

import {drawerWidth} from "../config/variables";

const styles = theme => ({
    root: {
        width: "100%"
    },
    appBar: {
        position: "absolute",
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth
    }
});

const Header = (props) => {
    const {classes} = props;
    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.appBar}>
                <Toolbar>
                    <IconButtonMaterial/>
                    <TypographyMaterial text="Title" type="title" color="inherit"/>
                    <AvatarMaterial alt="Calin" src="/img/Calin.png"/>
                    <ButtonMaterial color="contrast" text="Login"/>
                </Toolbar>
            </AppBar>
        </div>
    );
};

Header.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);