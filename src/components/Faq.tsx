import React from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { IFaqData } from '../types';

interface IFaq {
  data: IFaqData[];
}

const Faq: React.FC<IFaq> = ({ data }) => {
  return (
    <Box>
      <Typography my={2}>წესები და პირობები</Typography>
      {data.map((item, i) => (
        <Accordion sx={{ backgroundColor: 'error.light', my: 1 }} key={i}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>{item.header}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{item.description}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default Faq;
