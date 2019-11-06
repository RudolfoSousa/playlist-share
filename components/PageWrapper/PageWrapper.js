import styles from './PageWrapper.css';
import classNames from 'classnames';

const PageWrapper = ({className, children}) => {
    return(
        <div className={classNames(className, styles.Page)}>
            {children}
        </div>
    )
};

export default PageWrapper;