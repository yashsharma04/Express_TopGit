import React from "react";
import {connect} from "react-redux";

import { User } from './../components/User.jsx';
import { Main } from './../components/Main.jsx';
import {setName} from "../actions/userActions.jsx"

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Main changeUsername={() => this.props.setName("Anna")}/>
                <User username={this.props.user.name}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        math: state.math
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        setName: (name) => {
            dispatch(setName(name));
        }
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(App);