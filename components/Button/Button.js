import React from 'react';
import styles from './Button.css';

const Button = (props) => {
    const { buttonProps: {label, size = "Default"} } = props;
    return(
        <>
            <button className={styles[size]}>
                {label}
            </button>
        </>
    )
};

export default Button;