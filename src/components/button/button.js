import React from 'react';
import PropTypes from 'prop-types';
import './button.css'

const Button = ({
    buttonStyle,
    bodyText,
    onClick
}) => {

    const STYLES = [
        'btn--primary',
        'btn--warning',
        'btn--success',
        'btn--danger'
    ]

    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
    return (
        <button
            className={`btn ${checkButtonStyle}`}
            onClick={onClick}
        >
            {bodyText}
        </button>
    )
}

Button.propTypes = {
    styleClass: PropTypes.string,
    bodyText: PropTypes.string.isRequired,
    // onClick: PropTypes.func.isRequired
}

export default Button