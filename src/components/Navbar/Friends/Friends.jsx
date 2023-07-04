import s from "./Friends.module.css";
import FriendsBlock from "./FriendsBlock/FriendsBlock";
import store from "../../../Redux/Store";

const Friends = () => {
    const friendItem=store._state.profilePage.friends.map((dialog, index) => (<FriendsBlock key={index} name={dialog.name} id={dialog.id} img={dialog.img}/>))
    return (
        <div>
            <h2>
                Friends
            </h2>
            <div className={s.friends}>
                {friendItem}
            </div>
        </div>
    )
}
export default Friends
