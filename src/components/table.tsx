import { Table, TableBody,TableContainer,TableHead, TableCell, TableRow, Paper } from "@mui/material";

export const MuiTable = ()=>{
    return(
        <TableContainer component={Paper} sx={{maxHeight:'200px'}}>
            <Table stickyHeader>
                <TableHead>
                    <TableRow>
                        <TableCell>First Name</TableCell>
                        <TableCell>Last Name</TableCell>
                        <TableCell>Email </TableCell>
                        <TableCell> Gender</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tableData.map((item)=>(
                        <TableRow key={item.id}>
                            <TableCell>{item.first_name}</TableCell>
                            <TableCell>{item.last_name}</TableCell>
                            <TableCell>{item.email}</TableCell>
                            <TableCell>{item.gender}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

const tableData = [{
    "id": 1,
    "first_name": "Kort",
    "last_name": "Moyers",
    "email": "kmoyers0@1688.com",
    "gender": "Male",
    "ip_address": "219.255.26.206"
  }, {
    "id": 2,
    "first_name": "Ingrim",
    "last_name": "Nann",
    "email": "inann1@elpais.com",
    "gender": "Bigender",
    "ip_address": "29.27.129.107"
  }, {
    "id": 3,
    "first_name": "Jaclin",
    "last_name": "Raiker",
    "email": "jraiker2@tiny.cc",
    "gender": "Female",
    "ip_address": "94.148.95.118"
  }, {
    "id": 4,
    "first_name": "Mateo",
    "last_name": "Weth",
    "email": "mweth3@ehow.com",
    "gender": "Male",
    "ip_address": "103.235.247.157"
  }, {
    "id": 5,
    "first_name": "Amalle",
    "last_name": "Dundon",
    "email": "adundon4@flavors.me",
    "gender": "Female",
    "ip_address": "204.35.160.101"
  }]