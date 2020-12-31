import {FETCH_POSTS, NEW_POST} from './types';

export const fetchPosts = () => dispatch =>{

        console.log('in it to win it');
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts=>dispatch({
            type: FETCH_POSTS,
            payload: posts
        }));
}


export const createPost = (postData) => dispatch =>{

    console.log('createPost');
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers:{
            'cpntent-type': 'applicatioon/json'
        },
        body: JSON.stringify(postData)
    })
    .then(res => res.json())
    .then(post => dispatch({
            type: NEW_POST,
            payload: post
        }));

}
