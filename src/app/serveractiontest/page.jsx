import { addPost, deletePost } from "@/lib/action"


const ServerActionTestPage = () => {
  return (
    <div>
        <form action={addPost}>
            <input type="text" name="title" placeholder="Title" />
            <input type="text" name="body" placeholder="body" />
            <input type="text" name="slug" placeholder="Slug" />
            <input type="text" name="userId" placeholder="UserId" />
            <button>Test Me</button>
        </form>

        <form action={deletePost} >
          <input type="text" name="id" placeholder="PostId" />
          <button>Delete Post</button>
        </form>
    </div>
  )
}

export default ServerActionTestPage