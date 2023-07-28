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
          <li
            className="list__item-square font__wg-600 ps__relative"
            key={el.id}
          >
            <NavLink end to={`${el.route}`}>
              {el.id}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SubNavbar;
