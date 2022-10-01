import React from "react";
import Paper from "@mui/material/Paper";
import Chip from "@mui/material/Chip";

function SkillsPaper({ skills }) {
  return (
    <Paper
      sx={{
        display: "flex",
        justifyContent: "start",
        flexWrap: "wrap",
        listStyle: "none",
        p: 0.5,
        m: 0,
        boxShadow: 0,
        backgroundColor: "#353535",
      }}
      component="ul"
    >
      {skills?.map((skill) => (
        <Chip
          key={skill}
          size="small"
          // color="white"
          label={skill}
          sx={{ paddingBottom: "2px", backgroundColor: "#d74742" }}
        />
      ))}
    </Paper>
  );
}

export default SkillsPaper;
