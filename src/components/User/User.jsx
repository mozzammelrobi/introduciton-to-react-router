import Users from "../Users/Users";

const User = ({user}) => {
    const {id, name, email, phone}= user
    const userStyel = {
        border: '2px solid yellow',
        padding:'10px',
        borderRadious:'10pxd',
       margin:'10px'
    }
    return (
        <div style={userStyel}>
            <h2>{name}</h2>
            <p>email: {email}</p>
            <p>Phoen: {phone}</p>
        </div>
    );
};

export default User;