import Form from 'components/Form';
import { Button, FormInput } from 'shared/ui';
import styles from './DmcForm.module.scss';

function DmcForm() {
	return (
		<div className={styles.root}>
			<Form type="dmc-form">
				<FormInput textLabel="Возраст" submode="input-dms" />
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
		</div>
	);
}

export default DmcForm;
