import { DEFAULT } from 'shared/utils/constants/modes.js';
import cn from 'classnames';
import styles from './TextArea.module.scss';

function TextArea({ name, id, mode = DEFAULT, ...props }) {
	return (
		<textarea
			{...props}
			name={name}
			className={cn(styles.default, { [styles[mode]]: mode })}
			id={id}
		></textarea>
	);
}

export default TextArea;
