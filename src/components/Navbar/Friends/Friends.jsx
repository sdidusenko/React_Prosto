import s from "./Friends.module.css";
import FriendsBlock from "./FriendsBlock/FriendsBlock";

const Friends = (props) => {
    let friends = props.friends.map(dialog => <FriendsBlock name={dialog.name} id={dialog.id} img={dialog.img}/>)
    return (
        <div>
            <h2>Friends</h2>
            <div>
                <div>
                    {/*<img src={props.friends.img}/>*/}
                </div>
                <div className={s.friends}>
                    {friends}

                </div>
            </div>
        </div>
    )
}
export default Friends