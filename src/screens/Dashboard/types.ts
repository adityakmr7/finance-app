import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackPramsList } from "../../navigations/types";

export interface Transaction {
  id: string;
  type: "send" | "receive";
  name: string;
  amount: string;
  time: string;
}

export interface HeaderProps {
  userName: string;
  avatarUrl: string;
  onNotificationPress: () => void;
}

type DashboardScreenNavigationProp = StackNavigationProp<
  RootStackPramsList,
  "Dashboard"
>;

export interface DashboardProps {
  navigation: DashboardScreenNavigationProp;
}
