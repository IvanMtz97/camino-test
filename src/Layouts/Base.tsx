import { Link } from "react-router-dom";
import "../styles/Base.css";

interface BaseLayoutProps {
  children: React.ReactElement;
}

function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <div className="base-layout-container">
      <div className="base-layout-header">
        <Link to="/">
          <img
            className="base-layout-header-img"
            alt="header"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png"
          />
        </Link>
      </div>
      <div className="base-layout-content">
        {children}
      </div>
    </div>
  );
}

export default BaseLayout;
