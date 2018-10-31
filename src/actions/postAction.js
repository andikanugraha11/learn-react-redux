import {FETCH_POST, NEW_POST} from './types';

// export function fetchPost(){
//     return function(distpatch){
//         fetch('https://jsonplaceholder.typicode.com/posts')
//             .then(res => res.json())
//             .then(posts => dispatch({
//                 type : FETCH_POST,
//                 payload: posts
//             }))
//     }
// }

export const fetchPost = () => dispatch => {
    console.log('fetching')
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts => dispatch({
            type : FETCH_POST,
            payload: posts
        }))
}