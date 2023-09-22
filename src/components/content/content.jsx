import "../content/content.css";

import ContentTabs from "../content-tabs/content-tabs";
import ContentFilter from "../filter-filter/content-filter";
import ContentTicketsList from "../content-tickets-list/content-tickets-list";
import ContentButton from "../content-button/content-button";

export default function Content() {
  return (
    <div className="content">
      <ContentFilter></ContentFilter>
      <div className="main">
        <ContentTabs></ContentTabs>
        <ContentTicketsList></ContentTicketsList>
        <ContentButton></ContentButton>
      </div>
    </div>
  );
}
