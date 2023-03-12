import PropTypes from 'prop-types';
import css from './Section.module.css'; 

const Section = ({ title, children }) => {
    return (  
        <div>
            <h2 className={css.header}>{title}</h2>
            {children}
        </div>
    )                    
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired
};

export default Section;