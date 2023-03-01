import s from "./Friends.module.css";
import FriendsBlock from "./FriendsBlock/FriendsBlock";

const Friends = (props) => {
    let friends = props.friends.map(dialog => <FriendsBlock name={dialog.name} id={dialog.id} img={dialog.img}/>)
    return (
        <div>
            <h2>
                Friends
            </h2>
            <div className={s.friends}>
                {friends}
            </div>
        </div>
    )
}
export default Friends
