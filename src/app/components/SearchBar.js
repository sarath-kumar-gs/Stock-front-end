import React,{ useState,useEffect } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { ListStocks } from './ListStocks';
const SearchBar = () => {

    const [stocks, setStocks] = useState([])
    const [search, setSearch]  = useState('')
    const [selectedId, setSelectedId]  = useState(null)

    useEffect(() => {
        axios.get(`https://stock-app-node.herokuapp.com/list?name=${search}`).then(values =>{
            let newArr = values.data.data.map(item =>{
                return {label:item.name, id: item._id}
            })
            setStocks(newArr)
        }).catch(e =>{
                console.log(e)
        })
    }, [])



return (
    <>
        <Autocomplete
            id="stocks"
            options={stocks}
            sx={{ width: 300 }}
            renderInput={(params) => {
                return <TextField {...params} label="Stocks" />
            }}
            onChange= {(event, value) =>{
                if(value) setSelectedId(value.id)
            }}
    />

           {selectedId && <ListStocks id={selectedId} />}
    </>
)
}




export {SearchBar};
