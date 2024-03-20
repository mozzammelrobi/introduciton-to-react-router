import { Link } from "react-router-dom";

const Post = ({post}) => {
    const {id, title} = post
    const postStyle={
        border:'2px solid green',
        padding:'5px',
        borderRadius:'20px'
    }
    return (
        <div style={postStyle}>
            <h4>Post of id: {id}</h4>
            <p>{title}</p>
            <Link to={`/post/${id}`}>Post Detaisl</Link>
        </div>
    );
};

export default Post;