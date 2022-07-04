import React,{ useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';

const ListStocks = (props) => {
    const selectedId = props.id

    const [data, setData] = useState([])

    useEffect(() => {
        console.log(data)
    }, [data])
    
    useEffect(() => {
        axios.get(`https://stock-app-node.herokuapp.com/list/${selectedId}`).then(values =>{
         setData(values.data.data)
        }).catch(e =>{
                console.log(e)
        })
    }, [selectedId])
    

    return (
        <div>
            <TableContainer>
                {data.name}
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Market cap</TableCell>
                        <TableCell align="right">Divident Yield</TableCell>
                        <TableCell align="right">Debt quilty</TableCell>
                        <TableCell align="right">Current Price</TableCell>
                        <TableCell align="right">ROCE</TableCell>
                        <TableCell align="right">Eps</TableCell>
                        <TableCell align="right">Stock P/E</TableCell>
                        <TableCell align="right">ROE/</TableCell>
                        <TableCell align="right">Reserves/</TableCell>
                        <TableCell align="right">Debts</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow
                        // key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell align="right">{data.market_cap}</TableCell>
                        <TableCell align="right">{data.dividend_yield}</TableCell>
                        <TableCell align="right">{data.debt_equity}</TableCell>
                        <TableCell align="right">{data.current_market_price}</TableCell>
                        <TableCell align="right">{data.roce}</TableCell>
                        <TableCell align="right">{data.eps}</TableCell>
                        <TableCell align="right">{data.stock}</TableCell>
                        <TableCell align="right">{data.roe_previous}</TableCell>
                        <TableCell align="right">{data.reserves}</TableCell>
                        <TableCell align="right">{data.debt}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
           </TableContainer>
        </div>
    )
}




export {ListStocks};