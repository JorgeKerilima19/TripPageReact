import { NavLink } from "react-router-dom";
const tripNavbarItems = [
  {
    id: "Information",
    route: "",
  },
  {
    id: "Tour Plan",
    route: "./tourPlan",
  },
  {
    id: "Location",
    route: "./location",
  },
  {
    id: "Gallery",
    route: "./gallery",
  },
  {
    id: "Reviews",
    route: "./reviews",
  },
];

const SubNavbar = () => {
  return (
    <nav className="ps__absolute subNavbar">
      <ul className="flex__list">
        {tripNavbarItems.map((el) => (
          <li className="list__item-square font__wg-600" key={el.id}>
            <NavLink
              to={`${el.route}`}
              activeclassname="list__item-square__active"
            >
              {el.id}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SubNavbar;
