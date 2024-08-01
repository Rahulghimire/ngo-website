import { Layout } from "antd";
import { Navbar } from "./components/navbar";
const { Content, Footer } = Layout;

function App() {
  return (
    <Layout>
      <Content>
        <Navbar />
      </Content>
      <Footer style={{ textAlign: "center" }}>
        NGO Website ©{new Date().getFullYear()} Created by Rahul Ghimire
      </Footer>
    </Layout>
  );
}

export default App;
