import React, { createRef } from 'react';
import { Form } from 'components';
import { InputError } from 'shared/ui';
import { useForm, Controller } from 'react-hook-form';
import cn from 'classnames';
import {
	Typography,
	Checkbox,
	Button,
	LinkComponent,
	FormInput,
} from 'shared/ui';
import styles from './ConsultForm.module.scss';

const defaultValues = {
	telConsult: '',
	isuranceCase: '',
	personalData: false,
};

function ConsultForm() {
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
	const textareaRef = createRef(null);

	function handleFormSubmit(data) {
		console.log(data);
		reset();
	}
	return (
		<>
			<div className={styles.container}>
				<Typography variant={'h2'}>Заявка на консультацию</Typography>
				{/* <Typography variant={'body2'}>
					Если у вас возникли вопросы по страхованию, вы можете оставить заявку,
					и наши специалисты свяжутся с вами в течение 1 часа.
				</Typography> */}
			</div>

			<Form type="consult-form" onSubmit={handleSubmit(handleFormSubmit)}>
				<div className={cn(styles.box, styles.inputs)}>
					<FormInput
						inputId="nameConsult"
						textLabel="Имя"
						name="nameConsult"
						id="nameConsult"
						type="text"
						maxLength={256}
						register={register}
						errors={errors?.nameConsult}
						validation={{
							required: 'Поле обязательно к заполнению',
							minLength: {
								value: 2,
								message: 'Минимальная длина имени 2 символа',
							},
							maxLength: {
								value: 256,
								message: 'Имя не должно быть длинее 256 символов',
							},
							pattern: {
								value: /^[a-zA-Zа-яА-Я -]+(?:[ _-][a-zA-Zа-яА-Я]+)*$/,
								message: 'Имя не должно содержать специальные символы',
							},
						}}
					/>
					<FormInput
						inputId="surnameConsult"
						textLabel="Фамилия"
						name="surnameConsult"
						id="surnameConsult"
						type="text"
						maxLength={256}
						register={register}
						errors={errors?.surnameConsult}
						validation={{
							required: 'Поле обязательно к заполнению',
							minLength: {
								value: 2,
								message: 'Минимальная фамилии 2 символа',
							},
							maxLength: {
								value: 256,
								message: 'Фамилия не должна быть длинее 256 символов',
							},
						}}
					/>
					<Controller
						render={({ field }) => (
							<FormInput
								phone
								textLabel="Номер телефона"
								id="telConsult"
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
					<Controller
						render={({ field }) => (
							<FormInput
								textarea
								textLabel="Ситуация страхования"
								name="isuranceCase"
								id="isuranceCase"
								type="text"
								mode="consult-form"
								maxLength={500}
								errors={errors?.isuranceCase}
								ref={textareaRef}
								{...field}
							/>
						)}
						control={control}
						name="isuranceCase"
						rules={{
							required: 'Поле обязательно к заполнению',
							maxLength: {
								value: 500,
								message: 'Описание ситуации не должно превышать 500 символов',
							},
						}}
					/>
				</div>
				<div className={cn(styles.box, styles.info)}>
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
				</div>
				<div className={styles['button-wrapper']}>
					<Button
						children="Отправить заявку"
						type="submit"
						bgcolor="accent"
						mode="submit-form"
						disabled={!isValid}
					/>
				</div>
			</Form>
		</>
	);
}

export default ConsultForm;
