import styles from "./postUser.module.css";
import { getUser } from "@/lib/data";
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
      <span className={styles.title}>Author</span>
      <span className={styles.username}> {user.name} </span>
    </div>
  );
};

export default postUser;
