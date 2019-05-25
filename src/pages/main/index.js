import React, { Component } from 'react';
import { connect } from 'react-redux';

class MainPage extends Component {

    componentDidMount() {
        if (!this.props.info.email) {
            this.props.history.push("/login");
        }
    }
    render() {
        return (
            <div>
                {(()=>{if (this.props.info.email) {
                    return <span>  Signed! </span>
                    } else {
                        return <span> Access Denied </span>
                    }
                })()}
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
}


export default connect(mapStateToProps,mapActionsToProps)(MainPage)