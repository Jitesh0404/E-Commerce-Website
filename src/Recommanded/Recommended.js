import Button from "../components/Button";
import "./Recommended.css";
function Recommended({handleClick}) {
  return (
    <>
      <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          <Button onClickHandle={handleClick} value="" title="All Products" />
          <Button onClickHandle={handleClick} value="Nike" title="Nike" />
          <Button onClickHandle={handleClick} value="Adidas" title="Adidas" />
          <Button onClickHandle={handleClick} value="Puma" title="Puma" />
          <Button onClickHandle={handleClick} value="Vans" title="Vans" />
        </div>
      </div>
    </>
  );
}
export default Recommended;
