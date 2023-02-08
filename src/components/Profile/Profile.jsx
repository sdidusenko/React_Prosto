import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                post ={props.profilePage.post}
                adPost={props.adPost}
                updateNewPostText={props.updateNewPostText}
                newPostText={props.profilePage.newPostText}
            />
        </div>
    )
}
export default Profile