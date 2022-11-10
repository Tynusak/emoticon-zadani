import React, { createContext, useContext } from 'react';

export const SettingContext = createContext();
export const useSettings = () => useContext(SettingContext);
