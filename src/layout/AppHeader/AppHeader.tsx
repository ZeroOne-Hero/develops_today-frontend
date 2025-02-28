import { useNavigate } from "react-router-dom";
import { Layout } from "antd";
import "./AppHeader.css";

const { Header } = Layout;

const AppHeader: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Header className="app-header">
      <div className="header-title" onClick={() => navigate("/")}>
        Recipe Explorer
      </div>
    </Header>
  );
};

export default AppHeader;
