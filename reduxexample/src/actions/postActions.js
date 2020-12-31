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
