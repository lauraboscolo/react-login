import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
    follow,
    toggleOpen
} from './../redux/actions/actions'

/** renders bg white when candidate not follow, render green when followed */
class FollowButton extends Component {
    constructor(props) {
        super(props)
        this.followCandidate = this.followCandidate.bind(this)
    }
    followCandidate () {
        // check if candidate is signed in.
        if (Object.keys(this.props._candidate).length > 0) {
            // check if candidate is not the same person to follow
            if (this.props._candidate._id !== this.props.to_follow) {
                // check if you are not already following him
                if (this.props.candidate.indexOf(this.props.to_follow) === -1) {
                    this.props.follow(this.props._candidate._id,this.props.to_follow)
                }
            }
        }else{
            this.props.toggleOpen()
        }
    }
    render() {
        let following = this.props.candidate
        const f = following.indexOf(this.props.to_follow)
        return ( 
            <div>
                <div>
                    <div onClick={this.followCandidate} data-reactroot=""><a className={f === -1 ? "button green-border-button follow-button" : "button green-inner-button follow-button"} href="javascript:void(0);">{f === -1 ? 'Follow':'Following'}</a></div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        _candidate: state.authCandidate.candidate,
    }
}
export default connect(mapStateToProps, { 
    follow,
    toggleOpen
})(FollowButton);