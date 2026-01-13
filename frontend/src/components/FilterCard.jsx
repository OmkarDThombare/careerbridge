import React, { useEffect, useState } from 'react'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { Label } from './ui/label'
import { useDispatch } from 'react-redux'
import { setSearchedQuery } from '@/redux/jobSlice'

const fitlerData = [
  {
    fitlerType: "Location",
    array: ["Delhi NCR", "Bangalore", "Hyderabad", "Pune", "Mumbai"]
  },
  {
    fitlerType: "Industry",
    array: ["Frontend Developer", "Backend Developer", "FullStack Developer"]
  },
  {
    fitlerType: "Salary",
    array: ["0-40k", "42-1lakh", "1lakh to 5lakh"]
  },
]

const FilterCard = () => {
  const [selectedValue, setSelectedValue] = useState('')
  const dispatch = useDispatch()

  const changeHandler = (value) => {
    setSelectedValue(value)
  }

  useEffect(() => {
    dispatch(setSearchedQuery(selectedValue))
  }, [selectedValue])

  return (
    <div className="w-full bg-white p-4 rounded-md shadow-sm">
      <h1 className="font-bold text-lg mb-2">Filter Jobs</h1>
      <hr className="mb-4" />

      <RadioGroup value={selectedValue} onValueChange={changeHandler} className="space-y-6">
        {fitlerData.map((data, index) => (
          <div key={index}>
            <h1 className="font-semibold text-base sm:text-lg mb-2">
              {data.fitlerType}
            </h1>

            {data.array.map((item, idx) => {
              const itemId = `id${index}-${idx}`
              return (
                <div
                  key={itemId}
                  className="flex items-center space-x-3 py-1"
                >
                  <RadioGroupItem value={item} id={itemId} />
                  <Label
                    htmlFor={itemId}
                    className="text-sm sm:text-base cursor-pointer"
                  >
                    {item}
                  </Label>
                </div>
              )
            })}
          </div>
        ))}
      </RadioGroup>
    </div>
  )
}

export default FilterCard
