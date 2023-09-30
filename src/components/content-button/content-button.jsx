import cl from "./content-button.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { moreTickets } from "../../redux/actions";

import { Button } from "antd";

export default function ContentButton() {
  const ticketCountCheck = useSelector((reducer) => {
    return reducer.checkboxReducer.data.length;
  });
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(moreTickets(5));
  };

  return (
    <>
      {ticketCountCheck ? (
        <Button
          type="primary"
          block
          className={cl["content__button"]}
          onClick={handleClick}
        >
          Показать еще 5 билетов!
        </Button>
      ) : null}
    </>
  );
}
