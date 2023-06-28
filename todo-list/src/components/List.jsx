import ListItem from './ListItem'
import Card from 'react-bootstrap/Card';

const List = ({items, setItems}) => {
  const handleDelete = (id)=> {
    setItems(items.filter((element) => id !==  element.id))
  }
  const handleChecked = (id, check)=> {  
      const newArray = items.map((item) => { 
        if (id === item.id){
          return {...item, checked: check}
        }
        else{
          return item
        }
      })
      setItems(newArray)
  }
  const handleEdit = (id,message) => {
    const newArray = items.map((item) =>{
      if (id === item.id){
        return {...item,message: message}
      } else{
        return item
      }
    })
    setItems(newArray)
  }
  return (
    <>
    <Card style={{marginTop: '50px'}}>
      <Card.Header>TO - DO List</Card.Header>
    </Card>
    {items?.map((item) => (
      (<ListItem
        {...item}
        items = {items}
        key={item.id} 
        handleDelete ={handleDelete} 
        handleChecked = {handleChecked} 
        handleEdit = {handleEdit}/>)
    ))}
    </>
  )
}

export default List