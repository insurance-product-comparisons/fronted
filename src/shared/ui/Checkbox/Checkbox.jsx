import React from 'react';
import Input from "../Input";

function Checkbox({label = 'Checkbox', placeholder = 'Check', id, name}) {
	return (
		<Input 
			type='checkbox'
			label={label}
			placeholder={placeholder}
			id={id}
			name={name}
		/>
	);
}

export default Checkbox;
