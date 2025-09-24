import { useState } from "react"
import "./Comment.css"
import CommentsForm from "./CommentsForm"

export default function Comment() {
    let [comments, setComments] = useState([{
        username: "nimisha",
        remark: "aswerdtyuiop[!",
        rating: "5"
    }])

    let addNewComment = (comment) => {
        setComments((currComments) => [...currComments, comment]);
        console.log("added");
    }
    return (
        <>
        <div>
            <h3>All Comments</h3>
        
         {/* <div className="comment">
            {comments[0].remark} <br />
            {comments[0].username} <br />
            {comments[0].rating} <br />
         </div> */}

            {comments.map((comment, idx) => (
                <div className="comment" key={idx}>
                    <span>
                        {comment.remark}
                    </span>
                        <br />
                        {comment.rating}
                        <br />
                        {comment.username}
                    </div>
            ))}
</div>

<hr />

           <CommentsForm addNewComment={addNewComment} />
                
        </>
    )
}