import { DEFAULT } from 'shared/utils/constants/modes.js';
import styles from './ListItem.module.scss';

function ListItem({ children, mode = DEFAULT }) {
	return <li className={styles[mode]}>{children}</li>;
}

export default ListItem;
