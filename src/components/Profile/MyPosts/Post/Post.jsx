import s from './Posts.module.css'
const Posts = (props) => {

  return (
    <div className={s.item}>
        <img src={props.img} alt='img'/>
        {props.message}
      <div>
        <span>like {props.like}</span><span> superlike {props.superlike}</span>
      </div>
    </div>
  )
}
export default Posts