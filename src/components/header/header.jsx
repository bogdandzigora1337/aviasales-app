import "../header/header.css";
import svgImage from "../../image/Logo.svg";

const svgStyle = {
  width: "31px",
  height: "21px",
  backgroundImage:
    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='31' height='21' viewBox='0 0 31 21' fill='none'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M31.4823 2.95243L1.69132 20.1523C1.69132 20.1523 0.812287 18.5636 0.0792709 17.2939C0.0703969 17.2786 0.0620145 17.263 0.0541139 17.2473C1.40561 17.345 4.12689 17.2351 6.76609 15.7114L27.3906 3.8038C29.6822 2.48074 30.2435 0.767415 30.5526 0.0308803C31.0312 1.31599 31.4823 2.95243 31.4823 2.95243Z' fill='%23DEE1E3'/%3E%3C/svg%3E\")",
};

export default function Header() {
  return (
    <div className="header">
      <img src={svgImage} alt="logo" />
    </div>
  );
}
