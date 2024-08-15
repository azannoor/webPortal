import React, { useState } from 'react';
import { IconButton, Tooltip, Avatar, Menu, MenuItem, Typography, Divider, Link,Box } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";


const Profile = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <>
      <Tooltip title="Account settings">
        <IconButton
          onClick={handleClick}
          size="small"
        >
          <Avatar src="/images/user1.png" alt="User Avatar" />
        </IconButton>
      </Tooltip>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            borderRadius: "10px",
            boxShadow: "0px 10px 35px rgba(50, 110, 189, 0.2)",
            mt: 1.5,
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
          <Avatar src="/images/user1.png" />
          <Box>
            <Typography variant="subtitle1">Admin</Typography>
            <Typography variant="body1">Adison Jeck</Typography>
          </Box>
        </MenuItem>

        <Divider />

        <MenuItem>
          <PersonIcon />
          <Link href="/pages/profile/" underline="none">Profile</Link>
        </MenuItem>

        <MenuItem>
          <Settings />
          <Link href="/settings/account/" underline="none">Settings</Link>
        </MenuItem>

        <Divider />

        <MenuItem>
          <Logout />
          Logout
        </MenuItem>
      </Menu>
    </>
  );
};

export default Profile;
