import type { Moment } from "moment";

export type DatePickerProps = {
    label: string;
    value: Moment | null;
    onChange: (newValue: Moment | null) => void;
}