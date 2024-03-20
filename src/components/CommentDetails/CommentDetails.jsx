import { useLoaderData } from "react-router-dom";

const CommentDetails = () => {
    const commentD = useLoaderData()
    // const {body}= commentD
    const {body, postId}= commentD
    return (
        <div>
            <h5>commentId: {postId}</h5>
            <p>{body}</p>
        </div>
    );
};

export default CommentDetails;