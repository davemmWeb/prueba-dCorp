import { styled } from "styled-components";

const Card = ({ name, image, comics, peliculas }) => {
	const Image = styled.div`
		.circle-animation {
			position: relative;
			overflow: hidden;
		}
		.circle-animation::before {
			content: "";
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			border-radius: 50%;
			border: 1px dashed rgba(0, 0, 0, 0.3);
			animation: rotateLines 2s linear infinite;
			pointer-events: none;
		}

		@keyframes rotateLines {
			0% {
				transform: rotate(0deg);
			}
			100% {
				transform: rotate(360deg);
			}
		}
		.circle-animation:hover::before {
			animation-play-state: paused;
		}
	`;
	return (
		<article
			className="rounded-md border p-4 mr-5 text-center h-72"
			style={{
				backgroundImage: "url(../../../fondoCard.png)",
				backgroundSize: "cover",
				backgroundPosition: "center",
				width: "160px",
				backgroundColor: "rgba(0, 0, 0, 0.6)",
			}}
		>
			<div className="flex items-center gap-4">
				<img src="../../../vectorL.png" alt="left" />
				<p className="text-yellow-700 text-xs/[10px]">{name}</p>
				<img src="../../../vectorR.png" alt="right" />
			</div>

			<Image>
				<img
					alt="Image"
					src={`${image}.jpg`}
					className="h-16 w-16 rounded-full object-cover hover:bg-"
					style={{ margin: "auto", marginTop: "2rem" }}
				/>
			</Image>

			<ul className="mt-4 space-y-2">
				<li>
					<a
						href="#"
						className="block h-full rounded-lg border border-gray-700 p-4 hover:border-yellow-600"
					>
						<h1 className="mt-1 text-xs font-medium text-yellow-300">
							Comics: {comics}
						</h1>
					</a>
				</li>
				<li>
					<a
						href="#"
						className="block h-full rounded-lg border border-gray-700 p-4 hover:border-yellow-600"
					>
						<h1 className="mt-1 text-xs font-medium text-yellow-300">
							Peliculas : {peliculas}
						</h1>
					</a>
				</li>
			</ul>
		</article>
	);
};
export default Card;
