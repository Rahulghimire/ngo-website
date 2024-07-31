import { ConfigProvider, theme } from "antd";
import { useResponsiveQuery } from "../utlis/getResponsive";

interface Props {
  children?: React.ReactNode;
}
export const AppThemeProvider: React.FC<Props> = (props) => {
  const { children } = props;
  const { isDesktopOrLaptop, isBigScreen } = useResponsiveQuery();

  return (
    <ConfigProvider
      theme={{
        algorithm: theme.defaultAlgorithm,
        token: {
          fontFamily: "Helvetica Neue",
          fontSize: isBigScreen ? 16 : isDesktopOrLaptop ? 14 : 12,
        },
        components: {
          Layout: {},
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};
