import styles from "./postUser.module.css";
const getSingleUser = async (userId) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {cache: 'no-store'})
    if(!response.ok) {
      throw new Error('Something went wrong')
    }
    return response.json()
  }
  

const postUser = async ({userId}) => {

    const user = await getSingleUser(userId)
    console.log("userId")
    console.log("user", user)  
    
  return (
    <div className={styles.container}>
      <span className={styles.title}>Author</span>
      <span className={styles.username}> {user.name} </span>
    </div>
  );
};

export default postUser;
