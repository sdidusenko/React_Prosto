import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps=(state)=>{
    const { post, newPostText }= state.profilePage
    return{
post,
valuePostText:newPostText
        // post: state.profilePage.post,
        // valuePostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        newPostText:(text)=>{
            let action=updateNewPostTextActionCreator(text);
            dispatch(action)
        },
        addPost:()=>{
            dispatch(addPostActionCreator())
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer
