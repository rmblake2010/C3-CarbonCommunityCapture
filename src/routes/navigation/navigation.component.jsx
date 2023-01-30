import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import Footer from "../../components/footer/footer.component";

import LOGO from "../../assets/images/c3_nobg.png";

const Navigation = () => {
  return (
    <Fragment>
      <div className="flex justify-between p-4 bg-green-700 m-2 rounded-lg">
        <Link to="/">
          <img
            src={LOGO}
            alt="c3 logo"
            className="object-scale-down h-28 w-28"
          ></img>
        </Link>
        <div>
          <h1 className="mt-10 text-3xl font-bold">
            C3 - Community Carbon Capture
          </h1>
        </div>
        <ul className="flex justify-around">
          <Link className="mt-auto p-2" to="/mission-statement">
            <li>Our Mission</li>
          </Link>
          <Link className="mt-auto p-2" to="/calculator">
            <li>C3 Calculator</li>
          </Link>
          <Link className="mt-auto p-2" to="/newsletter">
            <li>Newsletter</li>
          </Link>
          <Link className="mt-auto p-2" to="/contact-us">
            <li>Contact Us</li>
          </Link>
        </ul>
        <Link to="/auth">Log in</Link>
      </div>
      <Outlet />
      <Footer />
    </Fragment>
  );
};

export default Navigation;
