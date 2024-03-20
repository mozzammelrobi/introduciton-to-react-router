import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {
const post = useLoaderData()
const {postId} = useParams()
const navigate = useNavigate()
const {id, title, body}= post

console.log(postId)

const handleGoBack = ()=>{
 navigate(-1)
}
    return (
        <div>
            <h3>Post detaisl about: {id} </h3>
            <p>Title: {title}</p>
            <p>{body}</p>
            <button onClick={handleGoBack}>Go back</button>
        </div>
    );
};

export default PostDetails;