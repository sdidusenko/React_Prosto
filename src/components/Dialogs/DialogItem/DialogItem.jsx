import s from "./DialogItem.module.css"
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id + '/'
    return (
        <div className={s.dialog + ' ' + s.active}>
            <img className={s.imageProfiles} src={props.img} alt='imageProfile'/>
            <NavLink className={navData => navData.isActive ? s.active : s.dialog} to={path}>{props.name}</NavLink>
        </div>
    )

}
export default DialogItem