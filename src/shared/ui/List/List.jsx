import styles from './List.module.scss';

function List({ children, mode }) {
	return <ul className={styles[mode]}>{children}</ul>;
}

export default List;
