import React from "react";
import PropTypes from "prop-types";
import {withStyles} from "material-ui/styles";
import IconButton from "material-ui/IconButton";
import MenuIcon from "material-ui-icons/Menu";

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
        marginLeft: -12,
        marginRight: 20
    }
});

const IconButtonMaterial = (props) => {
    const {classes} = props;
    return (
        <IconButton className={classes.button} color="contrast" aria-label="Menu">
            <MenuIcon/>
        </IconButton>
    );
};

IconButtonMaterial.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(IconButtonMaterial);