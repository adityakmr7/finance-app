import { useContext } from "react";
import { TransferContext } from "../context/TransferContext";

export const useTransfer = () => {
  const context = useContext(TransferContext);
  if (undefined === context) {
    throw new Error("useTransfer must be used within a TransferProvider");
  }
  return context;
};
