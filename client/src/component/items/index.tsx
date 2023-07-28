import React from 'react'



const FoodItems = ({props}: any) => {
    console.log(props)
  return (
    <div>{props.Name}</div>
  )
}

export default FoodItems