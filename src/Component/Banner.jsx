import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import HeroBannerImage from '../Asssets/BannerImage.jpg';

const Banner = () => (
  <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
    <Typography color="#403234" fontWeight="600" fontSize="26px">Fitness is the key to happiness</Typography>
    <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' }, color:"#687477" }} mb="23px" mt="30px">
      Sweat, Smile <br />
      And Repeat
    </Typography>
    <Typography sx={{  color:"#687477" }} fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
      Welcome to my Exercise guide
    </Typography>
    <Stack>
      <a href="#exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#E2C2B3', padding: '14px', fontSize: '22px', textTransform: 'none', color: '#403234', borderRadius: '4px' }}>Explore Exercises</a>
    </Stack>
    <Typography fontWeight={600} color="#403234" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '150px' }}>
      Exercise
    </Typography>
    <img src={HeroBannerImage} alt="hero-banner" style={{width:"700px"}} className="hero-banner-img" />
  </Box>
);

export default Banner;