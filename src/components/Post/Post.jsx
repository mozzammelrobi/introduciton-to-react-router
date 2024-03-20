import { Link, useNavigate } from "react-router-dom";

const Post = ({post}) => {
    const {id, title} = post

    const navigate = useNavigate();

    const postStyle={
        border:'2px solid green',
        padding:'5px',
        borderRadius:'20px'
    }

    const handleShowDetail = ()=>{
        navigate(`/post/${id}`)
    }
    return (
        <div style={postStyle}>
            <h4>Post of id: {id}</h4>
            <p>{title}</p>
            <Link to={`/post/${id}`}>Post Detaisl</Link>
            <button onClick={handleShowDetail}>Show detaisl</button>
        </div>
    );
};

export default Post;