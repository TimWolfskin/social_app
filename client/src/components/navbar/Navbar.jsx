import "./navbar.scss";
import Home from "@mui/icons-material/Home";
import ModeNightOutlinedIcon from "@mui/icons-material/ModeNightOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import Person4OutlinedIcon from "@mui/icons-material/Person4Outlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";
import GridViewOutlined from "@mui/icons-material/GridViewOutlined";
import MailOutlined from "@mui/icons-material/MailOutlined";
import NotificationsOutlined from "@mui/icons-material/NotificationsOutlined";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";

const Navbar = () => {
  const { toggle, darkMode } = useContext(DarkModeContext);
  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>Timsocial</span>
        </Link>
        <Home />
        {darkMode ? (
          <WbSunnyOutlinedIcon onClick={toggle} />
        ) : (
          <ModeNightOutlinedIcon onClick={toggle} />
        )}
        <GridViewOutlined />
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="right">
        <Person4OutlinedIcon />
        <MailOutlined />
        <NotificationsOutlined />
        <div className="user">
          <img
            src="https://media.wnyc.org/i/raw/photologue/photos/rango_cu.jpg"
            alt=""
          />
          <span>John Doe</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
