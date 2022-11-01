import React from 'react';
import { Typography, Stack, Button } from '@mui/material';

import BodyPartImage from '../Asssets/BodyPart.jpg';
import TargetImage from '../Asssets/Target.jpg';
import EquipmentImage from '../Asssets/Equipment.jpg';

const Information = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  return (
    <Stack gap="60px" sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center' }}>
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>
        <Typography sx={{ fontSize: { lg: '64px', xs: '30px' }, color:"#687477" }} fontWeight={700} textTransform="capitalize">
          {name}
        </Typography>
        <Typography sx={{ fontSize: { lg: '24px', xs: '18px' } }} color="#403234">
          Exercises keep you strong.{' '}
          <span style={{ textTransform: 'capitalize' }}><span style={{color:"#E2C2B3"}}>{name}</span></span> is one
          of the best <br /> exercises to target your <span style={{color:"#E2C2B3"}}>{target}</span>. It will help you improve your{' '}
          <br /> mood and gain energy.
        </Typography>
        {extraDetail?.map((item) => (
          <Stack key={item.name} direction="row" gap="24px" alignItems="center">
            <Button sx={{ background: '#ffffff', borderRadius: '50%', width: '100px', height: '100px' }}>
              <img src={item.icon} alt={bodyPart} style={{ width: '100px', height: '100px' }} />
            </Button>
            <Typography textTransform="capitalize" sx={{ fontSize: { lg: '30px', xs: '20px' }, color:"#687477" }}>
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Information;