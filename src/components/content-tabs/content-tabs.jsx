import { useDispatch, useSelector } from "react-redux";
import { cheapTicket, fastTicket } from "../../redux/actions";
import { useEffect } from "react";

import { Radio } from "antd";
import "./content-tabs__antd.scss";

import cl from "./content-tabs.module.scss";

export default function ContentTabs() {
  const ticketFilter = useSelector((state) => state.checkboxReducer.filter);
  const ticketCountCheck = useSelector((reducer) => {
    return reducer.checkboxReducer.data.length;
  });

  const dispatch = useDispatch();

  const handleClick = (actionFn) => {
    dispatch(actionFn());
  };

  useEffect(() => {
    ticketCountCheck &&
      (ticketFilter === "cheapest"
        ? handleClick(cheapTicket)
        : handleClick(fastTicket));
  }, [ticketCountCheck]);

  return (
    <>
      {ticketCountCheck ? (
        <div className={cl["content__tabs"]}>
          <Radio.Group
            className={`${cl["content__tabs__radio-group"]}`}
            value={ticketFilter}
          >
            <Radio.Button
              className={cl["content__tabs__button"]}
              value={"cheapest"}
              onClick={() => handleClick(cheapTicket)}
            >
              самый дешевый
            </Radio.Button>
            <Radio.Button
              className={cl["content__tabs__button"]}
              value={"fastest"}
              onClick={() => handleClick(fastTicket)}
            >
              самый быстрый
            </Radio.Button>
          </Radio.Group>
        </div>
      ) : null}
    </>
  );
}
