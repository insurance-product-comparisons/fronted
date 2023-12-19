import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './Button.module.scss';

function Button({ children, type, bgcolor, mode, disabled }) {
	return (
		<button
			type={type}
			className={cn(styles.root, {
				[styles[bgcolor]]: bgcolor,
				[styles[mode]]: mode,
				[styles.disable]: disabled,
			})}
			disabled={disabled}
		>
			{children}
		</button>
	);
}

Button.propTypes = {
	children: PropTypes.string,
	type: PropTypes.string,
	bgcolor: PropTypes.string,
	mode: PropTypes.string,
	disabled: PropTypes.bool,
};

export default Button;
