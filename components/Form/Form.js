import React from 'react';
import styles from './Form.css';
import classNames from 'classnames';
import FieldItem from './FieldItem';

const Form = ({fields, title, className}) => {
    return(
        <form className={classNames(className)}>
            <h3 className={styles.FormTitle}>{title}</h3>
            {fields.map(field => {
                return(
                    <FieldItem key={field.name} field={field} />
                )
            })}
            <button type="send">Entrar</button>
        </form>
    )
}

export default Form;