interface TransactionItem {
  id: string;
  type: "send" | "receive";
  name: string;
  amount: string;
  time: string;
}
export const transactions: TransactionItem[] = [
  {
    id: "1",
    type: "send",
    name: "Transfer to Firmansyah A.",
    amount: "- $20",
    time: "04:03 PM",
  },
  {
    id: "2",
    type: "receive",
    name: "Receive from Adam S.",
    amount: "+ $1,300",
    time: "02:15 PM",
  },
  {
    id: "3",
    type: "send",
    name: "Transfer to John D.",
    amount: "- $20",
    time: "01:45 PM",
  },
  {
    id: "4",
    type: "send",
    name: "Transfer to John D.",
    amount: "- $20",
    time: "01:45 PM",
  },
  {
    id: "5",
    type: "send",
    name: "Transfer to John D.",
    amount: "- $20",
    time: "01:45 PM",
  },
];
