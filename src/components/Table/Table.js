import { useState } from 'react';
import styles from './Table.scss';
import TablePagination from '@mui/material/TablePagination';
import { useNavigate } from 'react-router-dom';


const Table = (props) => {
	const navigate = useNavigate();
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(10);

	const handleClick = (data) => {
		navigate(`/screener/${data.symbol}`);
	};

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(+event.target.value);
		setPage(0);
	};

	const columns = props.columns.map((col) => {
		return <th key={Math.random() * 100}>{col.toString()}</th>;
	});
	return (
		<div className={styles.container}>
			<table>
				<thead>
					<tr>{columns}</tr>
				</thead>
				<tbody>
					{props.content?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((cont) => {
						return (
							<tr>
								{props.columns.map((item) => (
									<td key={Math.random() * 100} onClick={() => handleClick(cont)}>
										{cont[item]}
									</td>
								))}
							</tr>
						);
					})}
				</tbody>
			</table>
			<TablePagination
				rowsPerPageOptions={[10, 25, 50, 75, 100]}
				component="div"
				count={props.count}
				rowsPerPage={rowsPerPage}
				page={page}
				onPageChange={handleChangePage}
				onRowsPerPageChange={handleChangeRowsPerPage}
				sx={{ background: '#3A444B', color: '#6FA61A' }}
			/>
		</div>
	);
};

export default Table;