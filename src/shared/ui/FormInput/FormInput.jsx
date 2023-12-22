import {
	Input,
	InputError,
	Label,
	PhoneInput,
	TextArea,
	SelectComponent,
} from 'shared/ui';
import { forwardRef } from 'react';
import styles from './FormInput.module.scss';

const FormInput = forwardRef(function FormInput(
	{
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
		register,
		validation,
		errors,
		getInputRef,
		...rest
	},
	ref
) {
	return (
		<div className={styles.box}>
			<Label
				labelMode={labelMode}
				inputId={inputId}
				textLabel={textLabel}
				htmlFor={id}
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
					ref={ref}
					{...rest}
				/>
			) : textarea ? (
				<TextArea name={name} id={id} mode={mode} ref={ref} {...rest} />
			) : select ? (
				<SelectComponent
					mode={mode}
					options={options}
					submode={submode}
					placeholder={placeholder}
					{...register(name, validation)}
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
					register={register}
					errors={errors}
				/>
			)}
			<InputError errorMode={errorMode} errorMessage={errorMessage} isVisible>
				{errors && errors.message}
			</InputError>
		</div>
	);
});

export default FormInput;
