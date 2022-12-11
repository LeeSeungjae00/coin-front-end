import { Login, Logout, PersonAdd, Settings } from "@mui/icons-material";
import {
  Avatar,
  Divider,
  Fade,
  ListItemIcon,
  Menu,
  MenuItem,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { getInitials } from "../../lib/getInitials";
import { getUserName } from "../../lib/getUser";
import styles from "./header.module.scss";

export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img src="icon.jpg" className="App-icon" alt="logo" />
        <p className={styles.title}>Coin</p>
      </div>
      <menu className={styles.menu}>
        <Link to="/" className={styles.menuItem}>
          Main
        </Link>
        <Link to="/TradingList" className={styles.menuItem}>
          Trading List
        </Link>
        {getUserName() && (
          <Link to="/Admin" className={styles.menuItem}>
            Admin Page
          </Link>
        )}
        {/* <Link to="/simulator" className={styles.menuItem}>
          Simulator
        </Link> */}
      </menu>
      <div className={styles.navButton}>
        {getUserName() ? (
          <div>
            <div onClick={handleClick} className={styles.userLogo}>
              {getInitials(getUserName())}
            </div>
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              TransitionComponent={Fade}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&:before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem>
                <Avatar /> My account
              </MenuItem>
              <Divider />
              <MenuItem>
                <ListItemIcon>
                  <Settings fontSize="small" />
                </ListItemIcon>
                Settings
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </div>
        ) : (
          <>
            <Link to="/login" className={`${styles.button} ${styles.basic}`}>
              login
            </Link>
            <Link
              to="/contect"
              className={`${styles.button} ${styles.colorful}`}
            >
              Contect
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
