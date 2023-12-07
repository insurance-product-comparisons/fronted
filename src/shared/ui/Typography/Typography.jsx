import React from 'react';
import cn from 'classnames'

const variantsMapping = {
	h1: "h1",
	h2: "h2",
	h3: "h3",
	body1: "p",
	body2: "p",
	body3: "p",
  };

function Typography({variant, color, children, ...props}) {
	const Component = variant ? variantsMapping[variant] : "p";
	return (
		<Component
		className={cn({
			[`typography--variant-${variant}`]: variant,
			[`typography--color-${color}`]: color,
		  })}
		  {...props}
		>
			{children}
		</Component>
	);
}

export default Typography;
