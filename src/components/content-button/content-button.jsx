import cl from "./content-button.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { moreTickets } from "../../redux/actions";

import { Button } from "antd";

export default function ContentButton() {
  const ticketCountCheck = useSelector((reducer) => {
    return reducer.checkboxReducer.data.length;
  });

  const ticketCountDisplayed = useSelector((reducer) => {
    return reducer.moreTicketsReducer.numberTickets;
  });

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(moreTickets(5));
  };

  const showMoreTicketsText =
    ticketCountCheck > ticketCountDisplayed + 5
      ? "Показать еще 5 билетов!"
      : `Показать еще ${ticketCountCheck % ticketCountDisplayed} билет(-а)`;

  return (
    <>
      {ticketCountCheck >= ticketCountDisplayed ? (
        <Button
          type="primary"
          block
          className={cl["content__button"]}
          onClick={handleClick}
        >
          {showMoreTicketsText}
        </Button>
      ) : null}
    </>
  );
}
