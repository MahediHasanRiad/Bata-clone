import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";

const SelectItem = ({
  heading,
  item1,
  item2,
  item3 = "",
  item4 = "",
  item5 = "",
}) => {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{heading}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label={heading}
          onChange={handleChange}
        >
          <MenuItem value={10}>{item1}</MenuItem>
          <MenuItem value={20}>{item2}</MenuItem>
          <MenuItem value={30}>{item3}</MenuItem>
          <MenuItem value={30}>{item4}</MenuItem>
          <MenuItem value={30}>{item5}</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};


export default SelectItem