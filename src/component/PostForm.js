import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {createPost} from '../actions/postAction';

class PostForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            title: '',
            body:''
        }

        // if don't use arrow function
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit(e){
        e.preventDefault();
        const post = {
            title: this.state.title,
            body: this.state.body
        }
        // Call Action
        this.props.createPost(post)
    }

    render() {
        return (
        <div>
            <h1>Add Post</h1>
            <form onSubmit={this.onSubmit}>
                <div>
                    <label>Title: </label> <br/>
                    <input onChange={this.onChange} type="text" name="title" value={this.state.title}/>
                </div>
                <div>
                    <label>Body: </label> <br/>
                    <textarea onChange={this.onChange} name="body" value={this.state.body}></textarea>
                </div> <br/>
                <button type="submit">Submit</button>
            </form>
        </div>
        )
    }
}

PostForm.PropTypes = {
    createPost : PropTypes.func.isRequired
}

export default connect(null, {createPost})(PostForm);