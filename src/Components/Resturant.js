import React from 'react'
import Menu from './menuApi';
import Menucard from './Menucard';
const Resturant = () => {
   
    const [menuData,setmenuData] = React.useState(Menu);

    const filterItem = (category)=> {
         const updatedList= Menu.filter((curEle) => {

            return curEle.category ===category;
         }); 
         setmenuData(updatedList);
    };

    // useState hooks is used store any data 
  return (
   <>
   <nav className="navbar">
      <div className="btn-group">
        <button className='btn-group__item' onclick={() => filterItem("breakfast")}>Breakfast</button>
        <button className='btn-group__item'>lunch</button>
        <button className='btn-group__item'>Dinner</button>
        <button className='btn-group__item'>All</button>
      </div>

   </nav>
   <Menucard menuData={menuData}/>
   </>
  )
}

export default Resturant
