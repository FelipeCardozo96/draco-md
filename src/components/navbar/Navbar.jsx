import Link from "next/link"
import Links from "./links/Links"
import styles from "./navbar.module.css"
import Image from 'next/image'

const Navbar = () => {

  /* const session = auth(); */

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        <Image 
        src="/logo-variable-1.svg" 
        width={240}
        height={240}
        alt="Picture of the author"
        />
      </Link>
      <div>
        <Links/>
      </div>
    </div>
  )
}


export default Navbar