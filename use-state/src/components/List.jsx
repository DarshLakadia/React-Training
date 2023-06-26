function List({todo}) {
  return (
    <>
    <h3>todo</h3>
    {todo.map((element)=> (
      <div key={element.id}>
        {element.title}
      </div>
    ))}
    </>
  )
}
export default List;
