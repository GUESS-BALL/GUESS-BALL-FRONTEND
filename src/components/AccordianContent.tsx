import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import  PropTypes  from 'prop-types';

function AccordianContent(props:any) {
  return (
    <>
        <Accordion className='accordion'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><b>{props.heading}</b></Typography>
        </AccordionSummary>
        <AccordionDetails className='accordian-detail'>
          <Typography>
            {props.content}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  )
}

AccordianContent.propTypes = {
  heading: PropTypes.string,
  content: PropTypes.string
}

export default AccordianContent