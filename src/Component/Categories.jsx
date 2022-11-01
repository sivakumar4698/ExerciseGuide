import React, { useContext } from 'react';
import { Box, Typography } from '@mui/material';
import EachBodyPart from './EachBodyPart';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Categories = ({data, bodyParts, setBodyPart, bodyPart}) => {

    const LeftArrow = () => {
        const { scrollPrev } = useContext(VisibilityContext);
      
        return (
          <Typography onClick={() => scrollPrev()} className="right-arrow">
            <ArrowForwardIcon />
          </Typography>
        );
      };
      
      const RightArrow = () => {
        const { scrollNext } = useContext(VisibilityContext);
      
        return (
          <Typography onClick={() => scrollNext()} className="left-arrow">
<ArrowBackIcon />          
</Typography>
        );
      };

  return (
 <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>{
    data.map((item) => (
        <Box
          key={item.id || item}
          itemId={item.id || item}
          title={item.id || item}
          m="0 40px"
        >
            <EachBodyPart item={item}  setBodyPart={setBodyPart} bodyPart={bodyPart}/>
        </Box>
      ))}
</ScrollMenu>    
  )
}

export default Categories