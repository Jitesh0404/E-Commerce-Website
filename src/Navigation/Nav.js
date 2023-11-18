import "./Nav.css";
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
function Nav({handleInputChange}) {
  return (
    <div>
      <nav>
        <div className="nav-container">
          <input
            type="text"
            className="search-input"
            placeholder="Find Your Products"
            onChange={handleInputChange}
          />
        </div>
        <div className="profile-container">
          <a href="">
            <FiHeart className="nav-icons" />
          </a>
          <a href="">
            <AiOutlineShoppingCart className="nav-icons" />
          </a>
          <a href="">
            <AiOutlineUserAdd className="nav-icons" />
          </a>
        </div>
      </nav>
    </div>
  );
}
export default Nav;
