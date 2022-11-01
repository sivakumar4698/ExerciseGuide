import React, {useEffect, useState} from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import {exerciseoptions, fetchRapidAPIData} from '../ApiCall/fetchDataAPI'
import Categories from './Categories';
const Search = ({setExercises, bodyPart, setBodyPart}) => {
     
    const [searchvalue, setSearchValue] = useState('');
    const [bodyParts, setBodyParts] = useState([]);


    useEffect(() => {
      const fetchExercisesData = async () => {
        const bodyParts = await fetchRapidAPIData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseoptions);
  
        setBodyParts(['all', ...bodyParts]);
      };
  
      fetchExercisesData();
    }, [setBodyParts]);

    const handleSearch = async () => {
      if (searchvalue) {
        const data = await fetchRapidAPIData('https://exercisedb.p.rapidapi.com/exercises', exerciseoptions);
  
        const searchedWorkout = data.filter(
          (item) => item.name.toLowerCase().includes(searchvalue)
                 || item.target.toLowerCase().includes(searchvalue)
                 || item.equipment.toLowerCase().includes(searchvalue)
                 || item.bodyPart.toLowerCase().includes(searchvalue),
        );
  
        window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
  
        setSearchValue('');
        setExercises(searchedWorkout);
      }
    };

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
    <Typography 
    fontWeight={700} 
    sx={{ fontSize: { lg: '44px', xs: '30px' }, 
    color:"#687477" }} 
    mb="49px" textAlign="center">
      Awesome Exercises You <br /> Should Know
    </Typography>
    <Box position="relative" mb="72px">
      <TextField
        height="76px"
        sx={{ input: {fontWeight: '700', border: 'none', borderRadius: '4px' }, 
        width: {lg: '1170px', xs: '350px' }, 
        backgroundColor: '#fff', borderRadius: '40px' }}
        value={searchvalue}
        onChange={(e) => setSearchValue(e.target.value.toLowerCase())}
        placeholder="Search Exercises"
        type="text"
      />
      <Button className="search-btn"
       sx={{ bgcolor: '#E2C2B3', 
       color: '#403234', 
       textTransform: 'none', 
       width: { lg: '173px', xs: '80px' }, 
       height: '56px', 
       position: 'absolute', 
       right: '0px', 
       fontSize: { lg: '20px', xs: '14px' } }} onClick={handleSearch} >
        Search
      </Button>
    </Box>
    <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
        <Categories data={bodyParts} setBodyPart={setBodyPart} bodyPart={bodyPart} />
      </Box>
  </Stack>
  )
}

export default Search