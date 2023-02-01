import s from './Posts.module.css'
const Posts = (props) => {

  return (
    <div className={s.item}>
        <img src={props.img}/>
      {/*<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCBdBZFK6wo6Wj50bOknfzyaiuOXM2qQ37LR8QzUZ5pA&s" itemID='1' alt="frog" />*/}
      {/*<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhyx1Ly2hk1cKczfzYCZmOkhdwAURqe9B4Th4p7axi&s' itemID='2' alt='cat'/>*/}

        {props.message}
      <div>
        <span>like {props.like}</span><span> superlike {props.superlike}</span>
      </div>
    </div>
  )
}
export default Posts