import { Box, Typography, InputLabel, Select, MenuItem } from "@mui/material"
import { useState } from "react"

const ChoiceForm = ({ chooseCategory }) => {
  const categories = ['Weight', 'Body Fat Percentage', 'Total Pinches', 'All']
  const [category, setCategory] = useState('Weight')

  const selectCategory = (e) => {
    chooseCategory(e.target.value)
    setCategory(e.target.value)
  }

  return(
    <Box>
      <InputLabel id='category-label'>Measurement Category</InputLabel>
      <Select
        labelId='category-label'
        id='category'
        label='category'
        value={category}
        onChange={selectCategory}
        sx={{width: 200}}
      >
      {categories.map((item, index) => <MenuItem key={index} value={item}>{item}</MenuItem>)}
      </Select>
    </Box>
  )
}

export default ChoiceForm