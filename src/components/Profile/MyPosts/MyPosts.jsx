import s from './MyPosts.module.css'
import Posts from './Post/Post'
const MyPosts = (props) => {
    let posts = props.post.map(elem => <Posts message={elem.message} like={elem.like} superlike={elem.superlike}
                                              img={elem.img}/>)

    return (
        <div>
            <div className={s.postsBlock}>
                <h3>
                    My posts
                </h3>
                <div>
                    <div>
                        <textarea></textarea>
                    </div>
                    <div>
                        <button>
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