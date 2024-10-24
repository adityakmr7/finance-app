// context/TransferContext.tsx
import React, { createContext, useContext, useReducer, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Transfer,
  TransferAction,
  TransferContextType,
  TransferState,
} from "./types";

export const TransferContext = createContext<TransferContextType | undefined>(
  undefined
);

const transferReducer = (
  state: TransferState,
  action: TransferAction
): TransferState => {
  switch (action.type) {
    case "ADD_TRANSFER":
      return {
        ...state,
        transfers: [action.payload, ...state.transfers],
      };
    case "SET_TRANSFERS":
      return {
        ...state,
        transfers: action.payload,
      };
    default:
      return state;
  }
};

const STORAGE_KEY = "@transfers";

export const TransferProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(transferReducer, { transfers: [] });

  useEffect(() => {
    // Load saved transfers on mount
    const loadTransfers = async () => {
      try {
        const savedTransfers = await AsyncStorage.getItem(STORAGE_KEY);
        if (savedTransfers) {
          dispatch({
            type: "SET_TRANSFERS",
            payload: JSON.parse(savedTransfers),
          });
        }
      } catch (error) {
        console.error("Error loading transfers:", error);
      }
    };
    loadTransfers();
  }, []);

  useEffect(() => {
    // Save transfers when state changes
    const saveTransfers = async () => {
      try {
        await AsyncStorage.setItem(
          STORAGE_KEY,
          JSON.stringify(state.transfers)
        );
      } catch (error) {
        console.error("Error saving transfers:", error);
      }
    };
    saveTransfers();
  }, [state.transfers]);

  const addTransfer = (transfer: Omit<Transfer, "id" | "timestamp">) => {
    const newTransfer: Transfer = {
      ...transfer,
      id: Math.random().toString(36).substr(2, 9),
      timestamp: Date.now(),
    };
    dispatch({ type: "ADD_TRANSFER", payload: newTransfer });
  };

  return (
    <TransferContext.Provider value={{ state, addTransfer }}>
      {children}
    </TransferContext.Provider>
  );
};
