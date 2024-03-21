import React from "react";
import StackedBarChartTwoToneIcon from "@mui/icons-material/StackedBarChartTwoTone";
import PieChartOutlineTwoToneIcon from "@mui/icons-material/PieChartOutlineTwoTone";
import TrackChangesSharpIcon from "@mui/icons-material/TrackChangesSharp";
import TrafficRoundedIcon from "@mui/icons-material/TrafficRounded";
import IconButton from "@mui/material/IconButton";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";

const ChartButton = () => {
  return (
    <Stack direction="row" spacing={0}>
      <IconButton color="info">
        <StackedBarChartTwoToneIcon />
      </IconButton>
      <IconButton color="info">
        <PieChartOutlineTwoToneIcon />
      </IconButton>
      <IconButton color="info">
        <TrackChangesSharpIcon />
      </IconButton>
      <IconButton color="info">
        <TrafficRoundedIcon />
      </IconButton>
      <Link to="/dv">
        <Button size="medium" variant="outlined" color="primary">
          All
        </Button>
      </Link>
    </Stack>
  );
};

export default ChartButton;
