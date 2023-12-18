import { Form, Section } from 'components';
import cn from 'classnames';
import {
	Typography,
	Checkbox,
	Button,
	LinkComponent,
	FormInput,
} from 'shared/ui';
import styles from './ConsultForm.module.scss';
import { DEFAULT } from 'shared/utils/constants/modes.js';

function ConsultForm() {
	return (
		<Section>
			<div className={styles.container}>
				<Typography variant={'h2'}>Заявка на консультацию</Typography>
				<Typography variant={'body2'}>
					Если у вас возникли вопросы по страхованию, вы можете оставить заявку,
					и наши специалисты свяжутся с вами в течение 1 часа.
				</Typography>
			</div>

			<Form type="consult-form">
				<div className={cn(styles.box, styles.inputs)}>
					<FormInput
						inputId="nameConsult"
						textLabel="Имя*"
						name="nameConsult"
						id="nameConsult"
						type="text"
						isValid
						required
					/>
					<FormInput
						inputId="surnameConsult"
						textLabel="Фамилия*"
						name="surnameConsult"
						id="surnameConsult"
						type="text"
						isValid
						required
					/>
					<FormInput
						phone
						inputId="telConsult"
						textLabel="Номер телефона*"
						name="telConsult"
						id="telConsult"
						isValid
						required
					/>
					<FormInput
						textarea
						inputId="isuranceCase"
						textLabel="Ситуация страхования*"
						name="isuranceCase"
						id="isuranceCase"
						type="text"
						mode="consult-form"
						isValid
						required
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
							mode={DEFAULT}
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
