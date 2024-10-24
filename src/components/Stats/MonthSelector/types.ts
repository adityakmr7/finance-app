export type Month = {
  label: string;
  value: string;
};

export interface MonthSelectorProps {
  onMonthSelect?: (month: Month) => void;
  initialMonth?: string;
}
