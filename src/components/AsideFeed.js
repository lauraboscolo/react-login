import React, { Component } from 'react'

class AsideFeed extends Component {
    render () {
        const authors = this.props._posts
            .map((_post)=> {
                    return _post.author.name
                }
            )
            .sort()
            .filter((a, b, self)=>{
                return self.indexOf(a) === b
            })
            .map((__post)=>
                <a href='javascript:void(0);' className="tag">{__post}</a>
            )
        const top_posts = this.props._posts.map((_post, i)=>

                    <li className="top-stories-list-item">
                        <div className="count-button-wrapper">
                            <span className="count-button">{i}</span>
                        </div>
                        <div className="top-stories-links">
                            <a className="post-title" href={`/postview/${_post._id}`}>{_post.title}</a><br/>
                            <small>
                              <div data-react-className="PopoverLink" data-react-props="">
                                <span className="popover-link" data-reactroot="">
                                    <a href={`/profile/${_post.author._id}`}>{_post.author.name}</a>
                                </span>
                              </div>
                            </small>
                        </div>
                    </li>

        )
        return (
    <div>
        <aside className="col-md-4 main-sidebar">
            <h4 className="small-heading border-top">Featured Authors</h4>
            <div data-react-className="TagList" data-react-props="">
                <div className="tags-wrapper undefined" data-reactroot="">
                    {authors}
                </div>
            </div>


            <h4 className="small-heading border-top">Top stories</h4>
            <div className="sidebar-top-stories">
                <ul>
                    {top_posts}
                </ul>
            </div>
        </aside>
</div>
        )
    }
}
export default AsideFeed