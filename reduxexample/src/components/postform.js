import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {createPost} from '../actions/postActions';


class PostForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            body: ''
         };
         this.onChange = this.onChange.bind(this)
         this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value});

    }
    onSubmit(e){
        e.preventDefault();
        console.log("submit clicked");
        //https://jsonplaceholder.typicode.com/posts
        const post = {
            title: this.state.title,
            body: this.state.body
        }
        //call action
        this.props.createPost(post);
    }
    render() {
        return ( 
            <div>
                <h1>
                    Add Post
                </h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Title:</label><br />
                        <input name="title" type="text" onChange={this.onChange} value={this.state.title}/><br />
                        <label>Body:</label><br />
                        <textarea name="body" onChange={this.onChange} value={this.state.body}/>

                    </div>
                    <br />
                    <button type="submit" name="submit">SUBMIT</button>
                </form>
            </div>
        )
    }
}

PostForm.propTypes = {
    createPost: PropTypes.func.isRequired
};

export default connect(null, {createPost})(PostForm);