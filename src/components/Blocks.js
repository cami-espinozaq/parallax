import React, { Fragment, useState } from "react"
import "../App.css"
import Girl from "./Girl"
import Advert from "./Advert"
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Box,
  Container,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core"
import "./Blocks.css"

import MyLocationIcon from "@material-ui/icons/MyLocation"
import PermContactCalendarIcon from "@material-ui/icons/PermContactCalendar"
import SchoolIcon from "@material-ui/icons/School"
import PublicIcon from "@material-ui/icons/Public"
import LocationCityIcon from "@material-ui/icons/LocationCity"
import FlightTakeoffIcon from "@material-ui/icons/FlightTakeoff"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import MusicNoteIcon from "@material-ui/icons/MusicNote"
import LocalDrinkIcon from "@material-ui/icons/LocalDrink"
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter"
import CodeIcon from "@material-ui/icons/Code"
import DirectionsRunIcon from "@material-ui/icons/DirectionsRun"
import CropOriginalIcon from "@material-ui/icons/CropOriginal"
import HighlightIcon from "@material-ui/icons/Highlight"
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward"

const blocks = props => {
  let colorKeys = Object.keys(props.colors)

  return (
    <Fragment>
      <FirstBlock {...props} color={colorKeys[0]} />
      <SecondBlock {...props} color={colorKeys[1]} />
      <ThirdBlock {...props} color={colorKeys[2]} />
      <FourthBlock {...props} color={colorKeys[3]} />
      <FifthBlock {...props} color={colorKeys[4]} />
    </Fragment>
  )
}

const BlockWrapper = props => {
  const classes = props.classes
    ? `block-wrapper ${props.classes}`
    : "block-wrapper"

  return (
    <Container
      maxWidth="sm"
      className={classes}
      key={props.color}
      data-key={props.color}
      style={{ opacity: props.active === props.color ? 1 : 0 }}
    >
      {props.children}
    </Container>
  )
}

const FirstBlock = props => {
  return (
    <BlockWrapper {...props}>
      <Box style={{ color: props.colors.yellow }}>
        <Typography variant="h3">Camila Espinoza</Typography>
        <Typography variant="h4">Software Developer</Typography>
      </Box>
      <Girl />
      <Box style={{ position: "absolute", bottom: "30px", right: "20px" }}>
        <ArrowDownwardIcon
          className="arrow-down"
          style={{ color: props.colors.turquoise }}
        />
      </Box>
    </BlockWrapper>
  )
}

const SecondBlock = props => {
  const listItem = (icon, text) => {
    return (
      <ListItem className="block__list-item">
        <ListItemIcon style={{ color: props.colors.yellow }}>
          {icon}
        </ListItemIcon>
        <ListItemText style={{ color: props.colors.yellow }}>
          <Typography variant="h5">{text}</Typography>
        </ListItemText>
      </ListItem>
    )
  }

  const age = new Date() - new Date("1990/08/01")
  const years = Math.floor(age / 31536000000)

  return (
    <BlockWrapper {...props}>
      <Box style={{ color: props.colors.lightGreen }}>
        <Typography variant="h3">General Background</Typography>
      </Box>
      <List>
        {listItem(<LocationCityIcon />, "Born and raised in Santiago, Chile")}
        {listItem(<PermContactCalendarIcon />, `${years} years old`)}
        {listItem(
          <SchoolIcon />,
          "Graduated from Catholic University of Chile, as IT Engineer"
        )}
        {listItem(<PublicIcon />, "Spanish, English, German")}
        {listItem(
          <FlightTakeoffIcon />,
          "Lived a year in Montana, USA, as an exchange student"
        )}
        {listItem(<MyLocationIcon />, "Currently living in Cologne, Germany")}
      </List>
    </BlockWrapper>
  )
}

const ThirdBlock = props => {
  const [expanded, setExpanded] = useState(false)

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    <BlockWrapper {...props} classes="block-wrapper--centered">
      <Box style={{ color: props.colors.darkBlue, marginBottom: "20%" }}>
        <Typography variant="h3">Experience</Typography>
      </Box>
      <Box>
        <AccordionBlock
          panel="panel0"
          title="Railslove"
          subtitle="Software Developer"
          expanded={expanded}
          changeEvent={handleChange}
        >
          <Typography>
            Software developer for different clients' projects: Most on RoR or
            ReactJS. Some included use of Stimulus for RoR, VueJS and
            Typescript.
          </Typography>
        </AccordionBlock>
        <AccordionBlock
          panel="panel1"
          title="Factor-a Part of DEPT"
          subtitle="Software Developer"
          expanded={expanded}
          changeEvent={handleChange}
        >
          <Typography>
            Frontend developer for the company's suite, building and improving
            features on its application layer. Use of Javascript and Elm for
            client-side, Python for server-side with Flask as web framework.
          </Typography>
        </AccordionBlock>
        <AccordionBlock
          panel="panel2"
          title="Microsoft Corporation"
          subtitle="CSP Sales Expert"
          expanded={expanded}
          changeEvent={handleChange}
        >
          <Typography>
            Coordinated with Microsoft’s Chilean telco partners, supporting
            Office 365 and Azure sales. This included pre-sales technical
            support, software configuration and migration supervision.
          </Typography>
        </AccordionBlock>
        <AccordionBlock
          panel="panel3"
          title="Catholic University of Chile, Public Policies Center"
          subtitle="BPMN Specialist"
          expanded={expanded}
          changeEvent={handleChange}
        >
          <Typography>
            Worked on the Chilean government's “DOM Online” project, analysing
            Chilean townships’ construction management. This involved the
            modeling of internal and external processes as well as using BPMN
            notation based on legal regulation and interviews at several
            townships.
          </Typography>
        </AccordionBlock>
        <AccordionBlock
          panel="panel4"
          title="Ericsson Chile Inc."
          subtitle="Professional Internship"
          expanded={expanded}
          changeEvent={handleChange}
        >
          <Typography>
            In this role I researched and presented information technologies
            based on Big Data Analytics in order to find new revenue
            opportunities for Communication Service Providers.
          </Typography>
        </AccordionBlock>
        <AccordionBlock
          panel="panel5"
          title="Various Projects"
          subtitle="Software Developer"
          expanded={expanded}
          changeEvent={handleChange}
        >
          <ul style={{ marginTop: 0 }}>
            <li>
              <Typography>
                <strong>RSolver Software company:</strong> Designed and coded an
                inventory control application for a mining supplier company. Use
                of C# with WPF interface, ASP.net and mySQL.
              </Typography>
            </li>
            <li>
              <Typography>
                <strong>Supply Chain App for a Graduation Thesis:</strong>{" "}
                Presented a routing improvement proposal for a service company.
                Program based on VRP Algorithm. Use of C# with WPF interface.
              </Typography>
            </li>
          </ul>
        </AccordionBlock>
      </Box>
    </BlockWrapper>
  )
}

const AccordionBlock = props => {
  const ariaControls = `${props.panel}-content`
  const accordionId = `${props.panel}-header`

  return (
    <Accordion
      expanded={props.expanded === props.panel}
      onChange={props.changeEvent(props.panel)}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={ariaControls}
        id={accordionId}
      >
        <Typography variant="h6" className="accordion__title">
          {props.title}
        </Typography>
        <Typography variant="h6" className="accordion__subtitle">
          {props.subtitle}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>{props.children}</AccordionDetails>
    </Accordion>
  )
}

const FourthBlock = props => {
  const listItem = (icon, text) => {
    return (
      <ListItem className="block__list-item">
        <ListItemAvatar>
          <Avatar
            style={{ color: "#fff", backgroundColor: props.colors.darkBlue }}
          >
            {icon}
          </Avatar>
        </ListItemAvatar>
        <ListItemText style={{ color: props.colors.darkBlue }}>
          <Typography variant="h5">{text}</Typography>
        </ListItemText>
      </ListItem>
    )
  }

  return (
    <BlockWrapper {...props}>
      <Box style={{ color: props.colors.darkBlue }}>
        <Typography variant="h3">Hobbies &amp; Interests</Typography>
      </Box>
      <Box>
        <List>
          {listItem(<LocalDrinkIcon />, "Going out with friends")}
          {listItem(
            <MusicNoteIcon />,
            "Listening to podcasts & watching series"
          )}
          {listItem(<FitnessCenterIcon />, "Training in the gym")}
        </List>
        <Divider />
        <List>
          {listItem(<CodeIcon />, "Frontend technologies")}
          {listItem(<DirectionsRunIcon />, "Animations")}
          {listItem(<CropOriginalIcon />, "SVG for interactivity")}
          {listItem(<HighlightIcon />, "Learning & creating new stuff!")}
        </List>
      </Box>
    </BlockWrapper>
  )
}

const FifthBlock = props => {
  return (
    <BlockWrapper {...props} classes="block-wrapper--full-screen">
      <Box style={{ color: props.colors.darkBlue, marginTop: "10vh" }}>
        <Typography variant="h3">Thanks for reading!</Typography>
      </Box>
      <Box>
        <Advert />
      </Box>
    </BlockWrapper>
  )
}

export default blocks
