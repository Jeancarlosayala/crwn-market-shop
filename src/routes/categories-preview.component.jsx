import { Fragment, useContext } from "react";
import CategoryPreview from "../components/category-preview.component";
import { CategoriesContext } from "../context/categories.context";

const CategoriesPreview = () => {

  const { categoriesMap } = useContext(CategoriesContext)

  return (
    <Fragment className="categories-preview-container">
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return <CategoryPreview key={title} title={title} products={products} />
      })}
    </Fragment>
  )
}

export default CategoriesPreview;