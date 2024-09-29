import { getUser } from "@/lib/data";
import styles from "./postUser.module.css";
import Image from "next/image";
const getSingleUser = async (userId) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {cache: 'no-store'})
    if(!response.ok) {
      throw new Error('Something went wrong')
    }
    return response.json()
  }
  

const postUser = async ({userId}) => {

    // const user = await getSingleUser(userId)

    const user = await getUser(userId)
    
  return (
    <div className={styles.container}>
      <Image src={user.img ? user.img : "/noavatar.png"}
        alt="post" width={50} height={50} 
        className={styles.avatar}
      />
      <div className={styles.texts}>
        <span className={styles.title}>Author</span>
        <span className={styles.username}> {user.username} </span>
      </div>
      
    </div>
  );
};

export default postUser;
