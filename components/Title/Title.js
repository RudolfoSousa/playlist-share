import React from 'react';
import classNames from 'classnames';
import styles from './Title.css';

function Title(props){
    const { titleProps: {title = "", className}, subTitleProps, subTitleProps: {subTitle} } = props;
    return(
        <>
            <h1 className={classNames(className, styles.Title)}>{title}</h1>
            {subTitleProps && (
                <h2 className={classNames(subTitleProps.className, styles.SubTitle)}>{subTitle}</h2>
            )}
        </>
    )
}

export default Title;