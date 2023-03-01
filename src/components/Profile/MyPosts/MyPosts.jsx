import React from "react";
import s from './MyPosts.module.css'
import Posts from './Post/Post'

const MyPosts = (props) => {

    let posts = props.post.map(elem =><Posts message={elem.message} key={elem.id} like={elem.like} superlike={elem.superlike}
                                              img={elem.img}/>)

    let newPostElement = React.createRef()

    let onAddPost = () => {
     props.addPost()
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
      props.newPostText(text)
    }
    return (
        <div>
            <div className={s.postsBlock}>
                <h3>
                    My posts
                </h3>
                <div>
                    <div>
                        <textarea onChange={onPostChange} id='new-post' ref={newPostElement} value={props.valuePostText}/>
                    </div>
                    <div>
                        <button onClick={onAddPost}>
                            AddPost
                        </button>
                    </div>
                </div>
            </div>
            <div className={s.posts}>
                {posts}
            </div>
        </div>
    )
}
export default MyPosts