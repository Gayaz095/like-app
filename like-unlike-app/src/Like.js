import React, { useEffect, useState } from 'react'

export default function Like() {
    const [items, setItems] = useState([]);
    
    useEffect(()=>{
      fetchData()
    }
    , [items]);

    function fetchData(){
        const items = JSON.parse(localStorage.getItem('Names'))
        if(items){
            setItems(items)
    }};

    const  remove = (id) =>  {
        for( var i = 0; i < items.length; i++){ 
          let x =items[i]
          if ( x.id === id) { 
              items.splice(i, 1); 
          };
          localStorage.setItem('Names', JSON.stringify(items))
      };
    };

  return (
    <div>
        {
        items.map((item) => {
          return(
            <div key={item.id} >
                    <div>
                        <div className="unlike">
                            <img src={`https://rickandmortyapi.com/api/character/avatar/${item.id}.jpeg`} alt={item.name}/> 
                            <h4 >Name: {item.name}</h4>
                            <h4>Gender: {item.gender}</h4>
                            <h4 >Status: {item.status}</h4> 
                            <button onClick={() => {remove(item.id)}}>Dislike</button>
                        </div>
                    </div>
            </div>
              )
        })
        }
    </div>
  )
};
