import React from 'react';

function Input({type, label = 'Input', name, placeholder, pattern, id}) {
	return (
		<div>
			<label className='' htmlFor={name}>{label}</label>
			<input
				type={type}
				name={name}
				placeholder={placeholder}
				className=''
				id={id}
				pattern={pattern}
				value=''
				>
			</input>
			<span className=''></span>
		</div>
	);
}

export default Input;
