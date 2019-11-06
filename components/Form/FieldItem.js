import React from 'react';
import styles from './FieldItem.css';

const FieldItem = ({field}) => {
    const {name, label, type = "text", placeholder = ""} = field;
    return(
        <div className={styles.FormField}>
            <label>
                {label}
                <input
                    type={type}
                    className={styles.FieldInput}
                    name={name}
                    placeholder={placeholder}
                />
            </label>
        </div>
    )
}

export default FieldItem;