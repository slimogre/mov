import React , {useState} from 'react'
import StarRatingComponent from 'react-star-rating-component';

const Rat = (props) => {
    const [rating,setRating] = useState(1);
   
    const  onStarClick= (nextValue,prev) =>{
        console.log(nextValue)
        console.log(prev)
        setRating(nextValue);
       props.rateSearch(rating)
      }
       
        return (
            <div>
             <StarRatingComponent starCount={5} value={rating} onStarClick={onStarClick}/>
            </div>
        )
    };
    export default Rat

