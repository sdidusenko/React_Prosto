import React from "react";
import s from './MyPosts.module.css'
import Posts from './Post/Post'



const MyPosts = (props) => {
    let posts = props.post.map(elem => <Posts message={elem.message} like={elem.like} superlike={elem.superlike}
                                              img={elem.img}/>)

    let newPostElement = React.createRef()

    let addPost = () => {

        let text=newPostElement.current.value;
        props.adPost(text)
    }

    return (
        <div>
            <div className={s.postsBlock}>
                <h3>
                    My posts
                </h3>
                <div>
                    <div>
                        <textarea id='new-post' ref={newPostElement}></textarea>
                    </div>
                    <div>
                        <button onClick={addPost} >
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