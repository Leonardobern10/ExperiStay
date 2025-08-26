import { useMediaQuery, type Breakpoint } from "@mui/material";

export default function useWidth(mediaQuery: Breakpoint): boolean {
  return useMediaQuery((theme) => theme.breakpoints.up(mediaQuery))
}
