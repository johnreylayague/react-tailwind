const saveToLocalStorage = (key, value) => {
    try {
      const serializedValue = JSON.stringify(value);
      localStorage.setItem(key, serializedValue);
    } catch (error) {
      console.error("Error saving to localStorage", error);
    }
  };
  
  const retrieveFromLocalStorage = (key) => {
    try {
      const serializedValue = localStorage.getItem(key);
      if (serializedValue === null) {
        return undefined;
      }
      return JSON.parse(serializedValue);
    } catch (error) {
      console.error("Error retrieving from localStorage", error);
      return undefined;
    }
  };
  
  const removeFromLocalStorage = (key) => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error("Error removing from localStorage", error);
    }
  };
  
  export { saveToLocalStorage, retrieveFromLocalStorage, removeFromLocalStorage };
  