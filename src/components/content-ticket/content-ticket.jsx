import cl from "./content-ticket.module.scss";

export default function ContentTicket({ ticket }) {
  const ticketInfo = ticket[0];

  console.log(ticketInfo);

  return (
    <li className={cl["content__tickets-list-item"]}>
      <div className={cl["content__ticket"]}>
        <div className={cl["content__ticket-header"]}>
          <h1 className={cl["content__ticket-price"]}>{ticketInfo.price}</h1>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/S7_new_logo.svg/1024px-S7_new_logo.svg.png"
            alt="#"
            className={cl["content__ticket-logo"]}
          />
        </div>
        <table className={cl["content__ticket-table-info"]}>
          <thead>
            <tr>
              <td>
                {ticketInfo.segments[0].origin}-{ticketInfo.segments[1].origin}
              </td>
              <td>в пути</td>
              <td>2 пересадки</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {ticketInfo.segments[0].date}-{ticketInfo.segments[1].date}
              </td>
              <td>{ticketInfo.segments[0].duration}</td>
              <td>HKG, JNB</td>
            </tr>
          </tbody>
        </table>
      </div>
    </li>
  );
}
