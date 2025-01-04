import React, { useState } from 'react'

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState('')
  const onInputChange = ({ target }) => {
    console.log('Llamo onInputChange: ', target.value)
    setInputValue(target.value)
  }

  const onSubmit1 = (event) => {
    event.preventDefault()
    console.log(inputValue)
    if (inputValue.trim().length <= 1) return
    setInputValue('')
    onNewCategory(inputValue.trim())
  }
  return (
    <form onSubmit={onSubmit1}>
      <input
        type="text"
        name="buscar"
        id="buscar"
        value={inputValue}
        placeholder="Buscar gifs"
        onChange={onInputChange}
      />
    </form>
  )
}
