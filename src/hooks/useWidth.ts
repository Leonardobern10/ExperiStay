import { useMediaQuery, type Breakpoint } from "@mui/material";

export default function useWidth(mediaQuery: number | Breakpoint): boolean {
  return useMediaQuery((theme) => theme.breakpoints.up(mediaQuery))
}
