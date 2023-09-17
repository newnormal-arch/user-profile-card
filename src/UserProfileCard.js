import "./UserProfileCard.css"

function UserProfileCard() {
    return (
        <div className="user-profile-card">
            <img src="public/ProfilePic-modified.png" alt="Profile" />
            <h2>Bongani Ntshingila</h2>
            <p>A short bio about John Doe...</p>
        </div>
    );
}

export default UserProfileCard;