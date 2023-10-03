import cl from "./content.module.scss";

import ContentTabs from "../content-tabs/content-tabs";
import ContentFilter from "../content-filter/content-filter";
import ContentTicketsList from "../content-tickets-list/content-tickets-list";
import ContentButton from "../content-button/content-button";

export default function Content() {
  return (
    <div className={cl.content}>
      <ContentFilter />
      <div className={cl["content__main"]}>
        <ContentTabs />
        <ContentTicketsList />
        <ContentButton />
      </div>
    </div>
  );
}
