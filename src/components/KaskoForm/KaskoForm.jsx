import Section from 'components/Section';
import Form from 'components/Form';
import { Button, FormInput } from 'shared/ui';
import styles from './KaskoFrom.module.scss';

function KaskoForm() {
	return (
		<Section>
			<Form type="kasko-form">
				<div className={styles.flexInput}>
					<FormInput
						select
						textLabel="Марка автомобиля"
						submode="select-kasko-short"
					/>
					<FormInput
						select
						textLabel="Модель автомобиля"
						submode="select-kasko-short"
					/>
				</div>
				<FormInput select textLabel="Стаж вождения" submode="select-kasko" />
				<FormInput textLabel="Госномер" mode="kasko" />
				<FormInput textLabel="Год выпуска" mode="kasko" />
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

export default KaskoForm;
