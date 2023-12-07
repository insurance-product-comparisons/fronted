import React from 'react';

function Button({ type, children }) {
	return (
		<button 
			type={type} 
			className=''
		>
			{children}
		</button>
	);
}

export default Button;
