import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Sidebar from "../menu/SideBar"; // Import your Sidebar component
import TopNavbar from "../menu/TopNavBar";
import Features from "../../components/Tasks/Features"; // Import the Features component
import TaskDistribution from "../../components/TaskDistribution/TaskDistribution"; // Import the TaskDistribution component
import AllTasks from "../../components/AllTasks/AllTasks";

const Dashboard = () => {
  const sidebarWidth = 200; // Set the width of the sidebar (adjust as needed)

  return (
    <Box display="flex">
      {/* Sidebar */}
      <Box sx={{ width: sidebarWidth }}>
        <Sidebar />
      </Box>

      {/* Main Content */}
      <Box
        sx={{
          flexGrow: 1,
          marginLeft: `${sidebarWidth}px`,
          padding: "20px",
          backgroundColor: "grey",
        }}
      >
        {/* Top Navbar */}
        <Box mb={4}>
          <TopNavbar />
        </Box>

        {/* Content Area */}
        <Box
          sx={{
            maxWidth: "100%",
            margin: "auto",
            textAlign: "center",
          }}
        >
          <Typography variant="h4" gutterBottom>
            Welcome to the Dashboard
          </Typography>
          <Typography variant="body1">
            This is the main dashboard where you can see your information and manage your account.
          </Typography>

          {/* Features Component */}
          <Box mt={4}>
            <Features />
          </Box>

          {/* Task Distribution and All Tasks Components */}
          <Box mt={4}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Box sx={{ width: '100%' }}>
                  <TaskDistribution />
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box sx={{ width: '100%' }}>
                  <AllTasks />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
