const ProgressBar = ({ dataFalse }) => {
	let cantidadTotalPeliculas = 0;

	dataFalse.forEach((char) => {
		cantidadTotalPeliculas += char.peliculas.length;
	});

	console.log(cantidadTotalPeliculas);

	const filledWidth = `${5 * 10}%`;
	const remainingWidth = `${(1 - 8) * 10}%`;

	return (
		<div
			className="bg-gray-700 border-yellow-600 border rounded-lg "
			style={{ width: "400px", height: "102.35px" }}
		>
			<h1 className="text-yellow-100 text-xs/[5px] mt-2 ml-3">
				PROGRESO DE PELICULAS PRODUCIDAS
			</h1>
			<p className="text-yellow-600 mt-3 ml-48" style={{ fontSize: "8px" }}>
				XX Peliculas Meta de produccion
			</p>
			<div
				className="border-yellow-600 border ml-12"
				style={{
					width: "280px",
					height: "29.1px",
					top: "220.24px",
					transform: "skew(-10deg)",
				}}
			>
				<div
					className="h-4 bg-gray-200 overflow-hidden mt-1 m-auto"
					style={{ width: "260.02px" }}
				>
					<div className="relative h-full">
						<div
							className="h-full bg-cyan-400 absolute top-0"
							style={{ width: filledWidth }}
						/>
						{[...Array(9)].map((_, index) => (
							<div
								key={index}
								className="h-full absolute bg-white border-r border-slate-950"
								style={{ left: `${(index + 1) * 10}%` }}
							/>
						))}
					</div>
					<div
						className="h-full bg-slate-950 absolute top-0"
						style={{ width: remainingWidth }}
					/>
				</div>
			</div>
			<p className="text-cyan-400 mt-3 ml-12" style={{ fontSize: "8px" }}>
				XX Peliculas producidas
			</p>
		</div>
	);
};

export default ProgressBar;
