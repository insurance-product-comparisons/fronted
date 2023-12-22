import React, { createRef } from 'react';
import { Form, Section } from 'components';
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
};

function ConsultForm() {
	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
	} = useForm({
		mode: 'onChange',
		defaultValues,
	});

	const inputRef = createRef(null);
	const textareaRef = createRef(null);

	function handleFormSubmit(data) {
		console.log(data);
	}
	return (
		<Section>
			<div className={styles.container}>
				<Typography variant={'h2'}>Заявка на консультацию</Typography>
				<Typography variant={'body2'}>
					Если у вас возникли вопросы по страхованию, вы можете оставить заявку,
					и наши специалисты свяжутся с вами в течение 1 часа.
				</Typography>
			</div>

			<Form type="consult-form" onSubmit={handleSubmit(handleFormSubmit)}>
				<div className={cn(styles.box, styles.inputs)}>
					<FormInput
						inputId="nameConsult"
						textLabel="Имя*"
						name="nameConsult"
						id="nameConsult"
						type="text"
						register={register}
						errors={errors?.nameConsult}
						validation={{
							required: 'Поле обязательно к заполнению',
							minLength: {
								value: 2,
								message: 'Минимальная длина',
							},
							maxLength: {
								value: 10,
								message: 'Максимальная длина',
							},
						}}
					/>
					<FormInput
						inputId="surnameConsult"
						textLabel="Фамилия*"
						name="surnameConsult"
						id="surnameConsult"
						type="text"
						register={register}
						errors={errors?.surnameConsult}
						validation={{
							required: 'Поле обязательно к заполнению',
							minLength: {
								value: 2,
								message: 'Минимальная длина',
							},
							maxLength: {
								value: 10,
								message: 'Максимальная длина',
							},
						}}
					/>
					<Controller
						render={({ field }) => (
							<FormInput
								phone
								textLabel="Номер телефона*"
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
								message: 'Введите номер телефона',
							},
						}}
					/>
					<Controller
						render={({ field }) => (
							<FormInput
								textarea
								textLabel="Ситуация страхования*"
								name="isuranceCase"
								id="isuranceCase"
								type="text"
								mode="consult-form"
								errors={errors?.isuranceCase}
								ref={textareaRef}
								{...field}
							/>
						)}
						control={control}
						name="isuranceCase"
						rules={{ required: 'Поле обязательно к заполнению' }}
					/>
				</div>
				<div className={cn(styles.box, styles.info)}>
					<Typography
						variant="body2"
						children="* — обязательные поля для заполнения"
					/>
					<div className={cn(styles.box, styles.checkbox)}>
						<Checkbox
							id="personalData"
							name="personalData"
							label="Я согласен на обработку&nbsp;"
						/>
						<LinkComponent link="#" text="персональных данных" mode="bold" />
					</div>
				</div>
				<Button
					children="Отправить заявку"
					type="submit"
					bgcolor="accent"
					mode="submit-form"
				/>
			</Form>
		</Section>
	);
}

export default ConsultForm;
