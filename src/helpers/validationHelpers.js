export const validateAndSetError = (condition, setError) => {
    if (condition) {
      setError(true);
      return true;
    }
    return false;
  };
  