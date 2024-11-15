import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const aboutQuestion = [
  {
    question: "Question1",
    answer: "Answer1",
  },
  {
    question: "Question2",
    answer: "Answer2",
  },
  {
    question: "Question3",
    answer: "Answer3",
  },
  {
    question: "Question4",
    answer: "Answer4",
  },
];

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary {...props} />
))(() => ({}));

const AccordionDetails = styled(MuiAccordionDetails)(() => ({
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const AboutAccordion = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className="p-6 bg-gray-100 max-w-6xl mx-auto my-8">
      <h1 className="text-3xl font-bold text-center mb-4">Why Nep Wood</h1>
      <p className="text-center mb-6">
        Our team values wood’s natural beauty and combines science and design to
        create a lasting impact for future generations.
      </p>
      {aboutQuestion.map((about, index) => (
        <Accordion
          key={index}
          expanded={expanded === `panel${index + 1}`}
          onChange={handleChange(`panel${index + 1}`)}
          className="mb-2 border rounded-lg"
        >
          <AccordionSummary
            aria-controls={`panel${index + 1}d-content`}
            id={`panel${index + 1}d-header`}
            className="flex items-center justify-between bg-white px-4 py-2"
            expandIcon={
              expanded === `panel${index + 1}` ? (
                <RemoveIcon className="text-gray-600" />
              ) : (
                <AddIcon className="text-gray-600" />
              )
            }
          >
            <Typography className="font-medium">{about.question}</Typography>
          </AccordionSummary>
          <AccordionDetails className="bg-gray-50 px-4 py-2">
            <Typography>{about.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default AboutAccordion;
