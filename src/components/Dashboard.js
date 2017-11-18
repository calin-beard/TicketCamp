import React, {Component} from "react";
import {withStyles} from "material-ui/styles";
import Header from "./Header";
import RecentProjects from "./RecentProjects";
import RecentIssues from "./RecentIssues";
import {drawerWidth} from "../config/variables";

const styles = theme => ({
    content: {
        backgroundColor: theme.palette.background.default,
        width: "100%",
        padding: theme.spacing.unit * 3,
        height: "calc(100% - 56px)",
        marginTop: 56,
        marginRight: drawerWidth,
        [theme.breakpoints.up("sm")]: {
            height: "calc(100% - 64px)",
            marginTop: 64
        }
    }
});

const Dashboard = (props) => {
    const {classes} = props;
    return (
        <div>
            <Header/>
            <div className={classes.content}>
                <RecentProjects/>
                <RecentIssues/>
            </div>
        </div>
    );
};

export default withStyles(styles)(Dashboard);
