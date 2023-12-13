import styles from './ListItem.module.scss';

function ListItem({ children, mode }) {
	return <li className={styles[mode]}>{children}</li>;
}

export default ListItem;