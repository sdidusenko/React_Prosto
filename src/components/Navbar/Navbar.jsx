import s from "./navbar.module.css";
import { NavLink } from "react-router-dom";
import Friends from "./Friends/Friends";


const Navbar = () => {
  const classOfLinks = (navData) => (navData.isActive ? s.active : s.item);

  return (
    <nav className={s.nav}>
      <div>
        <NavLink to="/profile/" className={classOfLinks}>
          Profile
        </NavLink>
      </div>
      <div className={`${s.item} ${s.active}`}>
        <NavLink to="/dialogs/" className={classOfLinks}>
          Dialogs
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/users/" className={classOfLinks}>
          Users
        </NavLink>
      </div>
      <div className={s.item}>
        <p>Music</p>
      </div>
      <div className={s.item}>
        <p>Settings</p>
      </div>
      {/* <Friends friends={props.friends}/> */}
      <Friends />
    </nav>
  );
};
export default Navbar;
