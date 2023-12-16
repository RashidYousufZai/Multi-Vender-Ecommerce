import { Link } from "react-router-dom";
import styles from "../../styles/Styles";
import { navItems } from "../../Static/data";

const Navbar = ({ active }) => {
  return (
    <>
      <div className={`${styles.noramlFlex}`}>
        {navItems &&
          navItems.map((i, index) => (
            <div className="flex">
              <Link
                to={i.url}
                key={i}
                className={`${
                  active === index + 1 ? "text-[#17dd1f]" : "text-[#fff]"
                } font-[500] px-6 cursor-pointer}`}
              >
                {i.title}
              </Link>
            </div>
          ))}
      </div>
    </>
  );
};

export default Navbar;
