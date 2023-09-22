import { useState } from "react";

import ContentTicket from "../content-ticket/content-ticket";

import "../content-tickets-list/content-tickets-list.css";

export default function ContentTicketsList() {
  const ticketsArr = [
    {
      price: "13 400 P",
      carrier: "код авиакомпании",
      segments: [
        {
          origin: "mow",
          destination: "код города",
          date: "10:45",
          stops: [],
          duration: "21ч 15мин",
        },
        {
          origin: "hkt",
          destination: "код города",
          date: "08:00",
          stops: [],
          duration: "время перелета в минутах",
        },
      ],
    },
  ];
  const [tickets, setTickets] = useState(ticketsArr);

  const getTicketInformation = () => {
    const ticketComponents = [];

    for (let i = 0; i < 5; i++) {
      const ticket = tickets;
      ticketComponents.push(<ContentTicket key={i} ticket={ticket} />);
    }

    return ticketComponents;
  };

  return <ul className="content-tickets-list">{getTicketInformation()}</ul>;
}
