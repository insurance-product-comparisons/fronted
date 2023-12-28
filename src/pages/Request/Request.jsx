import { Section, SuccessfulRequest, UnusualCaseForm } from 'components';
import { useState } from 'react';
import styles from './Request.module.scss';

function Request() {
	const [formSubmitted, setFormSubmitted] = useState(false);

	function handleFormSubmit() {
		setFormSubmitted(true);
	}

	return (
		<main>
			<Section>
				<div
					className={`${styles.formWrapper} ${
						formSubmitted ? styles.invisibly : ''
					}`}
				>
					{!formSubmitted && <UnusualCaseForm onSubmit={handleFormSubmit} />}
				</div>
				<div
					className={`${styles.requestWrapper} ${
						formSubmitted ? styles.visibly : styles.invisibly
					}`}
				>
					{formSubmitted && (
						<SuccessfulRequest
							title="Заявка на ситуацию, которой нет в каталоге"
							type="unusual-case"
							text="Подтверждение придет вам на электронную почту."
						/>
					)}
				</div>
			</Section>
		</main>
	);
}

export default Request;
