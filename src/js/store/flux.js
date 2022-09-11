const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			language: "spanish"
		},
		actions: {
			// Use getActions to call a function within a fuction
			changeLanguage: (newLanguage) => {
				const store = getStore()
				setStore({
					...store,
					language: newLanguage
				})
			}
		}
	};
};

export default getState;
