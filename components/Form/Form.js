import React from 'react';
import styles from './Form.css';
import classNames from 'classnames';
import FieldItem from './FieldItem';
import Button from '../Button';

const Form = (props) => {
    const { fields, title, className, buttonProps } = props;
    return(
        <form className={classNames(className)}>
            <h3 className={styles.FormTitle}>{title}</h3>
            {fields.map(field => {
                return(
                    <FieldItem key={field.name} field={field} />
                )
            })}
            {buttonProps &&
                <Button buttonProps={buttonProps} />
            }
        </form>
    )
}

export default Form;