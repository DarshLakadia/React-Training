const ListItem = ({items, setItems}) => {
  const handleDelete = (e)=> {
    setItems(items.filter((element) => e.target.id !==  element.id))
  }

  return (
    <>
    TO - DO List
    {items?.map((item) => (
      <div className="item-container"  key={item.id} >
        <div className="item-message">
          <input type="checkbox" name="checked" />
          {item.message}
          
          <button id={item.id} onClick={handleDelete}>Delete</button>
        </div>
      </div>
    ))}
    </>
  )
}

export default ListItem