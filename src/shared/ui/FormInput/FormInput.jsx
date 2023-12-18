import Input from '../Input';
import InputError from '../InputError';
import Label from '../Label';
import PhoneInput from '../PhoneInput';
import TextArea from '../TextArea';
import styles from './FormInput.module.scss';

function FormInput({
	labelMode,
	inputId,
	textLabel,
	errorMessage,
	errorMode,
	name,
	id,
	mode,
	type,
	phone,
	textarea,
}) {
	return (
		<div className={styles.box}>
			<Label
				labelMode={labelMode}
				inputId={inputId}
				textLabel={textLabel}
			></Label>
			{phone ? (
				<PhoneInput
					mode={mode}
					name={name}
					id={id}
					type={type}
					isValid
					required
				/>
			) : textarea ? (
				<TextArea name={name} id={id} mode={mode} />
			) : (
				<Input mode={mode} name={name} id={id} type={type} isValid required />
			)}
			<InputError
				errorMode={errorMode}
				errorMessage={errorMessage}
				isVisible
			></InputError>
		</div>
	);
}

export default FormInput;
