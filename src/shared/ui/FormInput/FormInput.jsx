import {
	Input,
	InputError,
	Label,
	PhoneInput,
	TextArea,
	SelectComponent,
} from 'shared/ui';
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
	select,
	options,
	submode,
	placeholder = '',
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
					submode={submode}
				/>
			) : textarea ? (
				<TextArea name={name} id={id} mode={mode} />
			) : select ? (
				<SelectComponent
					mode={mode}
					options={options}
					submode={submode}
					placeholder={placeholder}
				/>
			) : (
				<Input
					mode={mode}
					name={name}
					id={id}
					type={type}
					submode={submode}
					isValid
					required
				/>
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
