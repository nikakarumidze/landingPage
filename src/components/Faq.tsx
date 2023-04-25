import React from 'react';
import { Box, Typography, Accordion, AccordionSummary } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Faq: React.FC = () => {
  return (
    <Box>
      <Typography>წესები და პირობები</Typography>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          id='panel1a-header'
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
      </Accordion>
    </Box>
  );
};

export default Faq;
