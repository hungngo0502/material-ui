import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import SkillsPaper from "./SkillsPaper";
import { styled } from "@mui/material/styles";

const CardStyle = styled(Card)(({ theme }) => ({
  boxShadow: "none",
  border: "1px solid black",
  width: "100%",
  maxWidth: "350px",
  minWidth: "270px",
  height: "320px",
  margin: "auto",
  backgroundColor: theme.palette.primary.light,
}));

function JobCard({ job, skills }) {
  return (
    <CardStyle ariant="outlined">
      <Stack
        direction="column"
        justifyContent="space-between"
        alignItems="center"
        height="100%"
        padding="5px"
      >
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ color: (theme) => theme.palette.common.white }}
          >
            {job.title}
          </Typography>
          <Divider />
          <SkillsPaper skills={skills} />
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ color: (theme) => theme.palette.common.white }}
          >
            {job.description}
          </Typography>
        </CardContent>
        <Button
          variant="contained"
          sx={{ width: "130px", backgroundColor: "#df9e0b" }}
        >
          Learn More
        </Button>
      </Stack>
    </CardStyle>
  );
}

export default JobCard;
