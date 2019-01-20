import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    loadPosts
} from './../redux/actions/actions'
import AsideFeed from './AsideFeed'

const mapStateToProps = state => {
    return {
        posts: state.posts.posts
    }
}

class Feed extends Component {

    componentWillReceiveProps(nextProps) {
        
    }
        
    componentWillMount() {
        this.props.loadPosts()
    }
    
    render() {
    const posts = this.props.posts.reverse().map((post)=>
                <div className="post-panel">

                    <div className="post-metadata">
                        <img alt="" className="avatar-image" src={post.author.provider_pic} height="40" width="40"/>
                        <div className="post-info">
                            <div data-react-className="PopoverLink">
                            <span className="popover-link" data-reactroot=""><a href={`/profile/${post.author._id}`}>{post.author.name}</a></span></div>
                            <small>Posted • A must read</small>
                        </div>
                    </div>

                    {post.feature_img.length > 0 ? <div class="post-picture-wrapper">
                        <img src={post.feature_img} alt="Thumb" />
                    </div>:''}

                    <div className="main-body">
                        <h3 className="post-title"><a href={`/postview/${post._id}`} >{post.title}</a></h3>
                        <div className="post-body">
                            <p className="" dangerouslySetInnerHTML={{__html: post.description}}></p>
                        </div>
                        <a className="read-more" href={`/postview/${post._id}`}>Read more</a>
                    </div>

                    <div className="post-stats clearfix">
                        <div className="pull-left">
                            <div className="like-button-wrapper">
                                <form className="button_to" method="get" action="">
                                    <button className="like-button" data-behavior="trigger-overlay" type="submit"><i className="fa fa-heart-o"></i><span className="hide-text">Like</span></button></form>
                                <span className="like-count">{post.claps}</span>
                            </div>

                        </div>

                        <div className="pull-right">
                            <div className="bookmark-button-wrapper">
                                <form className="button_to" method="get" action=""><button className="bookmark-button" data-behavior="trigger-overlay" type="submit">      <span className="icon-bookmark-o"></span><span className="hide-text">Bookmark</span></button></form>
                            </div>

                        </div>

                        <div className="response-count pull-right">
                        </div>
                    </div>
                </div>
            )

        return ( 
            <div>
                <div className="container-fluid main-container">
                    <div className="col-md-6 col-md-offset-1 dashboard-main-content">
                        <div className="posts-wrapper animated fadeInUp" data-behavior="endless-scroll" data-animation="fadeInUp-fadeOutDown">

                            {posts}
                        </div>
                    </div>
                    {this.props.posts ? <AsideFeed _posts={this.props.posts} /> : ''}
                </div>

            </div>
        );
    }
}

export default connect(mapStateToProps, { loadPosts })(Feed);