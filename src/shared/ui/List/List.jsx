import { DEFAULT } from 'shared/utils/constants/modes.js';
import styles from './List.module.scss';

function List({ children, mode = DEFAULT }) {
	return <ul className={styles[mode]}>{children}</ul>;
}

export default List;
