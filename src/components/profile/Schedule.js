import React from 'react'
import { Table } from 'reactstrap';

function timeStatus(time) {
    time.forEach(e => {
        return e
        // return { e } === 0 ? <td  style={{ backgroundColor: "red" }}></td> : <td></td>
    })
    
}
const days = [
    "Pzt", "Sal", "Çar", "Per", "Cum", "Cmt", "Paz"
]
export default function Schedule(props) {
    

    return (
        <Table responsive>
            <thead>
                <tr>
                    <th>#</th>
                    {days.map(day =>
                        <th>{day}</th>
                    )
                    }
                </tr>
            </thead>
            <tbody>
                {props.data.map(elem => {
                    return (
                        <tr key={elem.id}>
                            <th scope="row">{elem.time}</th>
                            <td  style={{ backgroundColor: "red" }}></td>
                            <td  style={{ backgroundColor: "red" }}></td>
                            <td></td>
                            <td  style={{ backgroundColor: "red" }}></td>
                            <td  style={{ backgroundColor: "red" }}></td>
                            <td  style={{ backgroundColor: "red" }}></td>
                            <td></td>
                            {/* {timeStatus(elem.available)} */}
                        </tr>
                    )
                })}
            </tbody>
        </Table >
    )
}

