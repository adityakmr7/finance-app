export interface Transfer {
  id: string;
  destination: string;
  amount: string;
  card: string;
  timestamp: number;
  type: "send" | "receive";
}

export interface TransferState {
  transfers: Transfer[];
}

export type TransferAction =
  | { type: "ADD_TRANSFER"; payload: Transfer }
  | { type: "SET_TRANSFERS"; payload: Transfer[] };

export interface TransferContextType {
  state: TransferState;
  addTransfer: (transfer: Omit<Transfer, "id" | "timestamp">) => void;
}
