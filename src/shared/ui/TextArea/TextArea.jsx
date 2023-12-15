import styles from './TextArea.module.scss';
import cn from 'classnames';

function TextArea({ name, id, mode, ...props }) {
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
