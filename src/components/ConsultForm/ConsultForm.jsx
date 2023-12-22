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
						isValid
						required
						register={register}
						errors={errors?.nameConsult}
					/>
					<FormInput
						inputId="surnameConsult"
						textLabel="Фамилия*"
						name="surnameConsult"
						id="surnameConsult"
						type="text"
						isValid
						required
						register={register}
						errors={errors?.surnameConsult}
					/>
					<Controller
						render={({ field }) => (
							<FormInput
								phone
								textLabel="Номер телефона*"
								id="telConsult"
								isValid
								required
								ref={inputRef}
								{...field}
							/>
						)}
						control={control}
						name="telConsult"
					/>
					<Controller
						render={({ field }) => (
							<FormInput
								textarea
								inputId="isuranceCase"
								textLabel="Ситуация страхования*"
								name="isuranceCase"
								id="isuranceCase"
								type="text"
								mode="consult-form"
								required
								ref={textareaRef}
								{...field}
							/>
						)}
						control={control}
						name="isuranceCase"
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
