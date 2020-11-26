import { ChangeEvent, useState } from 'react'

export const useInput = (initialState: any) => {
  const [value, setValue] = useState(initialState)

  const handleChangeValue = (event:ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    return setValue(value)
  }
  return [value, handleChangeValue]
}
