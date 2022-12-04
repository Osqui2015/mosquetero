import { Link } from "react-router-dom";
import Card from "./Card";
const Cards = () => {
  return (
    <>
      <div className="card p-3">
        <hr />

        <hr />

        <div
          className="card-body text-white"
          style={{ backgroundColor: "#FE6848" }}
        >
          <p className="fs-3 fw-bold">MAS EVENTOS </p>
          <Link to="/AddShows" className="text-white">
            Add Shows
          </Link>
        </div>
        <br />
        <div className="row row-cols-2 row-cols-lg-5">{<Card />}</div>
        <hr />
        <br />
      </div>
    </>
  );
};

export default Cards;