import React, {Component} from "react";
import Sidebar from "../components/Sidebar";
import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            page: "Dashboard"
        };
    }

    changePage(newPage) {
        this.setState({
            page: newPage
        });
    }

    render() {
        return (
            //<div className="app">
            //    <Row noGutters={true}>
            <Sidebar onClick={this.changePage.bind(this)}/>
            //         <Col className="main-container col-sm-9">
            //             <Header page={this.state.page}/>
            //         </Col>
            //     </Row>
            // </div>
        );
    }
}

export default App;