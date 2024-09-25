import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import { useEffect, useState } from 'react';
import Additem from "./Additem";
import Search  from "./Search";
import axios from "axios";
function App() {

const [items,Setitems] = useState(
  [
       {
            id:"1",
            checked:false,
            item:"Learningreact"
       },
       {
            id:"2",
            checked:false,
            item:"Learning MongoDb"
       },
       {
            id:"3",
            checked:false,
            item:"Placements"
       },
       {
            id:"4",
            checked:false,
            item:"Learning  Subjects"
       }
  ]
);

     const [search,SetSearch] = useState(' ')
     const [addItem,SetAddItems] = useState('')

  
     const newItem = (item) => {
          const id = items.length ? items[items.length - 1].id + 1 : 1;
          const newItems = [...items, { id, checked: false, item }];
          Setitems(newItems);
          localStorage.setItem("DO-TO list", JSON.stringify(newItems));
        }


        useEffect(() => {
          const fetchItems = async () => {
            try {
              const response = await axios.get('http://localhost:6969/TaskIndex');
              Setitems(response.data);
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          };
          fetchItems();
        }, []);
        


      
const HandelCheck = (id) =>{
   const listitems = items.map((item) =>
        item.id===id ? {...item , checked : !item.checked} :item)
         Setitems(listitems)
        localStorage.setItem("To-do list",JSON.stringify(listitems))
   }



const HandelDelete =  (id) =>{
  const listitems = items.filter((item) =>
       item.id !==id)
       Setitems(listitems)
     localStorage.setItem("To-do list",JSON.stringify(listitems))
}

// const HandelSubmit =  (e) =>{
   
//   e.preventDefault()     
//   if(!addItem) 
//   console.log(addItem)
//   newItem(addItem)
//    SetAddItems('')          
// }



const HandelSubmit =  async (e) =>{   e.preventDefault()     
  if(!addItem) 
  console.log(addItem);
  const newTask ={
    id:items.length+1,
    item:addItem,
    checked:false
  };
  try {
    const res = await axios.post("http://localhost:6969/Create",newTask);
    Setitems([...items,res.data])
    SetAddItems('')
  } catch (error) {
    console.error({msg :error.msg});
    
  }        
}

  return (
   <div className="App">
      <Header />
      <Additem 
      addItem = {addItem}
      SetAddItems = {SetAddItems}
      HandelSubmit ={HandelSubmit}
      />
      <Search 
      Search = {search}
      SetSearch = {SetSearch}
      />
      <Content
      items = {items.filter(
          (item) => (item.item)
      )}
      HandelCheck = {HandelCheck}
      HandelDelete  =  {HandelDelete}
      
      />
      <Footer
      length = {items.length}
      />
      
    </div>
  );
}


export default App;

