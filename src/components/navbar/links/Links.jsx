"use client";

import styles from "./links.module.css"
import NavLink from "../navLink/NavLink"
import Image from "next/image"
import { useState } from "react";

const Links = () => {

    const links = [
        {
            title: "Homepage",
            path: "/"
        },
        {
            title: "About",
            path: "/about"
        },
        {
            title: "Contact",
            path: "/contact"
        },
        {
            title: "Blog",
            path: "/blog"
        }
    ]

    const [open, setOpen] = useState(false);

    // temporary
    const session = true;
    const isAdmin = true;

  return (
    <div className={styles.container}>
        <div className={styles.links} >
            {links.map((link => (
                <NavLink key={link.title} item={link} />
            )))} {session ? (
                <>
                    {isAdmin && (<NavLink item={{title: "Admin", path: "/admin"}} />)}
                    <button className={styles.logout}>Logout</button>
                </>
            ) : (
                <NavLink item={{title: "Login", path: "/login"}} />
            ) }
        </div>
        <Image src="/menu.png" alt="menu" width={30} height={30} onClick={() => setOpen((prev) => !prev)} className={styles.menuButton} />
        {open && (
            <div className={styles.mobileLinks}>
                {links.map((link) => (
                    <NavLink key={link.title} item={link} />
            ))}
            </div>
        )}
    </div>
  )
}

export default Links