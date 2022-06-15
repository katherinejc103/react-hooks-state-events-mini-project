import React from "react";

function CategoryFilter({categories, selected, onClickAll}) {
  const categoriesRendered = categories.map(category => <button key={category} className={selected === category ? 'selected' : ""} > {category} </button> );
  

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoriesRendered}
      {onClickAll}
    </div>
  );
}

export default CategoryFilter;
