import type { SelectItemType } from './SelectItemType';

export type InputSelectProps = {
    value: string | null;
    onChange: (value: string) => void;
    label: string;
    allItems: SelectItemType[];
    fullWidth?: boolean;
};
