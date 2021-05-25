export interface MenuProps {
  label: string;
  items: {
    label: string;
    onClick: () => void;
  }[];
}
