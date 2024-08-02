import { Layout } from "antd";
import { Navbar } from "../components/navbar";
const { Content, Footer } = Layout;

export const LandingPage: React.FC = () => {
  return (
    <Layout>
      <Content className="bg-[#fff]">
        <Navbar />
      </Content>
      <Footer style={{ textAlign: "center" }}>
        NGO Website ©{new Date().getFullYear()} Created by Rahul Ghimire
      </Footer>
    </Layout>
  );
};
