import React from 'react'

const Lists = () => {
  // Example #1
  const numbers = [1, 2, 3, 4, 5]; 

  // Example #2

    const userInfo= [
        {name: 'John Doe', email: "test@gmail.com", location: "USA", age: 30},
        {name: 'Jane Doe', email: "jane.doe@gmail.com", location: "Arab", age: 25},
        {name: 'Azizbek Doe', email: "azizbek.doe@gmail.com", location: "UZB", age: 28}
    ];
  return (
    <>
        <h1>Lists</h1>
        {/* Number List */}

        {numbers.map((number) => (
            <ul key={Math.random() * 10 }>
                <li>{number}</li>
            </ul>
        ))}

        {/* User List */}

        {userInfo.map(user => (
            <ul key={Math.random() * 10}>
                <li>{user.name}</li>
                <li>{user.email}</li>
                <li>{user.location}</li>
                <li>{user.age}</li>
            </ul>
        ))}
    </>
  )
}

export default Lists