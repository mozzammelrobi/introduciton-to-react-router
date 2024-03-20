import { useLoaderData } from "react-router-dom";

const PostDetails = () => {
const post = useLoaderData()
console.log(post)
const {id, title, body}= post
    return (
        <div>
            <h3>Post detaisl about: {id} </h3>
            <p>Title: {title}</p>
            <p>{body}</p>
        </div>
    );
};

export default PostDetails;