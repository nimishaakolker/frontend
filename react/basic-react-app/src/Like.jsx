import { useState } from "react"

export default function Like(){
    let [isLiked, setIsLiked] = useState(false);

    let toggleLike = () => {
        setIsLiked(!isLiked);
    }

    let likeStyle = {
    color : "red",
    fontSize: "30px"
   
    }
    return(
        <div>
            <p onClick={toggleLike}> 
                {isLiked ? <i class="fa-solid fa-heart"style={likeStyle}></i> 
                : <i class="fa-regular fa-heart" ></i> }
                </p>
        </div>
    )
}
