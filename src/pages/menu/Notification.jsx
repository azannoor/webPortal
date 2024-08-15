import React, { useState } from 'react';
import { IconButton, Typography, Tooltip, Menu, Link, Badge, Button } from "@mui/material";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import styles from "./Notification.module.css";

const Notification = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <>
      <Tooltip title="Notification">
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ backgroundColor: '#f5f5f5', width: '40px', height: '40px' }}
          aria-controls={open ? "notification-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <Badge color="error" variant="dot">
            <NotificationsActiveIcon />
          </Badge>
        </IconButton>
      </Tooltip>

      <Menu
        anchorEl={anchorEl}
        id="notification-menu"
        open={open}
        onClose={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            padding: "5px 20px",
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
        <div className={styles.header}>
          <Typography variant="h6">Notifications</Typography>
          <Button variant="text">Clear all</Button>
        </div>
        <div className={styles.notificationList}>
          <Typography variant="body1">8 Invoices have been paid</Typography>
          <div className={styles.notificationContent}>
            <img src="/images/pdf-icon.png" alt="PDF Icon" width={27} />
            <Typography variant="body2">
              Invoices have been paid to the company.
            </Typography>
          </div>
          <Typography variant="caption" color="textSecondary">11:47 PM Wednesday</Typography>
        </div>
        <Typography textAlign="center">
          <Link href="/notification/" underline="none">
            View All <i className="ri-arrow-right-s-line"></i>
          </Link>
        </Typography>
      </Menu>
    </>
  );
};

export default Notification;
