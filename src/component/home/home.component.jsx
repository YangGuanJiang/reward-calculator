import React from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import {createRow} from '../../shared/ultils/tableUtils';

import './home.styles.css';
import Row from "../table-row/table-row.component";

const Home = ({transactions}) => {

    const [tableHead,rows] = createRow(transactions);

    return (
        <div className='Home-table'>
            <TableContainer component={Paper} >
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell />
                            <TableCell>Custom ID</TableCell>
                            {tableHead.map((head) => (
                                <TableCell key={head} align="left">{head}&nbsp;</TableCell>
                            ))}
                            <TableCell>Total</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <Row key={row.customId} row={row} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>

    )
}

export default Home;
