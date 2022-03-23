import { useEffect, useState } from "react";
import { Table, Button } from "reactstrap";


function App() {
	const [data, setData] = useState([]);
	const url = 'https://scratchya.com.ar/react/datos.php'
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
				<td><Button onClick={function borrar() {
					const index = data.map(producto => {
						return producto.codigo === dat.codigo
					})
					data.splice(index, 1)
					var newData = [];
					Object.assign(newData, data);
					setData(newData);
				}}>Borrar</Button></td>
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
						<th>Borrar</th>
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