const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			language: "es"
		},
		actions: {
			// Use getActions to call a function within a fuction
			newLanguage: () => {
				const store = getStore()
				if(store.language == "es"){
					setStore({ language: "en" })
				} else {
					setStore({ language: "es" })
				}
				return store.language
			}
		}
	};
};

export default getState;
