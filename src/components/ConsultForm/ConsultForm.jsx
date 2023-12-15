import { Form } from 'components';
import cn from 'classnames';
import {
	Input,
	TextArea,
	Typography,
	Checkbox,
	Label,
	Button,
	LinkComponent,
	PhoneInput,
} from 'shared/ui';
import styles from './ConsultForm.module.scss';

function ConsultForm() {
	return (
		<Form type="consult-form">
			<div className={cn(styles.box, styles.inputs)}>
				<div className={cn(styles.box, styles.input)}>
					<Label mode="default" inputId="nameConsult" text="Имя*" />
					<Input
						name="nameConsult"
						id="nameConsult"
						type="text"
						mode="default"
						isValid={true}
						required={true}
					/>
				</div>
				<div className={cn(styles.box, styles.input)}>
					<Label mode="default" inputId="surnameConsult" text="Фамилия*" />
					<Input
						name="surnameConsult"
						type="text"
						id="surnameConsult"
						mode="default"
						isValid={true}
						required={true}
					/>
				</div>
				<div className={cn(styles.box, styles.input)}>
					<Label mode="default" inputId="telConsult" text="Номер телефона*" />
					<PhoneInput
						mode="default"
						isValid={true}
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
						name="isuranceCase"
						type="text"
						id="isuranceCase"
						mode="consult-form"
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
