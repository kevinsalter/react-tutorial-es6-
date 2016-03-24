import React from 'react';
import Comment from './comment.jsx';

// example of a Functional Stateless Component
// ...it's like a React component with only a render() method
const CommentList = (props) => {
    let commentNodes = props.data.map( (comment) => {
        return (
            <Comment author={comment.author} key={comment.id}>
                {comment.text}
            </Comment>
        )
    })

    return (
        <div className="commentList">
            {commentNodes}
        </div>
    )
}

export default CommentList;
