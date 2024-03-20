import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData()
    const {name, website}= user
    return (
    
        <div>
            <h2>details about User: {name}</h2>
            <p>website: {website}</p>
        </div>
    );
};

export default UserDetails;