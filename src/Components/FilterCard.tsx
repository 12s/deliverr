import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  Typography,
  Select,
  MenuItem,
  FormHelperText
} from "@material-ui/core";

const useStyles = makeStyles({
  cardWrapper: {
    border: "10px solid pink",
    width: "250px"
  },
  selectWrapper: {
    width: "100%"
  },
  header: {
    textAlign: "center"
  }
});

export const FilterCard = (props) => {
  console.log("props = ", props);
  const plants = props.plants.plants || [];
  console.log(plants);
  const classes = useStyles();
  const [selectVal] = React.useState("");
  return (
    <Card className={classes.cardWrapper}>
      <CardContent>
        <Typography
          className={classes.header}
          color="textSecondary"
          variant="h6"
        >
          Filters
        </Typography>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectVal}
          className={classes.selectWrapper}
        >
          {plants.map((plant: { family: string }, i: number) => {
            return <MenuItem key={i}>{plant.family}</MenuItem>;
          })}
        </Select>
        <FormHelperText>Genus</FormHelperText>

        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectVal}
          className={classes.selectWrapper}
        >
          {plants.map((plant: { family: string }, i: number) => {
            return <MenuItem key={i}>{plant.family}</MenuItem>;
          })}
        </Select>
        <FormHelperText>Family</FormHelperText>
      </CardContent>
    </Card>
  );
};
