import React from 'react';
import Input from "../Input";

function RadioBtn({label = 'radio', placeholder, id, name}) {
	return (
		<Input 
			type='radio'
			label={label}
			placeholder={placeholder}
			id={id}
			name={name}
		/>
	);
}

export default RadioBtn;
