import { useDispatch, useSelector } from "react-redux";
import { Checkbox } from "antd";
import cl from "./content-filter.module.scss";
import { allTickets, toggleCheckbox } from "../../redux/actions";

export default function ContentFilter() {
  const dispatch = useDispatch();
  const { transferAllTicket, transferState } = useSelector(
    (res) => res.checkboxReducer
  );

  const handleClickAllTickets = () => {
    dispatch(allTickets());
  };

  const handleClickOtherStatusTickets = (action) => {
    dispatch(toggleCheckbox(action));
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
