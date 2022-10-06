import {
  Card,
  CardContent,
  Chip,
  Divider,
  Stack,
  Typography,
  Modal,
} from "@mui/material";
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import GetJobId from "../components/GetJobId";

function JobDetailPage() {
  let params = useParams();
  let job = GetJobId(params.jobId);
  let navigate = useNavigate();

  function onDismiss() {
    navigate(-1);
  }

  return (
    <Modal
      open={true}
      onClose={() => onDismiss()}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Card
        variant="contained"
        style={{ backgroundColor: "#212121" }}
        sx={{
          margin: "auto",
          width: "700px",
          display: "flex",
          textAlign: "center",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        <CardContent>
          <Typography
            // sx={{ height: 45 }}
            color="text.secondary"
            display={"flex"}
            textAlign="center"
            alignItems={"center"}
            justifyContent="center"
            textOverflow={"ellipsis"}
            fontSize={25}
            gutterBottom
          >
            {job.title}
          </Typography>
          <Divider />
          <Typography
            // color="text.secondary"
            variant="body2"
            // height={90}
            style={{ display: "block" }}
            padding={1}
            fontSize={16}
          >
            {job.description}
          </Typography>
          <Typography
            // color="text.secondary"
            variant="body2"
            style={{ display: "block" }}
            padding={1}
            fontSize={16}
          >
            Skills:
          </Typography>
          <Stack
            display={"flex"}
            justifyContent="center"
            direction="row"
            spacing={0.5}
            sx={{ maxHeight: 30, width: "100%" }}
            overflow="hidden"
          >
            {job.skills.map((i) => (
              <Chip
                key={i}
                label={i}
                style={{ backgroundColor: "#d74742", fontSize: "0.7rem" }}
                size="small"
              />
            ))}
          </Stack>
          <Typography
            variant="body2"
            style={{ display: "block" }}
            paddingTop={2}
            fontSize={16}
          >
            City: {job.city}
          </Typography>
        </CardContent>
      </Card>
    </Modal>
  );
}

export default JobDetailPage;
