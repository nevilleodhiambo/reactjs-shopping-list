import React, { useState } from 'react'

const Sport = () => {
    const[sports, setSport] = useState([
        {
            id: 1,
            checked:false,
            type:"basketball",
        },
        {
            id: 2,
            checked:false,
            type:"volleyball",
        },
        {
            id: 3,
            checked:false,
            type:"chess",
        },
    ]);
    const handleDelete = (id) =>{
        const listsports = sports.filter((sport)=> sport.id !== id);
        setSport(listsports);
        localStorage.setItem('shoppinglist', JSON.stringify(listsports));
    }
    const handleCheck =(id) =>{
       const listsports = sports.map((sport)=> sport.id === id ? {...sport, checked : !sport.checked}:sport);
       setSport(listsports) 
       localStorage.setItem('sportssave', JSON.stringify(listsports));
    }
    const[newSport, setNewSport] = useState('');

    const addSport = (sport) =>{
        const id = sports.length ? sports[sports.length - 1].id + 1:1;
        const newSportAdd = {id, checked:false, sport}
        const listSport = [...sport, newSportAdd];
        setNewSport(listSport);
        localStorage.setItem('sportslists', JSON.stringify(listSport));
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(!newSport) return;

        //addSport
        addSport(newSport)
        setNewSport('');
        console.log('submitted');
    }
  return (
    <main>
       
       
        <ul>
            {
                sports.map((sport)=>(
                    <li key={sport.id}>
                        <input 
                        type='checkbox'
                            checked = {sport.checked}
                            onChange={()=>handleCheck(sport.id)}
                        />
                        <label>{sport.type}</label>
                        <button onClick={()=>handleDelete(sport.id)}>Delete</button>
                    </li>
                ))
            }
        </ul>
        <form onSubmit={handleSubmit}>
            <label htmlFor='AddSport'>Add Sport</label><br></br>
            <input 
                type='text'
                value={newSport}
                onChange={(e)=>setNewSport(e.target.value)}
            />
            <button type='submit'>Add Sport</button>
        </form>
    </main>
  )
}

export default Sport