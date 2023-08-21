import React from 'react'

const Menucard = ({menuData}) => {
    // console.log(menuData);
    // let mystyle={color: "red"};
 return (
    <>
    <section className="main-card--cointainer">
   {menuData.map((currElem)=>{
    return (
    <> 
    <div className="card-container">
          <div className="card">
              <div className="card-body">
                  <span className="card-number card-circle subtle">{currElem.id}</span>
                  <h2 className="card-title">{currElem.name}</h2>
                 <span className="card-author subtle">{currElem.category}</span><br></br>
                 <span className="card-description subtle"> 
                 {currElem.description}
                  </span>
                  <span className="card-read">Read</span>
              </div>
      
          </div>
          <div>
              <img src={currElem.image} alt="images" className="card-media" />
              <span className="card-tag subtle">Order Now</span>
      
          </div>
      
        </div>
        
    </>
    );
    
   })}

</section>
   </>
   
 );
  
}

export default Menucard
