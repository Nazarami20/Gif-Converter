import React from "react";
import styles from "../styles/navbar.module.scss";
import Logo from "./mountain.svg";
import LinkedIn from "./linkedin-icon.svg";
import Github from "./github.svg";
import { useRouter } from "next/router";
import Link from "next/link";

function Navbar() {
  // const router = useRouter();
  return (
    <div className={styles.wrapper}>
      <div className={styles.logoWrapper}>
        {/* <div className={styles.logoWrapperNavBar}> */}
        <Logo height="50px" width="50px" />
        {/* </div> */}
        <div className={styles.navbarMenuWrapper}>
          <Link href="about">
            <h1 className={styles.navBarItem}>About</h1>
          </Link>
          <Link href="contact">
            <h1 className={styles.navBarItem}>Contact</h1>
          </Link>
          {/* </div> */}
        </div>
        {/* <div className={styles.mediaWrapper}> */}
        <div className={styles.socialMedia}>
          <a target="_blank" href="https://github.com/Nazarami20">
            <div className={styles.logoItem}>
              <Github height="25px" width="25px" />
            </div>
          </a>
          <div className={styles.logoItem}>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/amir-nazari-015092211/"
            >
              <div className={styles.linkedin}>
                <LinkedIn height="25px" width="25px" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
