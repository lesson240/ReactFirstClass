import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "유성용",
        comment: "안녕하세요. 리액트 재밌어요",
    },
    {
        name: "유재석",
        comment: "안녕하세요. 리액트 금방 하네요",
    },
    {
        name: "박명수",
        comment: "안녕하세요. 리액트 굿굿",
    },
    
];



function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment}/>
                );
            })}
        </div>
    );
}

export default CommentList;
