import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { List, ListItem, ListItemText, ListItemIcon } from "@material-ui/core";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import IconButton from "@material-ui/core/IconButton";
import { green, red } from "@material-ui/core/colors";
const useStyles = makeStyles({
  listWrapper: {
    border: "10px solid orange",
    width: "100%"
  }
});

export const OutputTable = (props) => {
  console.log("props = ", props.plants.plants || []);
  const classes = useStyles();
  const plants = props.plants.plants || [];
  // const [plants, setPlants] = React.useState({ ...props.plants.plants });

  console.log("starting plants  = ", plants);

  // React.useEffect(() => {
  //   console.log("inside effe cts", props);

  //   setPlants(props.plants.plants);
  // }, [plants]);

  return (
    <List
      className={classes.listWrapper}
      component="nav"
      aria-label="main mailbox folders"
    >
      {plants.map(
        (
          plant: { deceased: boolean; genus: string; species: string },
          i: number
        ) => {
          return (
            <ListItem key={i}>
              <ListItemIcon>
                <IconButton
                  style={{ color: plant.deceased ? red[300] : green[300] }}
                  onClick={() => {
                    plant.deceased = !plant.deceased;
                    // setPlants(plant);
                    console.log("plant", plant);
                  }}
                  aria-label="is alive?"
                >
                  <WbSunnyIcon />
                </IconButton>
              </ListItemIcon>
              <ListItemText primary={`${plant.genus}, ${plant.species}`} />
            </ListItem>
          );
        }
      )}
    </List>
  );
};
