import Form from 'components/Form';
import cn from 'classnames';
import {
	Input,
	TextArea,
	Typography,
	Checkbox,
	Label,
	Button,
	LinkComponent,
} from 'shared/ui';
import styles from './ConsultForm.module.scss';
import PhoneInput from 'shared/ui/PhoneInput/PhoneInput';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';

function ConsultForm() {
	const innerRef = useRef(null);
	const { register, handleSubmit } = useForm();
	const onSubmit = (data) => console.log(data);

	return (
		<Form type="consult-form" onSubmit={onSubmit} handleSubmit={handleSubmit}>
			<div className={cn(styles.box, styles.inputs)}>
				<div className={cn(styles.box, styles.input)}>
					<Label mode="default" inputId="nameConsult" text="Имя*" />
					<Input
						{...register('nameConsult')}
						name="nameConsult"
						id="nameConsult"
						type="text"
						mode="default"
						isValid={true}
						ref={innerRef}
						required={true}
					/>
				</div>
				<div className={cn(styles.box, styles.input)}>
					<Label mode="default" inputId="surnameConsult" text="Фамилия*" />
					<Input
						{...register('surnameConsult')}
						name="surnameConsult"
						type="text"
						id="surnameConsult"
						mode="default"
						isValid={true}
						ref={innerRef}
						required={true}
					/>
				</div>
				<div className={cn(styles.box, styles.input)}>
					<Label mode="default" inputId="telConsult" text="Номер телефона*" />
					<PhoneInput
						{...register('telConsult')}
						mode="default"
						isValid={true}
						ref={innerRef}
						name="telConsult"
						id="telConsult"
					/>
				</div>
				<div className={cn(styles.box, styles.input)}>
					<Label
						mode="default"
						inputId="isuranceCase"
						text="Ситуация страхования*"
					/>
					<TextArea
						{...register('isuranceCase')}
						name="isuranceCase"
						type="text"
						id="isuranceCase"
						mode="consult-form"
						ref={innerRef}
						required={true}
					/>
				</div>
			</div>
			<div className={cn(styles.box, styles.info)}>
				<Typography
					variant="body2"
					children="* — обязательные поля для заполнения"
				/>
				<div className={cn(styles.box, styles.checkbox)}>
					<Checkbox
						{...register('personalData')}
						id="personalData"
						name="personalData"
						mode="default"
						typoVariant=""
						typoColor=""
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
	);
}

export default ConsultForm;
