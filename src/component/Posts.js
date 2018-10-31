import React, { Component } from 'react'
import PropsTypes from 'prop-types';
import { connect } from 'react-redux'
import {fetchPost} from '../actions/postAction'


class Posts extends Component {

    componentWillMount(){
        this.props.fetchPost();
    }

    render() {
        const postItems = this.props.posts.map(post => (
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ))
        return (
        <div>
            <h1>Posts</h1>
            {postItems}
        </div>
        )
    }
}

Posts.protoTypes = {
    fetchPost : PropsTypes.func.isRequired,
    posts : PropsTypes.array.isRequired
}

const mapStateToProps = state => ({
    posts: state.posts.items
})

export default connect(mapStateToProps,{fetchPost})(Posts);