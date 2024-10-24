import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackPramsList } from "../../navigations/types";

export type OnboardingScreenNavigationProp = StackNavigationProp<
  RootStackPramsList,
  "Onboarding"
>;

export interface Props {
  navigation: OnboardingScreenNavigationProp;
}
