import React from "react";
import PropTypes from "prop-types";
import {withStyles} from "material-ui/styles";
import Button from "material-ui/Button";

const styles = theme => ({
    button: {
        margin: theme.spacing.unit
    }
});

function ButtonMaterial(props) {
    const {classes} = props;
    return (
        <Button color={props.color} className={classes.button}>
            {props.text}
        </Button>
    );
}

ButtonMaterial.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ButtonMaterial);