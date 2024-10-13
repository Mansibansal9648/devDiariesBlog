import { configureStore } from '@reduxjs/toolkit'
import userSlice from './slices/userSlice'

// Function to save state to local storage
const saveStateToLocalStorage = (state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('store', serializedState);
    } catch (e) {
      console.error("Could not save state", e);
    }
  };
  
  // Function to load state from local storage
  const loadStateFromLocalStorage = () => {
    try {
      const serializedState = localStorage.getItem('store');
      if (serializedState === null) return undefined;
      return JSON.parse(serializedState);
    } catch (e) {
      console.error("Could not load state", e);
      return undefined;
    }
  };
  
  // Load persisted state
  const persistedState = loadStateFromLocalStorage();

const store = configureStore({
    reducer: {
        user: userSlice,
    },
    preloadedState:persistedState
})

// Subscribe to store updates
store.subscribe(() => {
    saveStateToLocalStorage(store.getState());
  });

export default store
