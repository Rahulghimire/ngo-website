import { ConfigProvider, theme } from "antd";
import { useResponsiveQuery } from "../utlis/getScreenSizes";

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
          fontSize: isBigScreen ? 18 : isDesktopOrLaptop ? 16 : 12,
        },
        components: {
          Layout: {
            padding: 40,
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};
