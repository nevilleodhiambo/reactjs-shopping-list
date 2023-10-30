import React from 'react'
import { useState } from 'react';
import ItemList from './ItemList';

const Content = ({items, handleCheck, handleDelete }) => {
   
  return (
    <main>
        {items.length ? (
            <ItemList
            items={items}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
             />
        ) : (
            <p style={{marginTop:'2rem'}}>List Is Empty</p>
        )}
    </main>
  )
}

export default Content;

// const Content2 = () =>{
//     const[lists, setList] = useState([
//         {
//             id: 1,
//             checked: true,
//             item: "basketball",
//         },
//         {
//             id: 2,
//             checked: false,
//             item: "Badminton",
//         },
//         {
//             id: 3,
//             checked: false,
//             item: "football",
//         },
//     ]);

//     const handleCheck = (id) =>{
//         const listItems = lists.map((list) => list.id === id ? {...list, checked: !list.checked} : list);
//         setList(listItems);
//     }
//     const handleDelete = (id) => {
//         const listItems = lists.filter((list) => list.id !== id);
//         setList(listItems);
//     }

//     return(
//         <main>
//             {lists.length ? (
//             <ul>
//                 {
//                     lists.map((list)=>(
//                         <li key={list.id}>
//                            <input
//                            type="checkbox"
//                            onChange={()=>handleCheck(list.id)}
//                            checked = {list.checked}

//                            />
//                            <label>{list.item}</label>
//                            <button onClick={()=>handleDelete(list.id)}>Delete</button>
//                         </li>
//                     ))
//                 }
//             </ul>
//             ):(
//                 <p>No Fuckin List Motherfucker</p>
//             )}
//         </main>
//     )
// }
// export default Content2;
