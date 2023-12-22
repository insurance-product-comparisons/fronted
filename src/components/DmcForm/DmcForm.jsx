import Section from 'components/Section';
import Form from 'components/Form';
import { Button, FormInput } from 'shared/ui';
import styles from './DmcForm.module.scss';

function DmcForm() {
	return (
		<Section>
			<Form type="dmc-form">
				<FormInput select textLabel="Возраст" submode="select-dmc-short" />
				<FormInput
					select
					textLabel="Срок страховки"
					submode="select-dmc-short"
				/>
				<FormInput select textLabel="Регион" submode="select-dmc" />
				<FormInput select textLabel="Город/село" submode="select-dmc" />
				<div className={styles.btn}>
					<Button
						children="Рассчитать"
						type="submit"
						bgcolor="accent"
						mode="count"
						disabled
					/>
				</div>
			</Form>
		</Section>
	);
}

export default DmcForm;
