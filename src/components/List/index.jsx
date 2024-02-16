import React from 'react'

export default function List(props) {
    const {test} = props
  return (
    <li>
        {
            test.map((item) => <li>{item.title}</li>)
        }

    </li>
  )
}
