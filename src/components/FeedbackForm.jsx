
import {useState, useContext, useEffect} from "react";
import FeedbackContext from "../context/FeedbackContext";
import Card from './shared/card'
import Button from './shared/button'
import RatingSelect from './RatingSelect'

function FeedbackForm () {
    const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext)

    useEffect(() => {
        if(feedbackEdit.edit === true){
            setBtnDisabled(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)

        }
    }, [feedbackEdit])
/*
    useEffect = (()=> {
        if(feedbackEdit.edit == true){
            setBtnDisabled(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }

    }, [feedbackEdit])
*/
    const [text, setText] = useState('')
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [rating, setRating] = useState()
    const [message, setMessage] = useState('')

    const handleTextChange = (e) => {
        if(text === ''){
            setBtnDisabled(true)
            setMessage(null)
        } else if (text !== '' && text.trim().length <= 10){
            setBtnDisabled(true)
            setMessage("Text must be at least 10 charcters")
        } else {
            setMessage(null)
            setBtnDisabled(false)
        }

        setText(e.target.value);
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        if(text.trim().length > 10) {
            const newFeedback = {
                text,
                rating
            }

            if(feedbackEdit.edit === true){
                updateFeedback(feedbackEdit.item.id, newFeedback)
            } else {
                addFeedback(newFeedback)
            }
            setText('')
        }
    }

    return (
        <div className='form-container'>
        <Card>
            <form onSubmit={handleSubmit}>
                <h2 className="form-question">How would you rate your service with us?</h2>
                < RatingSelect select={(rating) => setRating(rating)}/>
                <div className="input-group">
                    <input className="form-input" onChange={handleTextChange} type="text" placeholder='Write a review' value={text}></input>
                    <Button type="submit" isDisabled={btnDisabled}>Send</Button>
                </div>
            </form>
            {message && <div className="message">{message}</div>}
        </Card>
        </div>
    )
}

export default FeedbackForm