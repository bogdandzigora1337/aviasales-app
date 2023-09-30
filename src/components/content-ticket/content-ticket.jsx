import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { format, addMinutes } from "date-fns";
import uniqId from "uniqid";

import cl from "./content-ticket.module.scss";

function TicketHeader({ price, carrier }) {
  return (
    <div className={cl["content__ticket-header"]}>
      <h1 className={cl["content__ticket-price"]}>
        {price.toLocaleString("ru-RU")} P
      </h1>
      <img
        src={`http://pics.avs.io/99/36/${carrier}.png`}
        alt="#"
        className={cl["content__ticket-logo"]}
      />
    </div>
  );
}

function TicketSegment({ flightInfo }) {
  const { origin, destination, date, duration, stops } = flightInfo;

  const formatDate = (dateString, duration = 0) => {
    const date = new Date(dateString);
    const newDate = addMinutes(date, duration);
    return format(newDate, "HH:mm");
  };

  const formatDuration = (durationInMinutes) => {
    const hours = Math.floor(durationInMinutes / 60);
    const minutes = durationInMinutes % 60;
    return `${hours}ч ${minutes}мин`;
  };

  return (
    <table key={uniqId()} className={cl["content__ticket-table-info"]}>
      <thead>
        <tr>
          <td>
            {origin}-{destination}
          </td>
          <td>в пути</td>
          <td>
            {stops.length}{" "}
            {stops.length === 0
              ? "пересадок"
              : stops.length === 1
              ? "пересадка"
              : "пересадки"}
          </td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            {formatDate(date)}-{formatDate(date, duration)}
          </td>
          <td>{formatDuration(duration)}</td>
          <td>{[stops].join(", ")}</td>
        </tr>
      </tbody>
    </table>
  );
}

function Ticket({ ticket }) {
  return (
    <li className={cl["content__tickets-list-item"]}>
      <div className={cl["content__ticket"]}>
        <TicketHeader price={ticket.price} carrier={ticket.carrier} />
        {ticket.segments.map((flightInfo) => {
          return <TicketSegment key={uniqId()} flightInfo={flightInfo} />;
        })}
      </div>
    </li>
  );
}

export default function ContentTicket() {
  const [tickets, setTickets] = useState(null);
  const allTickets = useSelector((value) => value.checkboxReducer.data);

  const numberTickets = useSelector(
    (reducer) => reducer.moreTicketsReducer.numberTickets
  );

  useEffect(() => {
    if (allTickets) {
      setTickets(allTickets);
    }
  }, [allTickets, tickets]);

  return (
    <>
      {tickets &&
        tickets
          .slice(0, numberTickets)
          .map((ticket) => <Ticket key={uniqId()} ticket={ticket}></Ticket>)}
    </>
  );
}
