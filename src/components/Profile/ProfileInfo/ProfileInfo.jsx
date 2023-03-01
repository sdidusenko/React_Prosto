import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>

            <div>
                <img className={s.profileBack}
                      src='https://images.pexels.com/photos/355508/pexels-photo-355508.jpeg?auto=compress&cs=tinysrgb&w=600' alt='background image'/>
            </div>
            <div className={s.descriptionBlock}>
                ava+description
            </div>
        </div>
    )
}
export default ProfileInfo

