export const setItem = (key, value) => {
	localStorage.setItem(key, JSON.stringify(value));
};

export const getItem = (key) => {
	return localStorage.getItem(key)
		? JSON.parse(localStorage.getItem(key))
		: null;
};

export const deleteItem = (key) => {
	localStorage.removeItem(key);
};
