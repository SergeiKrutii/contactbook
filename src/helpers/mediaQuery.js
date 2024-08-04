import { useMediaQuery } from "@mui/material";

export const useMatchMedia = () => {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 1000px)");
  const isDesktop = useMediaQuery("(min-width: 1001px)");

  return { isMobile, isDesktop, isTablet };
};
