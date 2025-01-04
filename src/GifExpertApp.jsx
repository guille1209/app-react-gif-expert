import { useState } from 'react'

import './styles.css'
import { AddCategory, GifGrid } from './components'

const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One push'])
  console.log(categories)
  const onAddCategory = (newCategory) => {
    console.log(newCategory)
    if (categories.includes(newCategory)) return
    setCategories([newCategory, ...categories])
    //  setCategories(cat => [...cat , 'Guillermo'])
  }
  return (
    <>
      <h1>GitExpertApp</h1>
      {/* Input */}
      <AddCategory
        //onAddCategory={setCategories}
        onNewCategory={(value) => onAddCategory(value)}
      />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  )
}

export default GifExpertApp
