import { styled } from "@mui/material";
import { DatePicker, type DatePickerProps } from "@mui/x-date-pickers";

const DatePickerUI = styled(DatePicker)<DatePickerProps>(({ theme }) => ({
    //backgroundColor: `${theme.palette.primary.main}`,
    color: `${theme.palette.primary.main}`,
    borderRadius: `${theme.shape.borderRadius}`,
    paddingX: `${theme.spacing(5)}`,
    minWidth: '15rem',
    maxWidth: 'fit-content',
    "& .MuiInputBase-root": {
        borderRadius: `${theme.shape.borderRadius}`,
        backgroundColor: "#acaf02ff",
    },
    "& .MuiInputLabel-root": {
        color: `${theme.palette.primary.main}`,
    },
    "& .MuiOutlinedInput-notchedOutline": {
        borderColor: `${theme.palette.primary.main}`,
    },
    "& .MuiDatePickerToolbar-root": {
    }

}))

export default DatePickerUI;