import React, { useState, useEffect } from 'react';
import { Box, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useNavigate } from 'react-router-dom';
import ClearIcon from '@mui/icons-material/Clear';
import GridViewIcon from "@mui/icons-material/GridView";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CopyAllIcon from "@mui/icons-material/CopyAll";
import LockIcon from "@mui/icons-material/Lock";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsIcon from "@mui/icons-material/Settings";
import "./style.css"

// SidebarData: you can add or remove data items as needed
const SidebarData = [
  {
    title: "Dashboard",
    path: "/",
    icon: <GridViewIcon />,
    iconClosed: <KeyboardArrowRightIcon />,
    iconOpened: <KeyboardArrowDownIcon />,
    subNav: [{ title: "Project Management", path: "/project-management/" }],
  },
  {
    title: "Projects",
    path: "/projects/",
    icon: <CopyAllIcon />,
    iconClosed: <KeyboardArrowRightIcon />,
    iconOpened: <KeyboardArrowDownIcon />,
    subNav: [
      { title: "Projects", path: "/projects/" },
      { title: "Project Create", path: "/projects/project-create/" },
      { title: "Clients", path: "/projects/clients/" },
      { title: "Team", path: "/projects/team/" },
      { title: "Task", path: "/projects/task/" },
      { title: "User", path: "/projects/user/" },
      { title: "Kanban board", path: "/projects/kanban-board/" },
    ],
  },
  {
    title: "Authentication",
    path: "/authentication/sign-in/",
    icon: <LockIcon />,
    iconClosed: <KeyboardArrowRightIcon />,
    iconOpened: <KeyboardArrowDownIcon />,
    subNav: [
      { title: "Sign Up", path: "/authentication/sign-up/" },
      { title: "Forgot Password", path: "/authentication/forgot-password/" },
      { title: "Lock Screen", path: "/authentication/lock-screen/" },
      { title: "Confirm Mail", path: "/authentication/confirm-mail/" },
      { title: "Logout", path: "/authentication/logout/" },
    ],
  },
  {
    title: "Notification",
    path: "/notification/",
    icon: <NotificationsNoneIcon />,
  },
  {
    title: "Settings",
    path: "/settings/account/",
    icon: <SettingsIcon />,
    iconClosed: <KeyboardArrowRightIcon />,
    iconOpened: <KeyboardArrowDownIcon />,
    subNav: [
      { title: "Account", path: "/settings/account/" },
      { title: "Security", path: "/settings/security/" },
      { title: "Privacy Policy", path: "/settings/privacy-policy/" },
      { title: "Terms & Conditions", path: "/pages/terms-conditions/" },
      { title: "Logout", path: "/authentication/logout/" },
    ],
  },
];

// Styled components for the sidebar
const SidebarNav = styled("nav")(({ theme }) => ({
  background: '#fff',
  boxShadow: "0px 4px 20px rgba(47, 143, 232, 0.07)",
  width: '300px',
  padding: '30px 10px',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  position: 'fixed',
  top: 0,
  left: 0,
  transition: '350ms',
  zIndex: '10',
  overflowY: 'auto'
}));

const SidebarWrap = styled("div")(({ theme }) => ({
  width: '100%'
}));

const SidebarLabel = styled("span")(({ theme }) => ({
  position: "relative",
  top: "-3px",
}));

// SubMenu Component
const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);
  const [currentPath, setCurrentPath] = useState("");
  const navigate = useNavigate();

  const showSubnav = () => setSubnav(!subnav);

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  return (
    <>
      <div
        onClick={() => {
          if (item.subNav) {
            showSubnav();
          } else {
            navigate(item.path);
          }
        }}
        className={`sidebarLink ${currentPath === item.path && 'sidebarLinkActive'}`}
      >
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subNav && subnav ? item.iconOpened : item.subNav ? item.iconClosed : null}
        </div>
      </div>
      {subnav &&
        item.subNav.map((subItem, index) => (
          <div
            key={index}
            onClick={() => navigate(subItem.path)}
            className={`sidebarLink2 ${currentPath === subItem.path && 'sidebarLinkActive2'}`}
          >
            {subItem.icon}
            {subItem.title}
          </div>
        ))}
    </>
  );
};

// Main Sidebar Component
const Sidebar = ({ toggleActive }) => {
  return (
    <SidebarNav>
      <SidebarWrap>
        <Box
          sx={{
            mb: '20px',
            px: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <img src="../../../public/images/logo.png" alt="Logo" className='black-logo' />
          <IconButton
            onClick={toggleActive}
            size="small"
            sx={{
              background: 'rgb(253, 237, 237)',
              display: { lg: 'none' }
            }}
          >
            <ClearIcon />
          </IconButton>
        </Box>

        {SidebarData.map((item, index) => (
          <SubMenu item={item} key={index} />
        ))}
      </SidebarWrap>
    </SidebarNav>
  );
};

export default Sidebar;

// CSS for Sidebar
const styles = `
.sidebarLink {
  display: flex;
  color: #260944;
  justify-content: space-between;
  align-items: center;
  padding: 9px 20px;
  text-decoration: none;
  font-size: 14.5px;
  border-radius: 5px;
  font-weight: 500;
  margin-top: 3px;
  margin-bottom: 3px;
}
.sidebarLink svg {
  fill: #818093;
  position: relative;
  top: 2px;
}
.sidebarLink:hover {
  background: linear-gradient(90deg, rgba(172, 169, 255, 0.6) 0%, rgba(172, 169, 255, 0.37) 91.25%);
}
.sidebarLink2 {
  display: block;
  color: #5B5B98;
  padding: 9px 20px 9px 50px;
  text-decoration: none;
  font-size: 14px;
  border-radius: 5px;
  font-weight: 500;
  position: relative;
}
.sidebarLink2::before {
  content: "";
  background-color: #818093;
  width: 6px;
  height: 6px;
  border-radius: 100%;
  position: absolute;
  left: 30px;
  top: 16px;
}
.sidebarLink2:hover {
  background: #757FEF;
  color: #fff;
}
.sidebarLinkActive {
  background-color: rgba(172, 169, 255, 0.6);
}
.sidebarLinkActive2 {
  background-color: rgba(172, 169, 255, 0.6);
}
`;


