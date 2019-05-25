import React, { Component } from 'react';
import { FacebookProvider, LoginButton } from 'react-facebook';
import { connect } from 'react-redux';
import {setUser} from '../../actions';

class LoginPage extends Component {
    handleResponse(event) {
        this.props.loginUser({
            id: event.profile.id,
            name: event.profile.name,
            email: event.profile.email 
        });

        this.props.history.push('/main');
    }

    handleError(event) {
        console.error(event);
    }

    render() {
        return (
            <div>
                <FacebookProvider appId="2278215242243820">
                    <LoginButton
                        scope="email"
                        onCompleted={this.handleResponse.bind(this)}
                        onError={this.handleError.bind(this)}>
                        <span>Login via Facebook</span>
                    </LoginButton>
                </FacebookProvider>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        info:state.user.info,
        signed: state.user.jwt
    }
}

const mapActionsToProps ={
    loginUser: setUser
}


export default connect(mapStateToProps, mapActionsToProps)(LoginPage)