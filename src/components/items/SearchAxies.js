import { useState } from "react";
import { useDispatch } from "react-redux";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import { getAxieInfo } from "../../actions/enemiesActions";

export const SearchAxies = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    if (search) {
      dispatch(getAxieInfo({ enemyOne: search }));
    }
  };

  return (
    <div style={styles.container}>
      <Stack direction="row" spacing={4}>
        <TextField
          id="searchAxie"
          type="number"
          label="Type Front Axie ID"
          variant="standard"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button variant="contained" onClick={handleSearch}>
          Search
        </Button>
      </Stack>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
  },
};
