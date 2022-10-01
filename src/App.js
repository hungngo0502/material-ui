import { Grid } from "@mui/material";
import React from "react";
import JobCard from "./components/JobCard";
import PaginationControlled from "./components/Pagination";
import SearchAppBar from "./components/SearchAppBar";
import jobs from "./jobs.json";

function App() {
  return (
    <div style={{ backgroundColor: "#121212" }}>
      <SearchAppBar />
      <Grid container spacing={2} sx={{ mt: 1 }}>
        {jobs.slice(0, 5).map((job) => (
          <Grid item xs={9} md={3} lg={4}>
            <JobCard job={job} />
          </Grid>
        ))}
      </Grid>
      <PaginationControlled
        sx={{ margin: "auto", marginTop: "15px" }}
        color="primary"
      />
    </div>
  );
}

export default App;
