import {useState, useEffect} from 'react';

export default function ThemePersistedState(key, initialState) {
  const [theme, setTheme] = useState(() => {
    const storageValue = localStorage.getItem(key)

    if(storageValue){
      return JSON.parse(storageValue)
    }else{
      return initialState
    }
  })
  
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(theme))
  }, [key, theme])

 return [theme, setTheme]
}
