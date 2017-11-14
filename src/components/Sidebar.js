import React, {Component} from "react";
import {Container, Col} from "reactstrap";
import {Button} from "reactstrap";
import {Link} from "react-router-dom";
import "./Sidebar.css";

// import React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from 'material-ui/styles';
// import classNames from 'classnames';
// import Drawer from 'material-ui/Drawer';
// import AppBar from 'material-ui/AppBar';
// import Toolbar from 'material-ui/Toolbar';
// import List from 'material-ui/List';
// import Typography from 'material-ui/Typography';
// import Divider from 'material-ui/Divider';
// import IconButton from 'material-ui/IconButton';
// import MenuIcon from 'material-ui-icons/Menu';
// import ChevronLeftIcon from 'material-ui-icons/ChevronLeft';
// import ChevronRightIcon from 'material-ui-icons/ChevronRight';
// import { mailFolderListItems, otherMailFolderListItems } from './tileData';
//
// const drawerWidth = 240;
//
// class Sidebar extends React.Component {
//     state = {
//         open: false,
//     };
//
//     handleDrawerOpen = () => {
//         this.setState({ open: true });
//     };
//
//     handleDrawerClose = () => {
//         this.setState({ open: false });
//     };
//
//     render() {
//         const { classes, theme } = this.props;
//
//         return (
//             <div className={classes.root}>
//                 <div className={classes.appFrame}>
//                     <AppBar className={classNames(classes.appBar, this.state.open && classes.appBarShift)}>
//                         <Toolbar disableGutters={!this.state.open}>
//                             <IconButton
//                                 color="contrast"
//                                 aria-label="open drawer"
//                                 onClick={this.handleDrawerOpen}
//                                 className={classNames(classes.menuButton, this.state.open && classes.hide)}
//                             >
//                                 <MenuIcon />
//                             </IconButton>
//                             <Typography type="title" color="inherit" noWrap>
//                                 Mini variant drawer
//                             </Typography>
//                         </Toolbar>
//                     </AppBar>
//                     <Drawer
//                         type="permanent"
//                         classes={{
//                             paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
//                         }}
//                         open={this.state.open}
//                     >
//                         <div className={classes.drawerInner}>
//                             <div className={classes.drawerHeader}>
//                                 <IconButton onClick={this.handleDrawerClose}>
//                                     {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
//                                 </IconButton>
//                             </div>
//                             <Divider />
//                             <List className={classes.list}>{mailFolderListItems}</List>
//                             <Divider />
//                             <List className={classes.list}>{otherMailFolderListItems}</List>
//                         </div>
//                     </Drawer>
//                     <main className={classes.content}>
//                         <Typography type="body1" noWrap>
//                             {'You think water moves fast? You should see ice.'}
//                         </Typography>
//                     </main>
//                 </div>
//             </div>
//         );
//     }
// }
//
// Sidebar.propTypes = {
//     classes: PropTypes.object.isRequired,
//     theme: PropTypes.object.isRequired,
// };

class Sidebar extends Component {
    render() {
        return (
            <Col sm="3" className="sidebar-container">
                <h1 className="title">Ticket Camp</h1>
                <Container fluid>
                    <Link to="/">
                        <Button block color="primary" className="rounded">Dashboard</Button>
                    </Link>
                    <Link to="/projects">
                        <Button block color="primary" className="rounded">Projects</Button>
                    </Link>
                    <Link to="/issues">
                        <Button block color="primary" className="rounded">Issues</Button>
                    </Link>
                </Container>
                <Container fluid className="align-bottom">
                    <Link to="/settings">
                        <Button block color="primary" className="rounded">Settings</Button>
                    </Link>
                </Container>
            </Col>
        );
    }
}

export default Sidebar;
