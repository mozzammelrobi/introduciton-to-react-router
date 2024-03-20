import { Link } from "react-router-dom";

const Comment = ({comment}) => {
    // console.log(comment)
    const {email,name,id}= comment

    const commentStyles={
        border:'2px solid red',
        padding:'5px',
        borderRadius:'20px'
    }
    return (
        <div style={commentStyles}>
            <h4>name: {name}</h4>
            <p>gmail: {email}</p>
            <Link to={`/comment/${id}`}>show more</Link>

        </div>
    );
};

export default Comment;