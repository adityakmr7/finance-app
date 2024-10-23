export interface Transaction {
  id: string;
  type: "send" | "receive";
  name: string;
  amount: string;
  time: string;
}

export interface CardData {
  currency: string;
  flag: string;
  balance: string;
  cardNumber: string;
  validThru?: string;
  cardType?: string;
  backgroundColor: string;
}
export interface HeaderProps {
  userName: string;
  avatarUrl: string;
  onNotificationPress: () => void;
}
