import React from "react";
import PropTypes from "prop-types";
import {withStyles} from "material-ui/styles";
import List, {ListItem, ListItemIcon, ListItemText} from "material-ui/List";
import Divider from "material-ui/Divider";
import DashboardIcon from "material-ui-icons/Dashboard";
import ProjectsIcon from "material-ui-icons/CompareArrows";
import IssuesIcon from "material-ui-icons/Assignment";
import SettingsIcon from "material-ui-icons/Settings";
import {Link} from "react-router-dom";

const styles = theme => ({
    root: {
        width: "100%",
        maxWidth: 360,
        color: theme.palette.shades.dark.text,
        background: theme.palette.primary
    }
});

function ListMaterial(props) {
    const {classes} = props;
    return (
        <div className={classes.root}>
            <List>
                <Link to="/">
                    <ListItem button>
                        <ListItemIcon>
                            <DashboardIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Dashboard"/>
                    </ListItem>
                </Link>
                <Link to="/projects">
                    <ListItem button>
                        <ListItemIcon>
                            <ProjectsIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Projects"/>
                    </ListItem>
                </Link>
                <Link to="/issues">
                    <ListItem button>
                        <ListItemIcon>
                            <IssuesIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Issues"/>
                    </ListItem>
                </Link>
            </List>
            <Divider/>
            <List>
                <Link to="/settings">
                    <ListItem button>
                        <ListItemIcon>
                            <SettingsIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Settings"/>
                    </ListItem>
                </Link>
            </List>
        </div>
    );
}

ListMaterial.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ListMaterial);