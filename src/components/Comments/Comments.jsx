import { useLoaderData } from "react-router-dom";
import Comment from "../Comment/Comment";
import './Comments.css'

const Comments = () => {
    const comments = useLoaderData()
    // console.log(comments)
    return (
        <div>
            <h2>Total comment: {comments.length}</h2>
            <div className="container">
                {
                    comments.map((comment,i) => <Comment key={i} comment={comment}></Comment>)
                }
            </div>
        </div>
    );
};

export default Comments;