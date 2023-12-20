import styles from './Form.module.scss';
import cn from 'classnames';

function Form({ children, type, ...props }) {
	return (
		<div className={cn(styles.root, { [styles[type]]: type })}>
			<div className={cn(styles.container, { [styles[type]]: type })}>
				<form className={cn(styles.form, { [styles[type]]: type })} {...props}>
					{children}
				</form>
				<div className={cn(styles.pic, { [styles[type]]: type })}></div>
			</div>
		</div>
	);
}

export default Form;
