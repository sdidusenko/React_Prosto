import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                post ={props.post}
                adPost={props.adPost}
            />
        </div>
    )
}
export default Profile