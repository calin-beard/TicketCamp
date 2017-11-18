import React from "react";
import PropTypes from "prop-types";
import {withStyles} from "material-ui/styles";
import Drawer from "material-ui/Drawer";
import ListMaterial from "./ListMaterial";
import {drawerWidth} from "../config/variables";

const styles = theme => ({
    root: {
        width: "100%",
        height: 430,
        marginTop: theme.spacing.unit * 3,
        zIndex: 1,
        overflow: "hidden"
    },
    appFrame: {
        position: "relative",
        display: "flex",
        width: "100%",
        height: "100%"
    },
    appBar: {
        position: "absolute",
        width: `calc(100% - ${drawerWidth}px)`
    },
    drawerPaper: {
        position: "relative",
        height: "100%",
        width: drawerWidth
    },
    drawerHeader: {
        width: drawerWidth
    },
    content: {
        backgroundColor: theme.palette.background.default,
        width: "100%",
        padding: theme.spacing.unit * 3,
        height: "calc(100% - 56px)",
        marginTop: 56,
        [theme.breakpoints.up("sm")]: {
            height: "calc(100% - 64px)",
            marginTop: 64
        }
    }
});

const Sidebar = (props) => {
    const {classes} = props;

    return (
        <Drawer type="permanent" className={classes.drawerPaper}>
            <div className={classes.drawerHeader}>
                <h1>Ticket Camp</h1>
            </div>
            <ListMaterial/>
        </Drawer>
    );
};

Sidebar.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Sidebar);
