import Form from 'components/Form';
import Section from 'components/Section';
import {
	Button,
	Checkbox,
	FormInput,
	LinkComponent,
	RadioBtn,
	Typography,
} from 'shared/ui';
import styles from './UnusualCaseForm.module.scss';
import cn from 'classnames';

function UnusualCaseForm() {
	return (
		<Section>
			<div className={cn(styles.box, styles.text)}>
				<Typography
					variant="h2"
					color="black"
					children="Заявка на ситуацию, которой нет в каталоге"
				/>
			</div>

			<Form type="unusual-case-form">
				<FormInput
					textLabel="Фамилия, имя, отчество"
					inputId="user-data"
					name="user-data"
					id="user-data"
					type="text"
					submode="input-unusual-case-wide"
				/>
				<FormInput
					phone
					textLabel="Номер телефона"
					inputId="user-tel"
					name="user-tel"
					id="user-tel"
					submode="input-unusual-case-short"
				/>
				<FormInput
					textLabel="E-mail"
					inputId="user-email"
					name="user-email"
					id="user-email"
					type="email"
					submode="input-unusual-case-short"
				/>
				<div className={cn(styles.box, styles.input)}>
					<Typography
						variant="body2"
						color="black"
						children="Для кого страховка"
					/>
					<div className={cn(styles.box, styles.radio)}>
						<RadioBtn
							checked
							label="Страховка для себя"
							id="field-me"
							name="field-me"
							value="for-me"
							typoVariant="body2"
						/>
						<RadioBtn
							label="Страховка в подарок"
							id="field-someone"
							name="field-someone"
							value="for-someone"
							typoVariant="body2"
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
				/>
				<div className={cn(styles.box, styles.checkbox)}>
					<Checkbox
						id="personalData"
						name="personalData"
						label="Я согласен на обработку&nbsp;"
					/>
					<LinkComponent link="#" text="персональных данных" mode="bold" />
				</div>
				<Button
					color="black"
					children="Отправить заявку"
					type="submit"
					bgcolor="accent"
					mode="submit-form"
					disabled
				/>
			</Form>
		</Section>
	);
}

export default UnusualCaseForm;
