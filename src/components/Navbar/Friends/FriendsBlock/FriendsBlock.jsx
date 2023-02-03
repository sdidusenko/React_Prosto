import s from './FriendsBlock.module.css'
const FriendsBlock =(props) =>{
    return(
        <div>
            <img className={s.avatar} src={props.img} alt='avatarFriends'/>
            <div>
                {props.name}
            </div>
        </div>
    )
}
export default FriendsBlock