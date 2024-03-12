import { items } from "../data/sideBarItems";

const NavigationMenu = () => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.key}>
          <Link to={item.path}>{item.label}</Link>
        </li>
      ))}
    </ul>
  );
};

export default NavigationMenu;
