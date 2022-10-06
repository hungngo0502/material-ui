import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Chip, Stack, Divider } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

export default function JobCard({ job }) {
  let location = useLocation();
  return (
    <Card
      variant="contained"
      style={{ backgroundColor: "#212121" }}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
      }}
    >
      <CardContent>
        <Typography
          sx={{ height: 45 }}
          color="text.secondary"
          display={"flex"}
          textAlign="center"
          alignItems={"center"}
          justifyContent="center"
          textOverflow={"ellipsis"}
          gutterBottom
        >
          {job.title}
        </Typography>
        <Divider />
        <Stack
          direction="row"
          spacing={0.5}
          marginTop={1}
          marginBottom={1}
          sx={{ maxHeight: 25, width: "100%" }}
          overflow="hidden"
        >
          {job.skills.map((i) => (
            <Chip
              key={i}
              label={i}
              style={{ backgroundColor: "#d74742", fontSize: "0.5rem" }}
              size="small"
            />
          ))}
        </Stack>
        <Typography
          // color="text.secondary"
          variant="body2"
          height={110}
          style={{ display: "inline-block" }}
          paddingTop={1}
        >
          {job.description}
        </Typography>
      </CardContent>
      <CardActions style={{ justifyContent: "center", padding: "15px" }}>
        <Button
          size="small"
          variant="contained"
          style={{
            fontWeight: "540",
            backgroundColor: "#ffa726",
            textAlign: "center",
            justifyContent: "center",
          }}
          component={Link}
          to={`/jobs/${job.id}`}
          state={{ backgroundLocation: location }}
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
