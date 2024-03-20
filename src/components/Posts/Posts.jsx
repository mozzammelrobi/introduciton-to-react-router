import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";

const Posts = () => {
    const posts = useLoaderData();
    // console.log(posts)
    return (
        <div>
            <h2>Posts:{posts.length}</h2>
            <div className="users">
                {
                    posts.map((post,i)=> <Post key={i} post={post}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;