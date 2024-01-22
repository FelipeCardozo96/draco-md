import Image from "next/image"
import Link from "next/link"
import styles from "./postCard.module.css"

const PostCard = ({}) => {
  return <div className={styles.container}>
    <div className={styles.top}>
      <div className={styles.imgContainer}>
        <Image src="/post.png" alt="" fill className={styles.img}/>
      </div>
        <span className={styles.date}></span>
    </div>
    <div className={styles.bottom}>
      <h1 className={styles.title}>Title</h1>
      <p className={styles.desc}>Description</p>
      <Link className={styles.link} href="/blog/post">READ MORE</Link>
    </div>
  </div>
}

export default PostCard