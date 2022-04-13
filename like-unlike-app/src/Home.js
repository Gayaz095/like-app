import React, {useEffect, useState} from 'react'
import axios from 'axios'

export default function Home() {
    const [filteredArr, setFilteredArr] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [name, setName] = useState([])
    const [data, setData] = useState([])
    useEffect(() => {
        fetchData()
    },[]);

    const fetchData = async() => {
        const res = await axios.get("https://rickandmortyapi.com/api/character")
        const detail = res.data;
        localStorage.setItem('Detail', JSON.stringify(detail));
        setData(res.data.results);
    };

    const handleName = (id) => {
        name.push(data[id-1]);
        localStorage.setItem('Names', JSON.stringify(name));
    };
   
    const searchItems = (searchValue) => {
        setSearchInput(searchValue)
        if (searchInput !== '') {
            const filteredData = data.filter((item) => {
                return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
            })
            setFilteredArr(filteredData)
        }
        else{
            setFilteredArr(data)
        }
    };
  
    return (
    <div>
        <input  style={{ marginLeft: 15, marginTop: 15, padding: 20 }}
        placeholder='Search your character'
        onChange={(e) => searchItems(e.target.value)}
        />
        <div style={{marginLeft: 15}}>
            {
            searchInput.length > 1 ? (
                filteredArr.map((item) => {
                    return (
                        <div key={item.id} style={{ border:'2px solid blue', float:'left', marginRight:'15px', marginBottom:'15px',marginTop:'15px' }} >   
                            <div className="flipCard">
                            <div className="innerCard">
                            <div className="frontCard">
                            <img src={`https://rickandmortyapi.com/api/character/avatar/${item.id}.jpeg`} alt={item.name}/>                 
                        </div>
                        <div className="cardBack">
                                <div>
                                    <h4>Name: {item.name}</h4>
                                    <h4>Gender: {item.gender}</h4>
                                    <h4>Status: {item.status}</h4>
                                    <button onClick={() => handleName(item.id)}>Like</button><br />
                                </div>
                            </div>
                            </div>
                            </div>
                        </div>)
                })
                                        )
                                         :
                                        (
                data.map((item) => {
                    return(
                        <div key={item.id} style={{ border:'2px solid blue', float:'left', marginRight:'15px', marginBottom:'15px',marginTop:'15px' }} >   
                            <div className="flipCard">
                            <div className="innerCard">
                            <div className="frontCard">
                            <img src={`https://rickandmortyapi.com/api/character/avatar/${item.id}.jpeg`} alt={item.name}/>                 
                            <h4 className="bottom-right">{item.name}</h4>
                        </div>
                        <div className="cardBack">
                                <div>
                                    <h4>Name: {item.name}</h4>
                                    <h4>Gender: {item.gender}</h4>
                                    <h4>Status: {item.status}</h4>
                                    <button onClick={() => handleName(item.id)}>Like</button><br />
                                </div>
                            </div>
                            </div>
                            </div>
                        </div>
                            )
                          })    
                                            )
            }
        </div>
    </div>
  )      
};
