import { Grid, Pagination } from "@mui/material";
import React from "react";
import JobCard from "./components/JobCard";
import SearchAppBar from "./components/SearchAppBar";
import jobs from "./jobs.json";

function App() {
  return (
    <>
      <SearchAppBar />

      <Grid container spacing={2} sx={{ mt: 1 }}>
        {jobs.map((job) => (
          <Grid item xs={9} md={3} lg={4}>
            <JobCard job={job} />
          </Grid>
        ))}
      </Grid>
      <Pagination sx={{}} />
    </>
  );
}

export default App;
//  //App Bar
// Box
// Button
// Chip
// Divider
// Paper
// CssBaseline
