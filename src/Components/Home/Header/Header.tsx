import "./Header.scss";
import logo from "../../../Assets/Images/icon.svg";
import rect1 from "../../../Assets/Images/Rectangle 50.svg";
import rect2 from "../../../Assets/Images/Rectangle 51.svg";
import vector from "../../../Assets/Images/Vector.svg";
import search from "../../../Assets/Images/search.svg";
import basket from "../../../Assets/Images/basket.svg";

function Header() {
  return (
    <div className="header flex">
      <div className="left flex">
        <div className="logo flex align-center">
          <img src={logo} alt="icon" width="50" />
          <span className="bold">Haizara</span>
        </div>
        <div className="explore flex">
          <div className="explore__icon flex">
            <div>
              <img src={rect1} alt="rect" />
            </div>
            <div>
              <img src={rect2} alt="rect" />
            </div>
            <div>
              <img src={rect1} alt="rect" />
            </div>
          </div>
          <div>Explore</div>
        </div>
        <ul className="links flex">
          <li>
            <a href="#">Home</a>
            <img src={vector} alt="down-arrow" />
          </li>
          <li>
            <a href="#">Courses</a>
            <img src={vector} alt="down-arrow" />
          </li>
          <li>
            <a href="#">Events</a>
            <img src={vector} alt="down-arrow" />
          </li>
          <li>
            <a href="#">Blog</a>
            <img src={vector} alt="down-arrow" />
          </li>
          <li>
            <a href="#">Pages</a>
            <img src={vector} alt="down-arrow" />
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
      <div className="right flex align-center">
        <form>
          <input type="text" placeholder="What do you want to learn ?" />
          <button type="submit">
            <img src={search} alt="search" />
          </button>
        </form>
        <div className="basket">
          <img src={basket} alt="basket" />
        </div>
        <div className="buttons flex">
          <span className="login">Login</span>
          <span className="signup">Sign Up</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
