import React, {Component} from "react";
import "./Header.css";

// import PropTypes from "prop-types";
// import {withStyles} from "material-ui/styles";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import Button from "material-ui/Button";
import IconButton from "material-ui/IconButton";
import MenuIcon from "material-ui-icons/Menu";

const Header = () => {
    // const {classes} = props;
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton color="contrast" aria-label="Menu">
                        <MenuIcon/>
                    </IconButton>
                    <Typography type="title" color="inherit">
                        Title
                    </Typography>
                    <Button color="contrast">Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
};

// class Header extends Component {
//     render() {
//         return (
//             <header className="app-header">
//                 <h1 className="title text-left">Title</h1>
//             </header>
//         );
//     }
// }

export default Header;