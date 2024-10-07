const Expressions_In_JSX = () => {
  const myName = "Azizzle developer";
  const multiply = (a, b) => a * b;
  const specialClass = "special-class";
  return (
    <>
       <h1>{myName}</h1>
       <h2>2 * 4 = {multiply(2, 4)}</h2>
       <p>My Friends List: {[" Bobur", " Doston", " HuXn"]}</p>
       <p>5 * 5 = {5 * 5}</p>
       <h3 className={specialClass}>This is class</h3>
    </>
  )
}

export default Expressions_In_JSX