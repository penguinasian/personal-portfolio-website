import React from 'react';
import { VerticalTimelineElement, VerticalTimeline } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement className="vertical-timeline-element--education"
          date="2021.01 - 2022.12"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}

        >
          <h3 className="vertical-timeline-element-title"> BCIT, Vancouver, BC</h3>
          <h4>Diploma</h4>
          <p>Computer System Technology</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className="vertical-timeline-element--education"
          date="2015 - 2017"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}

        >
          <h3 className="vertical-timeline-element-title"> BCIT, Vancouver, BC</h3>
          <h4>Diploma</h4>
          <p>Accounting</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement className="vertical-timeline-element--education"
          date="2019.02 - 2020.11"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}

        >
          <h3 className="vertical-timeline-element-title"> Financial Accountant</h3>
          <h4>Yyoga, Vancouver, BC</h4>
          <p>Responsible for bank reconciliation, vendor management and assisting month-end financial reporting.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement className="vertical-timeline-element--education"
          date="2017.07 - 2018.12"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}

        >
          <h3 className="vertical-timeline-element-title"> Accounts Payable Associate </h3>
          <h4>The Peak Group of Companies, Vancouver, BC</h4>
          <p>Responsible for vendor management and bank reconciliation.</p>
        </VerticalTimelineElement>
      </VerticalTimeline>


    </div>
  )
}

export default Experience