import { useMediaQuery } from "react-responsive";

export const useResponsiveQuery = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1024px)",
  });
  const isBigScreen = useMediaQuery({ query: "(min-width: 1440px)" });

  return {
    isDesktopOrLaptop,
    isBigScreen,
  };
};
