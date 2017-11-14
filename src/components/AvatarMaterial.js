import React from "react";
import PropTypes from "prop-types";
import {withStyles} from "material-ui/styles";
import Avatar from "material-ui/Avatar";

const styles = {
    avatar: {
        margin: 10
    },
    bigAvatar: {
        width: 60,
        height: 60
    }
};

function AvatarMaterial(props) {
    const {classes} = props;
    return (
        <Avatar alt={props.alt} src={props.src} className={classes.avatar}/>
    );
}

AvatarMaterial.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AvatarMaterial);