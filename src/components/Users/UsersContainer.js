import React from "react";
import {followActionCreator, setUsersActionCreator, unfollowActionCreator,} from '../../Redux/user-reduser'
import Users from "../Users/Users";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        users:state.usersPage.users
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followActionCreator(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowActionCreator(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users))
        }
    }
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer
