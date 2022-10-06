import { Container, Grid, Pagination, Stack } from "@mui/material";
import React from "react";
import JobCard from "./JobCard";
import jobs from "../jobs.json";
import { useSearchParams } from "react-router-dom";

function CardGrid() {
  const [page, setPage] = React.useState(1);
  const limit = 5;
  const skip = page * limit - limit;
  let currentJobs = jobs.slice(skip, page * limit); // page === 1
  // let currentJobs = jobs.slice(5, 10); // page === 2
  // let currentJobs = jobs.slice(10, 15); // page === 3
  let [searchParams, setSearchParams] = useSearchParams();
  let filter = searchParams.get("filter");

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <Container maxWidth="lg" sx={{ margin: "auto" }}>
      <Grid
        container
        maxWidth="100%"
        margin={2}
        justifyItems={"center"}
        alignItems="stretch"
        spacing={4}
      >
        {filter
          ? jobs
              .filter((job) => {
                if (!filter) return true;
                let name = job.title.toLowerCase();
                return name.includes(filter.toLowerCase());
              })
              .map((job) => (
                <Grid
                  key={job.id}
                  item
                  xs={12}
                  md={6}
                  lg={4}
                  style={{ maxWidth: "340px" }}
                >
                  <JobCard job={job} />
                </Grid>
              ))
          : currentJobs.map((job) => (
              <Grid
                key={job.id}
                item
                xs={12}
                md={6}
                lg={4}
                style={{ maxWidth: "340px" }}
              >
                <JobCard job={job} />
              </Grid>
            ))}
      </Grid>
      <Stack alignItems={"center"} padding={1}>
        <Pagination
          count={Math.ceil(jobs.length / 5)}
          page={page}
          onChange={handleChange}
          color="primary"
        />
      </Stack>
    </Container>
  );
}

export default CardGrid;
