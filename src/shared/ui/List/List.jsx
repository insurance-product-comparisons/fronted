import { DEFAULT } from 'shared/utils/constants/modes.js';
import styles from './List.module.scss';

function List({ children, listmode = DEFAULT }) {
	return <ul className={styles[listmode]}>{children}</ul>;
}

export default List;
