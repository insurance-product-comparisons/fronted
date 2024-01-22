import { Form } from 'components';
import { Button, LinkComponent, FormInput } from 'shared/ui';
import { RESULT_DEFAULT } from 'shared/store/resultDefault';

import styles from './OsagoForm.module.scss';

function OsagoForm({ onSearch }) {
	function handleSubmit(e) {
		e.preventDefault();
		onSearch(RESULT_DEFAULT);
	}

	return (
		<div className={styles.wrapper}>
			<Form type="osago-form" onSubmit={handleSubmit}>
				<fieldset className={styles.fieldset}>
					<FormInput select textLabel="Тип ТС" submode="select-osago" />
					<FormInput
						select
						textLabel="Мощность двигателя"
						submode="select-osago"
					/>
				</fieldset>
				<fieldset className={styles.fieldset}>
					<FormInput select textLabel="Регион" submode="select-osago" />
					<FormInput select textLabel="Район" submode="select-osago" />
				</fieldset>
				<fieldset className={styles.fieldset}>
					<FormInput
						select
						textLabel="Число водителей"
						submode="select-osago"
					/>
					<FormInput
						select
						textLabel="Возраст водителя"
						submode="select-osago"
					/>
					<FormInput select textLabel="Стаж водителя" submode="select-osago" />
					<FormInput
						select
						textLabel="Коэффициент «Бонус-Малус»"
						submode="select-osago"
					/>
				</fieldset>
				<div className={styles[`container-btn`]}>
					<LinkComponent
						link="https://autoins.ru/osago/raschet-stoimosti-osago/proverit-kbm/"
						text="Проверить КБМ"
						mode="check-kbm-in-form"
					/>
					<Button
						children="Рассчитать"
						type="submit"
						bgcolor="accent"
						mode="count"
					/>
				</div>
			</Form>
		</div>
	);
}

export default OsagoForm;
