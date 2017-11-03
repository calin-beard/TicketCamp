import React from "react";
import Router from "./Router";
import {MuiThemeProvider, createMuiTheme} from "material-ui/styles";

const appTheme = createMuiTheme();

const Theme = () => {
    return (
        <MuiThemeProvider theme={appTheme}>
            <Router/>
        </MuiThemeProvider>
    );
};

export default Theme;