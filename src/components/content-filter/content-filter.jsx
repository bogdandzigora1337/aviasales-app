import { useDispatch, useSelector } from "react-redux";
import { Checkbox } from "antd";
import { allTickets, toggleCheckbox } from "../../redux/actions";
import { cheapTicket, fastTicket } from "../../redux/actions";

import cl from "./content-filter.module.scss";

export default function ContentFilter() {
  const dispatch = useDispatch();
  const { transferAllTicket, transferState } = useSelector(
    (res) => res.checkboxReducer
  );
  const ticketsReceived = useSelector((reducers) => {
    return reducers.ticketsReducer.data
      ? [].concat(...reducers.ticketsReducer.data)
      : [];
  });
  const ticketFilter = useSelector((state) => state.checkboxReducer.filter);

  const handleClickAllTickets = () => {
    dispatch(allTickets(ticketsReceived));
    ticketFilter === "cheapest" ? dispatch(cheapTicket) : dispatch(fastTicket);
  };

  const handleClickOtherStatusTickets = (action) => {
    dispatch(toggleCheckbox(action, ticketsReceived));
    ticketFilter === "cheapest" ? dispatch(cheapTicket) : dispatch(fastTicket);
  };

  return (
    <div className={cl["content-filter"]}>
      <h1 className={cl["content-filter__title"]}>количество пересадок</h1>
      <div className={cl["content-filter__list-checkbox"]}>
        <Checkbox
          className={cl["content-filter__checkbox"]}
          checked={transferAllTicket}
          onClick={handleClickAllTickets}
        >
          Все
        </Checkbox>
        <Checkbox
          className={cl["content-filter__checkbox"]}
          checked={transferState.nonStopTickets}
          onClick={() => handleClickOtherStatusTickets("nonStop")}
        >
          Без пересадок
        </Checkbox>
        <Checkbox
          className={cl["content-filter__checkbox"]}
          checked={transferState.oneStopTickets}
          onClick={() => handleClickOtherStatusTickets("oneStop")}
        >
          1 пересадка
        </Checkbox>
        <Checkbox
          className={cl["content-filter__checkbox"]}
          checked={transferState.twoStopTickets}
          onClick={() => handleClickOtherStatusTickets("twoStop")}
        >
          2 пересадки
        </Checkbox>
        <Checkbox
          className={cl["content-filter__checkbox"]}
          checked={transferState.threeStopTickets}
          onClick={() => handleClickOtherStatusTickets("threeStop")}
        >
          3 пересадки
        </Checkbox>
      </div>
    </div>
  );
}
