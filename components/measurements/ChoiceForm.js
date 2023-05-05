import { Box, Typography, InputLabel, Select, MenuItem } from "@mui/material"
import { useState } from "react"

const ChoiceForm = () => {
  const categories = ['Weight', 'Body Fat Percentage', 'Average Pinches']
  const [category, setCategory] = useState('')
  return(
    <Box>
      <InputLabel id='category-label'>Measurement Category</InputLabel>
      <Select
        labelId='category-label'
        id='category'
        label='category'
        value={category}
        onChange={e => setCategory(e.target.value)}
        sx={{width: 200}}
      >
      <MenuItem value={'weight'}>Choose a category...</MenuItem>
      {categories.map((item, index) => <MenuItem key={index} value={item}>{item}</MenuItem>)}
      </Select>
    </Box>
  )
}

export default ChoiceForm