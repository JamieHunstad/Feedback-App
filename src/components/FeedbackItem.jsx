import { useContext } from 'react';
import PropTypes from 'prop-types'
import Card from "./shared/card";
import FeedbackContext from '../context/FeedbackContext';

function FeedbackItem( {item} ) {
    const {deleteFeedback, editFeedback} = useContext(FeedbackContext)
    return (
        <Card >
            <div className='num-display'>{item.rating}</div>
            <p className='text-display'>{item.text}</p>
            <button class="delete-btn" onClick= {() => deleteFeedback(item.id)}>X</button>
            <button className="edit" onClick={() => editFeedback(item)}>Edit</button>
        </ Card>
    )
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired
}

export default FeedbackItem;