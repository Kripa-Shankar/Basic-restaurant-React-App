import React from "react";
import Menu from "./menuApi";
import Menucard from "./Menucard";

const Resturant = () => {
  const [menuData, setmenuData] = React.useState(Menu);

  const filterItem = (category) => {
    const updatedList = Menu.filter((curEle) => {
      return curEle.category === category;
    });
    setmenuData(updatedList);
  };

  function All() {
    setmenuData(Menu);
  }
  // useState hooks is used store any data
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          <button
            className="btn-group__item"
            onClick={() => filterItem("breakfast")}
          >
            Breakfast
          </button>
          <button
            className="btn-group__item"
            onClick={() => filterItem("lunch")}
          >
            lunch
          </button>
          <button
            className="btn-group__item"
            onClick={() => filterItem("dinner")}
          >
            Dinner
          </button>
          <button className="btn-group__item" onClick={() => All()}>
            All
          </button>
        </div>
      </nav>
      <Menucard menuData={menuData} />
    </>
  );
};

export default Resturant;
