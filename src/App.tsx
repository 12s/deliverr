import * as React from "react";
import "./styles.css";

import { makeStyles } from "@material-ui/core/styles";
import { FilterCard } from "./Components/FilterCard";
import { OutputTable } from "./Components/OutputTable";
import { data } from "./data";
/*
## Task
1. I should be able to see a list of plants displaying `{genus} {species}`.
2. I should be able to see an indicator next to the plant displaying if its deceased or alive.
3. I should be able to see and click on a button to switch the plant from alive to dead.
4. I should be able to filter data by family using a select.
5. I should be able to filter data by genus using a select.
6. I should be able to see the filters on the left hand side, and the list on the right hand side.
7. I should be able to see a card/box around the filters.
8. I should be able to see a styled select.
9. I should be able to see a styled list.
*/

const useStyles = makeStyles({
  wrapper: {
    display: "flex;"
  }
});

export const App = () => {
  console.clear();
  const [plants, setPlants] = React.useState({});

  async function setData() {
    try {
      const rawData: object = await data;
      setPlants(rawData);
    } catch (reject) {
      console.error(reject);
    }
  }

  React.useEffect(() => {
    setData();
  }, []);

  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <FilterCard plants={plants}></FilterCard>
      <OutputTable plants={plants}></OutputTable>
    </div>
  );
};
