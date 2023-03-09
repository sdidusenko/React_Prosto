import React from 'react';
import style from './Users.module.css'
/*import Mihalich from "../../Assets/Mihalich.jpg";
import Slavik from "../../Assets/Slavik.jpg";
import Mariya from "../../Assets/Mariya.jpg";
import Aliona from "../../Assets/Aliona.jpg";
import sky from '../../Assets/sky.jpg'*/
import axios from "axios";
import userPhoto from '../../Assets/images/users.jpg'

class Users extends React.Component {
    constructor(props) {
        super(props);
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return <div>
            {
                this.props.users.map(u =>
                    <div key={u.id}>
                        <div className={style.userPhotoAndContent}>
                            <div className={style.photoAndButton}>
                                <img className={style.userPhoto}
                                     src={u.photos.small != null ? u.photos.small : userPhoto}
                                     alt='usersPhoto'/>
                                {u.followed
                                    ? <button className={style.buttonFollow} onClick={() => {
                                        this.props.follow(u.id)
                                    }}>Follow</button>
                                    : <button className={`${style.buttonFollow} ${style.unfollow}`} onClick={() => {
                                        this.props.unfollow(u.id)
                                    }}>Unfollow</button>}
                            </div>
                            <div className={style.nameAndMessage}>
                                <div>
                                    <p className={style.name}>{u.name}</p></div>
                                <div><p className={style.status}>{u.status}</p></div>
                            </div>
                            <div className={`${style.nameAndMessage} ${style.location}`}>
                                <div><p className={style.country}>{"u.location.country"}</p></div>
                                <div><p className={style.city}>{"u.location.city"}</p></div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>

    }
}

export default Users;