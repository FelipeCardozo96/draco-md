import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        DracoMD
      </div>
      <div className={styles.text}>
        Draco Media Agency © All rights reserved.
      </div>
    </div>
  );
};

export default Footer;