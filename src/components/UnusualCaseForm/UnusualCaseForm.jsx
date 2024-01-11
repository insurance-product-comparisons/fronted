import Form from 'components/Form';
import {
	Button,
	Checkbox,
	FormInput,
	InputError,
	LinkComponent,
	RadioBtn,
	Typography,
} from 'shared/ui';
import cn from 'classnames';
import { Controller, useForm } from 'react-hook-form';
import { createRef } from 'react';
import styles from './UnusualCaseForm.module.scss';

const defaultValues = {
	userData: '',
	telConsult: '',
	userEmail: '',
	isuransecase: '',
	personalData: false,
	forWhom: 'for-me',
};

function UnusualCaseForm({ onSubmit }) {
	const {
		register,
		handleSubmit,
		control,
		reset,
		formState: { errors, isValid },
	} = useForm({
		mode: 'onChange',
		defaultValues,
	});

	const inputRef = createRef(null);
	const textRef = createRef(null);

	function handleFormSubmit(data) {
		console.log(data);
		reset();

		if (onSubmit) {
			onSubmit(data);
		}
	}

	return (
		<div className={styles.wrapper}>
			<div className={cn(styles.box, styles.text)}>
				<Typography
					variant="h2"
					color="black"
					children="Заявка на ситуацию, которой нет в каталоге"
				/>
			</div>

			<Form type="unusual-case-form" onSubmit={handleSubmit(handleFormSubmit)}>
				<FormInput
					textLabel="Фамилия, имя, отчество"
					inputId="userData"
					name="userData"
					id="userData"
					type="text"
					maxLength={256}
					register={register}
					submode="input-unusual-case-wide"
					errors={errors?.userData}
					validation={{
						required: 'Поле обязательно к заполнению',
						minLength: {
							value: 2,
							message: 'Минимальная длина ФИО 2 символа',
						},
						maxLength: {
							value: 256,
							message: 'ФИО не должно быть длинее 256 символов',
						},
						pattern: {
							value: /^[a-zA-Zа-яА-Я -]+(?:[ _-][a-zA-Zа-яА-Я]+)*$/,
							message: 'ФИО не должно содержать специальные символы',
						},
					}}
				/>

				<Controller
					render={({ field }) => (
						<FormInput
							phone
							textLabel="Номер телефона"
							inputId="telConsult"
							name="telConsult"
							id="telConsult"
							submode="input-unusual-case-short"
							errors={errors?.telConsult}
							ref={inputRef}
							{...field}
						/>
					)}
					control={control}
					name="telConsult"
					rules={{
						required: 'Поле обязательно к заполнению',
						pattern: {
							value: /^((8|\+7)[- ]?)?(\(?\d{3}\)?[- ]?)?[\d\- ]{7,10}$/,
							message: 'Введите корректный номер телефона',
						},
					}}
				/>
				<FormInput
					textLabel="E-mail"
					inputId="userEmail"
					name="userEmail"
					id="userEmail"
					type="email"
					submode="input-unusual-case-short"
					register={register}
					errors={errors?.userEmail}
					validation={{
						required: 'Поле обязательно к заполнению',
						pattern: {
							value: /^\S+@\S+\.\S+$/,
							message: 'Введите корректный адрес электронной почты',
						},
					}}
				/>

				<div className={cn(styles.box, styles.input)}>
					<Typography
						variant="body2"
						color="black"
						children="Для кого страховка"
					/>
					<div className={cn(styles.box, styles.radio)}>
						<RadioBtn
							label="Страховка для себя"
							id="field-me"
							name="forWhom"
							value="for-me"
							typoVariant="body2"
							{...register('forWhom')}
						/>
						<RadioBtn
							label="Страховка в подарок"
							id="field-someone"
							name="forWhom"
							value="for-someone"
							typoVariant="body2"
							{...register('forWhom')}
						/>
					</div>
				</div>

				<FormInput
					textLabel="Ситуация страхования"
					inputId="isuransecase"
					name="isuransecase"
					id="isuransecase"
					type="text"
					submode="input-unusual-case-wide"
					maxLength={256}
					errors={errors?.isuransecase}
					ref={textRef}
					register={register}
					validation={{
						required: 'Поле обязательно к заполнению',
						minLength: {
							value: 2,
							message: 'Минимальная длина ситуации 2 символа',
						},
						maxLength: {
							value: 256,
							message: 'Описание ситуации не должно быть длинее 256 символов',
						},
						pattern: {
							value: /^[a-zA-Zа-яА-Я -]+(?:[ _-][a-zA-Zа-яА-Я]+)*$/,
							message: 'Имя не должно содержать специальные символы',
						},
					}}
				/>

				<div>
					<div className={cn(styles.box, styles.checkbox)}>
						<Checkbox
							id="personalData"
							name="personalData"
							label="Я согласен на обработку&nbsp;"
							register={register}
							validation={{
								required: 'Поле обязательно к заполнению',
								value: true,
							}}
							typoVariant="body2"
							typoColor="black"
						/>

						<LinkComponent link="#" text="персональных данных" mode="bold" />
					</div>
					<InputError>
						{errors?.personalData && errors?.personalData.message}
					</InputError>
				</div>
				<Button
					color="black"
					children="Отправить заявку"
					type="submit"
					bgcolor="accent"
					mode="submit-form"
					disabled={!isValid}
				/>
			</Form>
		</div>
	);
}

export default UnusualCaseForm;
