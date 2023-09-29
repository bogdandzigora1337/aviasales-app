import cl from "./content-button.module.scss";
import { useDispatch } from "react-redux";
import { moreTickets } from "../../redux/actions";

import { Button } from "antd";

export default function ContentButton() {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(moreTickets());
  };

  return (
    <Button
      type="primary"
      block
      className={cl["content__button"]}
      onClick={handleClick}
    >
      Показать еще 5 билетов!
    </Button>
  );
}
