import Image from "next/image"
import styles from "./singlePost.module.css"

const SinglePost = ({}) => {
  return (
  <div className={styles.container}>
    <div className={styles.imgContainer}>
      <Image
      src="/post.png"
      alt="" 
      fill className={styles.img}/>
    </div>
    <div className={styles.textContainer}>
      <h1 className={styles.title}>Title</h1>
      <div className={styles.detail}>
        <Image className={styles.avatar}/>
        <div className={styles.detailText}>
          <span className={styles.detailTitle}></span>
          <span className={styles.detailValue}></span>
        </div>
        <div className={styles.detailText}>
          <span className={styles.detailTitle}>Published</span>
          <span className={styles.detailValue}>16-01-2024</span>
        </div>
      </div>
      <div className={styles.content}>

      </div>
    </div>
  </div>
)}

export default SinglePost