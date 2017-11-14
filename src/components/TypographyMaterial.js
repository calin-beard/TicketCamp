import React from "react";
import PropTypes from "prop-types";
import {withStyles} from "material-ui/styles";
import Typography from "material-ui/Typography";

const styles = theme => ({
    flex: {
        flex: 1,
    }
});

const TypographyMaterial = (props) => {
    const {classes} = props;
    return (
        <Typography className={classes.flex} type={props.type} color={props.color}>
            {props.text}
        </Typography>
    );
};

TypographyMaterial.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TypographyMaterial);