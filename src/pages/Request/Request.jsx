import { Section, SuccessfulRequest, UnusualCaseForm } from 'components';
import { useState } from 'react';

function Request() {
	const [formSubmitted, setFormSubmitted] = useState(false);

	function handleFormSubmit() {
		setFormSubmitted(true);
	}

	return (
		<main>
			<Section>
				{!formSubmitted ? (
					<UnusualCaseForm onSubmit={handleFormSubmit} />
				) : (
					<SuccessfulRequest
						title="Заявка на ситуацию, которой нет в каталоге"
						type="unusual-case"
						text="Подтверждение придет вам на электронную почту."
					/>
				)}
			</Section>
		</main>
	);
}

export default Request;
