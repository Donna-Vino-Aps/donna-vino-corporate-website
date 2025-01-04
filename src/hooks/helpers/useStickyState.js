import { useState } from 'react';

export default function useStickyState(defaultValue, key) {
    const [value, setValue] = useState(() => {
      if (typeof window === 'undefined') {
        return defaultValue;
      }
      const localStorageValue = window.localStorage.getItem(key);
      return localStorageValue !== null ? JSON.parse(localStorageValue) : defaultValue;
    });
    const setValueInStorage = (newValue) => {
      if (typeof window === 'undefined') {
        return;
      }
        setValue(newValue);
        window.localStorage.setItem(key, JSON.stringify(newValue));
    }
    return [value, setValueInStorage];
}