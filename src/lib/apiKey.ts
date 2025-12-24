export const getApiKey = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('gemini_api_key');
  }
  return null;
};

export const setApiKey = (key: string) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('gemini_api_key', key);
  }
};

export const removeApiKey = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('gemini_api_key');
  }
};
