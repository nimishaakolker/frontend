import { useState } from "react";
 import { useFormik } from 'formik';
export default function CommentsForm ({addNewComment}){

    // let [formData, setFormData] = useState({
    //     username : "",
    //     remark : "",
    //     rating : "5"
    // })

    const validate = values => {
        const errors = {};
        if(!values.username){
            errors.username = "Username is required!"
        }
    }
    const formik = useFormik({
        initialValues : {
            username : "",
            remark : "",
            rating : ""
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    // let handleInputChange = (event) => {
    //     setFormData((currData) => {
    //         return {...currData, [event.target.name] : event.target.value}
    //     })
    // }

    // let handleSubmit = (event) => {
    //     addNewComment(formData)
    //     event.preventDefault();
    //     console.log(formData);
        
    //     setFormData({
    //     username : "",
    //     remark : "",
    //     rating : "5"
    //     })
    // }


    return(
        <div>
        <h3>Give a comment 🫣</h3>
        <form action="" onSubmit={formik.handleSubmit}>
            <label htmlFor="username">Username : </label>
            <input type="text"
             name="username"
              id="username"
              value={formik.values.username} 
              onChange={formik.handleChange}
            />
            {formik.errors.username ? <p>{formik.errors.username}</p> : null}
              <br /><br />

            <label htmlFor="remark">Comment : </label>
              <textarea name="remark" 
              id="remark"
              placeholder="Leave some comments..."
              value={formik.values.remark}
              onChange={formik.handleChange}
              ></textarea>
               
               <br /><br />
              <label htmlFor="rating">Rating : </label>
              <input type="number" name="rating"
               id="rating" min={1} max={5}
               value={formik.values.rating}
               onChange={formik.handleChange} />

               <button type="submit">Add Comment</button>
        </form>
        </div>
    )
}