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
import { AuthContext } from "../../context/authContext";

const Navbar = () => {
  const { toggle, darkMode } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);
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
          <img src={currentUser.profilePic} alt="" />
          <span>{currentUser.name}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
