import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the context type
interface HabitContextType {
  allHabitsDone: boolean;
  setAllHabitsDone: React.Dispatch<React.SetStateAction<boolean>>;
}

// Create the context with a default value
const HabitContext = createContext<HabitContextType | undefined>(undefined);

// Provider component
export const HabitProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [allHabitsDone, setAllHabitsDone] = useState(false);

  return (
    <HabitContext.Provider value={{ allHabitsDone, setAllHabitsDone }}>
      {children}
    </HabitContext.Provider>
  );
};

// Custom hook to use the context
export const useHabits = (): HabitContextType => {
  const context = useContext(HabitContext);
  if (!context) {
    throw new Error('useHabits must be used within a HabitProvider');
  }
  return context;
};