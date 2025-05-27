import React from 'react'

// Gererated with Chat GTP 4.0 to make a list of terms and conditions. Inserts the data in "listData", output the data with "listData.map". 

const TermsAndConditions = () => {
  const listData = [
    {
      title: "Ticket Purchase and Entry",
      subpoints: ["All attendees must possess a valid ticket for entry.", "Tickets are non-refundable and non-transferable unless specified by the event organizer.", "Attendees must present a valid government-issued ID along with their ticket at the gate."]
    },
    {
      title: "Security and Safety",
      subpoints: ["Attendees are subject to security checks, including bag inspections, upon entry.", "Prohibited items include weapons, drugs, alcohol, fireworks, and other hazardous materials.", "The event organizer reserves the right to deny entry to individuals deemed a security risk."]
    },
    {
      title: "Code of Conduct",
      subpoints: ["Attendees are expected to behave responsibly and respectfully toward others.", "Any disruptive behavior, harassment, or illegal activity will result in immediate removal from the event without refund."]
    },
    {
      title: "Event Schedule and Changes",
      subpoints: ["The event schedule is subject to change without prior notice.", "The event organizer is not responsible for delays or cancellations caused by weather, technical issues, or unforeseen circumstances."]
    }
  ];

  return (
    <div className='terms-and-conditions'>
        <h5>Terms & Conditions</h5>
        <ol>
        {listData.map((item, index) => (
            <li className='terms-title' key={index}>
            {item.title}
            <ul className='terms-text'>
                {item.subpoints.map((sub, subIndex) => (
                <li key={subIndex}>{sub}</li>
                ))}
            </ul>
            </li>
        ))}
        </ol>
    </div>
  );
};


export default TermsAndConditions