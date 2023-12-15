import styles from './Form.module.scss';
import cn from 'classnames';

function Form({ children, type, onSubmit, ...props }) {
	return (
		<div className={styles.root}>
			<div className={cn(styles.container, { [styles[type]]: type })}>
				<form
					className={cn(styles.form, { [styles[type]]: type })}
					onSubmit={props.handleSubmit(onSubmit)}
				>
					{children}
				</form>
				<div className={cn(styles.pic, { [styles[type]]: type })}></div>
			</div>
		</div>
	);
}

export default Form;
