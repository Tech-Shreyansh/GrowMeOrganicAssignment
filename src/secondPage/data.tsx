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
        { field: "userId", headerName: "User Id", flex:0.2, hideable:false, headerAlign:"center",align:"center", headerClassName: 'column', },
        { field: "title", headerName: "Title", flex:0.3,  headerAlign:"center",headerClassName: 'column'},
        { field: "body", headerName: "Body", flex:0.5,headerClassName: 'column',  headerAlign:"center"},
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
      <DataGrid 
      sx={{
          '& .MuiDataGrid-cell:hover': {
            color: 'secondary.main',
          },
      }} checkboxSelection={true} pageSize={10} rows={rows} columns={column} />
    </div>
    );
}

export default Data;
