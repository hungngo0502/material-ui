import jobs from "../jobs.json";

export default function GetJobId(item) {
  return jobs.find((i) => i.id === item);
}
