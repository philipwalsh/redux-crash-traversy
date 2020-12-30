import React, { Component } from 'react'

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
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers:{
                'cpntent-type': 'applicatioon/json'
            },
            body: JSON.stringify(post)
        }).then(res => res.json()).then(data => console.log(data));
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

export default PostForm;