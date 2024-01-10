import Form from 'components/Form';
import { Button, FormInput } from 'shared/ui';
import { useForm } from 'react-hook-form';
import styles from './KaskoForm.module.scss';

function KaskoForm() {
	const {
		register,
		formState: { isValid },
	} = useForm({
		mode: 'onChange',
	});

	return (
		<div className={styles.wrapper}>
			<Form type="kasko-form">
				<div className={styles.flexInput}>
					<FormInput
						select
						textLabel="Марка автомобиля"
						submode="select-kasko-short"
						name="autoMark"
						id="autoMark"
					/>
					<FormInput
						select
						textLabel="Модель автомобиля"
						submode="select-kasko-short"
						name="autoModel"
						id="autoModel"
					/>
				</div>
				<FormInput
					select
					textLabel="Стаж вождения"
					submode="select-kasko"
					name="experience"
					id="experience"
				/>
				<FormInput
					textLabel="Год выпуска"
					mode="kasko"
					name="year"
					id="year"
					register={register}
				/>
				<div className={styles.btn}>
					<Button
						children="Рассчитать"
						type="submit"
						bgcolor="accent"
						mode="count"
						disabled={!isValid}
					/>
				</div>
			</Form>
		</div>
	);
}

export default KaskoForm;
