import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css'; 

const FeedbackOptions = ({options, onLeaveFeedback}) =>{
    return (
        <ul className={css.listFeedbackBtns}>
            {options.map(option => (
                <li key={option} className={css.FeedbackBtn}>
                    <button
                        type="button"
                        name={option}
                        onClick={onLeaveFeedback}
                    >
                        {option}
                    </button>
                </li>))}
        </ul>                
    )                    
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired),
    onLeaveFeedback: PropTypes.func.isRequired
};
    
export default FeedbackOptions;