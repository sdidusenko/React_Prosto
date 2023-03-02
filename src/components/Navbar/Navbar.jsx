import s from './navbar.module.css'
import {NavLink} from "react-router-dom";
/*import Friends from "./Friends/Friends";*/

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div>
                <NavLink to='/profile/' className={navData => navData.isActive ? s.active : s.item}>Profile</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to='/dialogs/' className={navData => navData.isActive ? s.active : s.item}>Dialogs</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/users/' className={navData => navData.isActive ? s.active : s.item}>Users</NavLink>
            </div>
            <div className={s.item}>
                <a>Music</a>
            </div>
            <div className={s.item}>
                <a>Settings</a>
            </div>
            {/*<Friends friends={props.friends}/>*/}
        </nav>
    )
}
export default Navbar