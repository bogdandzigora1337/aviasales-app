import { useState } from "react";
import ContentTicket from "../content-ticket/content-ticket";
import cl from "./content-tickets-list.module.scss";

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

  return (
    <ul className={cl["content__tickets-list"]}>
      <ContentTicket key={1} ticket={tickets} />
    </ul>
  );
}
