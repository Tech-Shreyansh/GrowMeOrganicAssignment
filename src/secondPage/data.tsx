import React, { useEffect, useState } from "react";
import axios from "axios";
import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";
function Data() {
    interface DataFields {
        userId: number;
        id: number;
        title: string;
        body: string;
    }

    const [x,setx] = useState([])
    var data:DataFields[] = []

    async function name() {
        await axios.get("https://jsonplaceholder.typicode.com/posts",{responseType:"json"}).then((res) => {
        setx(res.data)
        });  
    }
    useEffect(()=>{name()},[])

    const column: GridColDef[] = [
        { field: "userId", headerName: "User Id", width: 300 },
        { field: "title", headerName: "title", width: 300 },
        { field: "body", headerName: "body", width: 300 },
    ];

    x.map((box:any)=>{
        var instance  = {
                userId: box.userId,
                id: box.id,
                title: box.title,
                body: box.body,
        }
        data.push(instance)
    })
    const rows: GridRowsProp = data;
    return (
    <div id="data">
      <DataGrid rows={rows} columns={column} />
    </div>
    );
}

export default Data;
