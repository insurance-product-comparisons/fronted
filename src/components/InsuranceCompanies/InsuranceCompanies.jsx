import React from 'react';
import { Typography, Button } from 'shared/ui';
import { useNavigate } from 'react-router-dom';
import styles from './InsuranceCompanies.module.scss';

function InsuranceCompanies({ nameButton, modeButton, data }) {
	const navigate = useNavigate();

	function handleCardClick() {
		navigate(data.route);
	}

	return (
		<>
			<div className={styles.container}>
				<Typography variant="h2" color="black">
					{data.title}
				</Typography>
				<div className={styles['container-description']}>
					<Typography variant="body2" color="black">
						{data.description}
					</Typography>
				</div>
				<Button
					type="button"
					bgcolor="ghost"
					mode={modeButton}
					onClick={handleCardClick}
				>
					{nameButton}
				</Button>
			</div>
		</>
	);
}

export default InsuranceCompanies;
