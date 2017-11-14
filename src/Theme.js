import React from "react";
import Router from "./Router";
import {MuiThemeProvider, createMuiTheme} from "material-ui/styles";

// Import colors
import blue from 'material-ui/colors/blue';
import green from 'material-ui/colors/green';
import red from 'material-ui/colors/red';


const appTheme = createMuiTheme({
    palette: {
        primary: blue, // Purple and green play nicely together.
        secondary: {
            ...green,
            A400: '#00e677',
        },
        error: red,
    },
});

const Theme = () => {
    return (
        <MuiThemeProvider theme={appTheme}>
            <Router/>
        </MuiThemeProvider>
    );
};

export default Theme;