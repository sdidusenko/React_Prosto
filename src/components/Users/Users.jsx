import React from 'react';
import style from './Users.module.css'
import Mihalich from "../../Assets/Mihalich.jpg";
import Slavik from "../../Assets/Slavik.jpg";
import Mariya from "../../Assets/Mariya.jpg";
import Aliona from "../../Assets/Aliona.jpg";
import sky from '../../Assets/sky.jpg'

function Users(props) {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                followed: true,
                fullName: 'Mikhalich',
                status: 'Slava Ukraini!!!',
                img: Mihalich,
                location: {
                    city: "Vokzal'na town",
                    country: 'Ukraine'
                },
            },
            {
                id: 2,
                followed: false,
                fullName: 'Slavik',
                status: 'Heroyam Slava!!!',
                img: Slavik,
                location: {
                    city: 'Marcynivka comunity',
                    country: 'Ukraine'
                },
            },
            {
                id: 3,
                followed: true,
                fullName: 'Mariya',
                status: "Dobriy den' everybody!",
                img: Mariya,
                location: {
                    city: 'Myrtiuki is the best',
                    country: 'Ukraine'
                },
            },
            {
                id: 4,
                followed: true,
                fullName: 'Aliona',
                status: "Russkiy voenniy korabl'-idi na...",
                img: Aliona,
                location: {
                    city: 'Ovruch region',
                    country: 'Ukraine'
                },
            },])
    }


    return (
        <div>
            {props.users.map(u =>
                <div key={u.id}>
                    <div className={style.userPhotoAndContent}>
                        <div className={style.photoAndButton}>
                            <img className={style.userPhoto} src={u.img} alt='usersPhoto'/>
                            {u.followed
                                ? <button className={style.buttonFollow} onClick={() => {
                                    props.follow(u.id)
                                }}>Follow</button>
                                : <button className={`${style.buttonFollow} ${style.unfollow}`} onClick={() => {
                                    props.unfollow(u.id)
                                }}>Unfollow</button>}
                        </div>
                        <div className={style.nameAndMessage}>
                            <div>
                                <p className={style.name}>{u.fullName}</p></div>
                            <div><p className={style.status}>{u.status}</p></div>
                        </div>
                        <div className={`${style.nameAndMessage} ${style.location}`}>
                            <div><p className={style.country}>{u.location.country}</p></div>
                            <div><p className={style.city}>{u.location.city}</p></div>
                        </div>
                    </div>
                </div>
            )
            }
        </div>


    )
}

export default Users;