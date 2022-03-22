import { useEffect, useState } from "react";
import { Table } from "reactstrap";


function App() {
	const [data, setData] = useState([]);
	const url = 'http://scratchya.com.ar/react/datos.php'
	const verData = async () => {
		const repuesta = await fetch(url)
		const data = await repuesta.json()
		setData(data);
	}
	useEffect(() => {
		verData()
	}, [])

	const list = data.map(dat => {
		return (
			<tr>
				<td>{dat.codigo}</td>
				<td>{dat.descripcion}</td>
				<td>{dat.precio}</td>
			</tr>
		)
	})

	return (
		<div>
			<Table striped bordered hover>
				<thead>
					<tr>
						<th>Codigo</th>
						<th>Descripción</th>
						<th>Precio</th>
					</tr>
				</thead>
				<tbody>
					{list}
				</tbody>
			</Table>
		</div>

	)
}

export default App;
