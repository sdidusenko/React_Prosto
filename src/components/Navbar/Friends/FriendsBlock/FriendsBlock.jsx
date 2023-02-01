import s from './FriendsBlock.module.css'
const FriendsBlock =(props) =>{
    return(
        <div>
            <img className={s.imgg} src={props.img} alt='avataFriends'/>
            <div className={s.opn}>{props.name}</div>
        </div>
    )
}
export default FriendsBlock