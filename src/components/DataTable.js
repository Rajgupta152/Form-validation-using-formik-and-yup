import { TableContainer, Table, TableHead, TableBody, TableCell,TableRow } from "@mui/material";
const DataTable = (props) => {

    // console.log(props.sendData);
    return(
        <div className="table-wrapper">
      <TableContainer>
        <Table>
           <TableHead >
              <TableRow>
                <TableCell style={{color: '#fff', fontSize: '18px'}} className="table-header">Name</TableCell>
                <TableCell style={{color: '#fff', fontSize: '18px'}} className="table-header">Email</TableCell>
                <TableCell style={{color: '#fff', fontSize: '18px'}} className="table-header">Password</TableCell>
                <TableCell style={{color: '#fff', fontSize: '18px'}} className="table-header">Gender</TableCell>
                <TableCell style={{color: '#fff', fontSize: '18px'}} className="table-header">Country</TableCell>
                <TableCell style={{color: '#fff', fontSize: '18px'}} className="table-header">Courses</TableCell>
              </TableRow>
           </TableHead>
           <TableBody>
            {props.sendData.map((item) => (
                        <TableRow style={{backgroundColor: 'rgb(66, 63, 63)'}} key={item.id}>
                            <TableCell style={{color: '#fff', fontSize: '16px'}}>{item.name}</TableCell>
                            <TableCell style={{color: '#fff', fontSize: '16px'}}>{item.email}</TableCell>
                            <TableCell style={{color: '#fff', fontSize: '16px'}}>{item.password}</TableCell>
                            <TableCell style={{color: '#fff', fontSize: '16px'}}>{item.gender}</TableCell>
                            <TableCell style={{color: '#fff', fontSize: '16px'}}>{item.country}</TableCell>
                            <TableCell style={{color: '#fff', fontSize: '16px'}}  >{item.courses + ' '}   </TableCell>
                        </TableRow>
            ))}

           </TableBody>
        </Table>
      </TableContainer>
        </div>
    )
}
export default DataTable;