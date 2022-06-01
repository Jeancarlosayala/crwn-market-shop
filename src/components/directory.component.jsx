import CategoryItem from "./category-items.component"
import '../styles/directory.styles.scss'

const Directory = ({categories}) => {
  return (
    <div className="directory-container">
      {
        categories.map((category) => {
          return (
            <CategoryItem key={category.id} category={category} />
          )
        })
      }
    </div>
  )
}

export default Directory;