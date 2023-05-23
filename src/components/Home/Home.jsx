import axios from "axios";
import React, { useEffect, useState } from "react";
import hash from "../../utils";
const apiKey = import.meta.env.VITE_PUBLIC_KEY;
import ProgressBar from "../ProgressBar/ProgressBar";
import Card from "../Card/Card";
import Pagination from "../Pagination/Pagination";
import { Link } from "react-router-dom";

const dataFalse = [
	{
		id: 1,
		name: "Iron Man",
		image:
			"https://th.bing.com/th/id/R.cbb90ed0829bd8170cc1f7d2742cd5f5?rik=IiNd5abM1IYE5A&riu=http%3a%2f%2fimages5.fanpop.com%2fimage%2fphotos%2f31800000%2fIron-Man-iron-man-3-31868069-1600-1200.jpg&ehk=f46CLrSD16BzkwfuLDaMT74%2fxp0jjvhbaL%2bbmihaJlY%3d&risl=&pid=ImgRaw&r=0",
		comics: ["Una", "Dos", "Tres"],
		peliculas: ["Una", "Dos", "Tres", "Cuatro"],
	},
	{
		id: 2,
		name: "Spider-Man",
		image:
			"https://th.bing.com/th/id/R.ad8290ef5ee431665c46a47ae82ceb7b?rik=4N%2bjy3HT5jWlBw&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f08%2fFree-Download-Spiderman-Wallpaper.jpeg&ehk=AG97Yp5Kt3wNAQjVN0jC8Sx3tK2RtahOiv1NLNDaBww%3d&risl=&pid=ImgRaw&r=0",
		comics: [
			"The Amazing Spider-Man",
			"Ultimate Spider-Man",
			"Spider-Man: Blue",
		],
		peliculas: [
			"Spider-Man: Homecoming",
			"Spider-Man: Far From Home",
			"Spider-Man: No Way Home",
		],
	},
	{
		id: 3,
		name: "Captain America",
		image:
			"https://th.bing.com/th/id/R.891a6fab9218ad9319933ef7941dec93?rik=1o7dXYY30hgNgQ&riu=http%3a%2f%2fimages5.fanpop.com%2fimage%2fphotos%2f26900000%2fCaptain-America-captain-america-26956567-1600-1200.jpg&ehk=%2bZrFg5OATaAovgKiMKw9PqnmSyzBFQJvJylEuHd7Gw0%3d&risl=&pid=ImgRaw&r=0",
		comics: [
			"Captain America: The First Avenger",
			"Captain America: Winter Soldier",
			"Captain America: Civil War",
		],
		peliculas: [
			"Captain America: The First Avenger",
			"Captain America: The Winter Soldier",
			"Captain America: Civil War",
		],
	},
	{
		id: 4,
		name: "Thor",
		image:
			"https://th.bing.com/th/id/OIP.NRpBYRyJEUbDddPGdYM5egHaKm?pid=ImgDet&rs=1",
		comics: ["Thor #1", "The Mighty Thor #337", "Thor: God of Thunder #1"],
		peliculas: ["Thor", "Thor: The Dark World", "Thor: Ragnarok"],
	},
	// Agrega aquí los demás elementos con sus respectivas URLs de imagen
	{
		id: 5,
		name: "Black Widow",
		image:
			"https://th.bing.com/th/id/OIP.nXG_OfR0Sa3BApi_h4JQMAHaEK?pid=ImgDet&rs=1",
		comics: [
			"Black Widow: The Name of the Rose",
			"Black Widow: Widow's Sting",
			"Black Widow: No More Secrets",
		],
		peliculas: ["Black Widow", "Avengers: Endgame"],
	},
	{
		id: 6,
		name: "Hulk",
		image:
			"https://th.bing.com/th/id/OIP.-rbjj-LP2w6KTo0xARlHygHaEm?pid=ImgDet&rs=1",
		comics: ["Incredible Hulk #1", "Planet Hulk", "Indestructible Hulk #1"],
		peliculas: ["The Incredible Hulk", "Avengers", "Thor: Ragnarok"],
	},
	{
		id: 7,
		name: "Black Panther",
		image:
			"https://th.bing.com/th/id/R.81c77927e65ebc6a462ce5e4ff4ac594?rik=HbV3pkUeW5HVQQ&pid=ImgRaw&r=0",
		comics: [
			"Black Panther #1",
			"Black Panther: A Nation Under Our Feet",
			"Black Panther: World of Wakanda",
		],
		peliculas: ["Black Panther", "Avengers: Infinity War", "Avengers: Endgame"],
	},
	{
		id: 8,
		name: "Iron Man",
		image:
			"https://th.bing.com/th/id/R.cbb90ed0829bd8170cc1f7d2742cd5f5?rik=IiNd5abM1IYE5A&riu=http%3a%2f%2fimages5.fanpop.com%2fimage%2fphotos%2f31800000%2fIron-Man-iron-man-3-31868069-1600-1200.jpg&ehk=f46CLrSD16BzkwfuLDaMT74%2fxp0jjvhbaL%2bbmihaJlY%3d&risl=&pid=ImgRaw&r=0",
		comics: ["Una", "Dos", "Tres"],
		peliculas: ["Una", "Dos", "Tres", "Cuatro"],
	},
	{
		id: 9,
		name: "Spider-Man",
		image:
			"https://th.bing.com/th/id/R.ad8290ef5ee431665c46a47ae82ceb7b?rik=4N%2bjy3HT5jWlBw&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f08%2fFree-Download-Spiderman-Wallpaper.jpeg&ehk=AG97Yp5Kt3wNAQjVN0jC8Sx3tK2RtahOiv1NLNDaBww%3d&risl=&pid=ImgRaw&r=0",
		comics: [
			"The Amazing Spider-Man",
			"Ultimate Spider-Man",
			"Spider-Man: Blue",
		],
		peliculas: [
			"Spider-Man: Homecoming",
			"Spider-Man: Far From Home",
			"Spider-Man: No Way Home",
		],
	},
	{
		id: 10,
		name: "Captain America",
		image:
			"https://th.bing.com/th/id/R.891a6fab9218ad9319933ef7941dec93?rik=1o7dXYY30hgNgQ&riu=http%3a%2f%2fimages5.fanpop.com%2fimage%2fphotos%2f26900000%2fCaptain-America-captain-america-26956567-1600-1200.jpg&ehk=%2bZrFg5OATaAovgKiMKw9PqnmSyzBFQJvJylEuHd7Gw0%3d&risl=&pid=ImgRaw&r=0",
		comics: [
			"Captain America: The First Avenger",
			"Captain America: Winter Soldier",
			"Captain America: Civil War",
		],
		peliculas: [
			"Captain America: The First Avenger",
			"Captain America: The Winter Soldier",
			"Captain America: Civil War",
		],
	},
	{
		id: 11,
		name: "Thor",
		image:
			"https://th.bing.com/th/id/OIP.NRpBYRyJEUbDddPGdYM5egHaKm?pid=ImgDet&rs=1",
		comics: ["Thor #1", "The Mighty Thor #337", "Thor: God of Thunder #1"],
		peliculas: ["Thor", "Thor: The Dark World", "Thor: Ragnarok"],
	},
	// Agrega aquí los demás elementos con sus respectivas URLs de imagen
	{
		id: 12,
		name: "Black Widow",
		image:
			"https://th.bing.com/th/id/OIP.nXG_OfR0Sa3BApi_h4JQMAHaEK?pid=ImgDet&rs=1",
		comics: [
			"Black Widow: The Name of the Rose",
			"Black Widow: Widow's Sting",
			"Black Widow: No More Secrets",
		],
		peliculas: ["Black Widow", "Avengers: Endgame"],
	},
	{
		id: 13,
		name: "Hulk",
		image:
			"https://th.bing.com/th/id/OIP.-rbjj-LP2w6KTo0xARlHygHaEm?pid=ImgDet&rs=1",
		comics: ["Incredible Hulk #1", "Planet Hulk", "Indestructible Hulk #1"],
		peliculas: ["The Incredible Hulk", "Avengers", "Thor: Ragnarok"],
	},
	{
		id: 14,
		name: "Black Panther",
		image:
			"https://th.bing.com/th/id/R.81c77927e65ebc6a462ce5e4ff4ac594?rik=HbV3pkUeW5HVQQ&pid=ImgRaw&r=0",
		comics: [
			"Black Panther #1",
			"Black Panther: A Nation Under Our Feet",
			"Black Panther: World of Wakanda",
		],
		peliculas: ["Black Panther", "Avengers: Infinity War", "Avengers: Endgame"],
	},
	{
		id: 15,
		name: "Iron Man",
		image:
			"https://th.bing.com/th/id/R.cbb90ed0829bd8170cc1f7d2742cd5f5?rik=IiNd5abM1IYE5A&riu=http%3a%2f%2fimages5.fanpop.com%2fimage%2fphotos%2f31800000%2fIron-Man-iron-man-3-31868069-1600-1200.jpg&ehk=f46CLrSD16BzkwfuLDaMT74%2fxp0jjvhbaL%2bbmihaJlY%3d&risl=&pid=ImgRaw&r=0",
		comics: ["Una", "Dos", "Tres"],
		peliculas: ["Una", "Dos", "Tres", "Cuatro"],
	},
	{
		id: 16,
		name: "Spider-Man",
		image:
			"https://th.bing.com/th/id/R.ad8290ef5ee431665c46a47ae82ceb7b?rik=4N%2bjy3HT5jWlBw&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f08%2fFree-Download-Spiderman-Wallpaper.jpeg&ehk=AG97Yp5Kt3wNAQjVN0jC8Sx3tK2RtahOiv1NLNDaBww%3d&risl=&pid=ImgRaw&r=0",
		comics: [
			"The Amazing Spider-Man",
			"Ultimate Spider-Man",
			"Spider-Man: Blue",
		],
		peliculas: [
			"Spider-Man: Homecoming",
			"Spider-Man: Far From Home",
			"Spider-Man: No Way Home",
		],
	},
	{
		id: 17,
		name: "Captain America",
		image:
			"https://th.bing.com/th/id/R.891a6fab9218ad9319933ef7941dec93?rik=1o7dXYY30hgNgQ&riu=http%3a%2f%2fimages5.fanpop.com%2fimage%2fphotos%2f26900000%2fCaptain-America-captain-america-26956567-1600-1200.jpg&ehk=%2bZrFg5OATaAovgKiMKw9PqnmSyzBFQJvJylEuHd7Gw0%3d&risl=&pid=ImgRaw&r=0",
		comics: [
			"Captain America: The First Avenger",
			"Captain America: Winter Soldier",
			"Captain America: Civil War",
		],
		peliculas: [
			"Captain America: The First Avenger",
			"Captain America: The Winter Soldier",
			"Captain America: Civil War",
		],
	},
	{
		id: 18,
		name: "Thor",
		image:
			"https://th.bing.com/th/id/OIP.NRpBYRyJEUbDddPGdYM5egHaKm?pid=ImgDet&rs=1",
		comics: ["Thor #1", "The Mighty Thor #337", "Thor: God of Thunder #1"],
		peliculas: ["Thor", "Thor: The Dark World", "Thor: Ragnarok"],
	},
	// Agrega aquí los demás elementos con sus respectivas URLs de imagen
	{
		id: 19,
		name: "Black Widow",
		image:
			"https://th.bing.com/th/id/OIP.nXG_OfR0Sa3BApi_h4JQMAHaEK?pid=ImgDet&rs=1",
		comics: [
			"Black Widow: The Name of the Rose",
			"Black Widow: Widow's Sting",
			"Black Widow: No More Secrets",
		],
		peliculas: ["Black Widow", "Avengers: Endgame"],
	},
	{
		id: 20,
		name: "Hulk",
		image:
			"https://th.bing.com/th/id/OIP.-rbjj-LP2w6KTo0xARlHygHaEm?pid=ImgDet&rs=1",
		comics: ["Incredible Hulk #1", "Planet Hulk", "Indestructible Hulk #1"],
		peliculas: ["The Incredible Hulk", "Avengers", "Thor: Ragnarok"],
	},
	{
		id: 21,
		name: "Black Panther",
		image:
			"https://th.bing.com/th/id/R.81c77927e65ebc6a462ce5e4ff4ac594?rik=HbV3pkUeW5HVQQ&pid=ImgRaw&r=0",
		comics: [
			"Black Panther #1",
			"Black Panther: A Nation Under Our Feet",
			"Black Panther: World of Wakanda",
		],
		peliculas: ["Black Panther", "Avengers: Infinity War", "Avengers: Endgame"],
	},
	{
		id: 22,
		name: "Iron Man",
		image:
			"https://th.bing.com/th/id/R.cbb90ed0829bd8170cc1f7d2742cd5f5?rik=IiNd5abM1IYE5A&riu=http%3a%2f%2fimages5.fanpop.com%2fimage%2fphotos%2f31800000%2fIron-Man-iron-man-3-31868069-1600-1200.jpg&ehk=f46CLrSD16BzkwfuLDaMT74%2fxp0jjvhbaL%2bbmihaJlY%3d&risl=&pid=ImgRaw&r=0",
		comics: ["Una", "Dos", "Tres"],
		peliculas: ["Una", "Dos", "Tres", "Cuatro"],
	},
	{
		id: 23,
		name: "Spider-Man",
		image:
			"https://th.bing.com/th/id/R.ad8290ef5ee431665c46a47ae82ceb7b?rik=4N%2bjy3HT5jWlBw&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f08%2fFree-Download-Spiderman-Wallpaper.jpeg&ehk=AG97Yp5Kt3wNAQjVN0jC8Sx3tK2RtahOiv1NLNDaBww%3d&risl=&pid=ImgRaw&r=0",
		comics: [
			"The Amazing Spider-Man",
			"Ultimate Spider-Man",
			"Spider-Man: Blue",
		],
		peliculas: [
			"Spider-Man: Homecoming",
			"Spider-Man: Far From Home",
			"Spider-Man: No Way Home",
		],
	},
	{
		id: 24,
		name: "Captain America",
		image:
			"https://th.bing.com/th/id/R.891a6fab9218ad9319933ef7941dec93?rik=1o7dXYY30hgNgQ&riu=http%3a%2f%2fimages5.fanpop.com%2fimage%2fphotos%2f26900000%2fCaptain-America-captain-america-26956567-1600-1200.jpg&ehk=%2bZrFg5OATaAovgKiMKw9PqnmSyzBFQJvJylEuHd7Gw0%3d&risl=&pid=ImgRaw&r=0",
		comics: [
			"Captain America: The First Avenger",
			"Captain America: Winter Soldier",
			"Captain America: Civil War",
		],
		peliculas: [
			"Captain America: The First Avenger",
			"Captain America: The Winter Soldier",
			"Captain America: Civil War",
		],
	},
	{
		id: 25,
		name: "Thor",
		image:
			"https://th.bing.com/th/id/OIP.NRpBYRyJEUbDddPGdYM5egHaKm?pid=ImgDet&rs=1",
		comics: ["Thor #1", "The Mighty Thor #337", "Thor: God of Thunder #1"],
		peliculas: ["Thor", "Thor: The Dark World", "Thor: Ragnarok"],
	},
	// Agrega aquí los demás elementos con sus respectivas URLs de imagen
	{
		id: 26,
		name: "Black Widow",
		image:
			"https://th.bing.com/th/id/OIP.nXG_OfR0Sa3BApi_h4JQMAHaEK?pid=ImgDet&rs=1",
		comics: [
			"Black Widow: The Name of the Rose",
			"Black Widow: Widow's Sting",
			"Black Widow: No More Secrets",
		],
		peliculas: ["Black Widow", "Avengers: Endgame"],
	},
	{
		id: 27,
		name: "Hulk",
		image:
			"https://th.bing.com/th/id/OIP.-rbjj-LP2w6KTo0xARlHygHaEm?pid=ImgDet&rs=1",
		comics: ["Incredible Hulk #1", "Planet Hulk", "Indestructible Hulk #1"],
		peliculas: ["The Incredible Hulk", "Avengers", "Thor: Ragnarok"],
	},
	{
		id: 28,
		name: "Black Panther",
		image:
			"https://th.bing.com/th/id/R.81c77927e65ebc6a462ce5e4ff4ac594?rik=HbV3pkUeW5HVQQ&pid=ImgRaw&r=0",
		comics: [
			"Black Panther #1",
			"Black Panther: A Nation Under Our Feet",
			"Black Panther: World of Wakanda",
		],
		peliculas: ["Black Panther", "Avengers: Infinity War", "Avengers: Endgame"],
	},
	{
		id: 29,
		name: "Iron Man",
		image:
			"https://th.bing.com/th/id/R.cbb90ed0829bd8170cc1f7d2742cd5f5?rik=IiNd5abM1IYE5A&riu=http%3a%2f%2fimages5.fanpop.com%2fimage%2fphotos%2f31800000%2fIron-Man-iron-man-3-31868069-1600-1200.jpg&ehk=f46CLrSD16BzkwfuLDaMT74%2fxp0jjvhbaL%2bbmihaJlY%3d&risl=&pid=ImgRaw&r=0",
		comics: ["Una", "Dos", "Tres"],
		peliculas: ["Una", "Dos", "Tres", "Cuatro"],
	},
	{
		id: 30,
		name: "Spider-Man",
		image:
			"https://th.bing.com/th/id/R.ad8290ef5ee431665c46a47ae82ceb7b?rik=4N%2bjy3HT5jWlBw&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f08%2fFree-Download-Spiderman-Wallpaper.jpeg&ehk=AG97Yp5Kt3wNAQjVN0jC8Sx3tK2RtahOiv1NLNDaBww%3d&risl=&pid=ImgRaw&r=0",
		comics: [
			"The Amazing Spider-Man",
			"Ultimate Spider-Man",
			"Spider-Man: Blue",
		],
		peliculas: [
			"Spider-Man: Homecoming",
			"Spider-Man: Far From Home",
			"Spider-Man: No Way Home",
		],
	},
	{
		id: 31,
		name: "Captain America",
		image:
			"https://th.bing.com/th/id/R.891a6fab9218ad9319933ef7941dec93?rik=1o7dXYY30hgNgQ&riu=http%3a%2f%2fimages5.fanpop.com%2fimage%2fphotos%2f26900000%2fCaptain-America-captain-america-26956567-1600-1200.jpg&ehk=%2bZrFg5OATaAovgKiMKw9PqnmSyzBFQJvJylEuHd7Gw0%3d&risl=&pid=ImgRaw&r=0",
		comics: [
			"Captain America: The First Avenger",
			"Captain America: Winter Soldier",
			"Captain America: Civil War",
		],
		peliculas: [
			"Captain America: The First Avenger",
			"Captain America: The Winter Soldier",
			"Captain America: Civil War",
		],
	},
	{
		id: 32,
		name: "Thor",
		image:
			"https://th.bing.com/th/id/OIP.NRpBYRyJEUbDddPGdYM5egHaKm?pid=ImgDet&rs=1",
		comics: ["Thor #1", "The Mighty Thor #337", "Thor: God of Thunder #1"],
		peliculas: ["Thor", "Thor: The Dark World", "Thor: Ragnarok"],
	},
	// Agrega aquí los demás elementos con sus respectivas URLs de imagen
	{
		id: 33,
		name: "Black Widow",
		image:
			"https://th.bing.com/th/id/OIP.nXG_OfR0Sa3BApi_h4JQMAHaEK?pid=ImgDet&rs=1",
		comics: [
			"Black Widow: The Name of the Rose",
			"Black Widow: Widow's Sting",
			"Black Widow: No More Secrets",
		],
		peliculas: ["Black Widow", "Avengers: Endgame"],
	},
	{
		id: 34,
		name: "Hulk",
		image:
			"https://th.bing.com/th/id/OIP.-rbjj-LP2w6KTo0xARlHygHaEm?pid=ImgDet&rs=1",
		comics: ["Incredible Hulk #1", "Planet Hulk", "Indestructible Hulk #1"],
		peliculas: ["The Incredible Hulk", "Avengers", "Thor: Ragnarok"],
	},
	{
		id: 35,
		name: "Black Panther",
		image:
			"https://th.bing.com/th/id/R.81c77927e65ebc6a462ce5e4ff4ac594?rik=HbV3pkUeW5HVQQ&pid=ImgRaw&r=0",
		comics: [
			"Black Panther #1",
			"Black Panther: A Nation Under Our Feet",
			"Black Panther: World of Wakanda",
		],
		peliculas: ["Black Panther", "Avengers: Infinity War", "Avengers: Endgame"],
	},
];

const PAGE_SIZE = 5; // Cantidad de tarjetas por página

const Home = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const [data, setData] = useState([]);

	const getDataApi = async () => {
		const res = await axios.get(
			`https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${apiKey}&hash=${hash}`
		);
		setData(res.data.data.results);
	};
	useEffect(() => {
		getDataApi();
	}, []);
	console.log(data);

	// Cálculo de la paginación
	const totalCards = data?.length;
	const totalPages = Math.ceil(totalCards / PAGE_SIZE);
	const startIndex = (currentPage - 1) * PAGE_SIZE;
	const endIndex = startIndex + PAGE_SIZE;
	const currentCards = data?.slice(startIndex, endIndex);

	// Función para cambiar de página
	const handlePageChange = (pageNumber) => {
		setCurrentPage(pageNumber);
	};

	return (
		<div className="flex justify-center">
			<div className="text-center" style={{ marginTop: "2rem" }}>
				<div className="flex">
					<ProgressBar dataFalse={dataFalse} dataApi={data} />
					<iframe
						width="200"
						height="105"
						src="https://www.youtube.com/embed/VgBKUofIdVo"
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowfullscreen
						style={{
							marginLeft: "2.5rem",
						}}
						className="rounded-md border border-yellow-500"
					></iframe>
					<img
						src="https://th.bing.com/th/id/R.a2c224733ffdc181b0bfd536324d93a1?rik=gIzFArcMNzfy8A&pid=ImgRaw&r=0"
						alt=""
						style={{
							width: "200px",
							marginLeft: "2.5rem",
							height: "105px",
						}}
						className="rounded-md border border-yellow-500"
					/>
				</div>
				<div
					className="flex"
					style={{
						display: "flex",
						marginTop: "1rem",
						alignItems: "center",
					}}
				>
					{currentCards?.map((char, index) => {
						return (
							<Link to={`/modal/${char.id}`}>
								<Card
									name={char.name}
									image={char.thumbnail.path}
									comics={char.comics.available}
									peliculas={char.stories.available}
								/>
							</Link>
						);
					})}
				</div>
				<Pagination
					currentPage={currentPage}
					totalPages={totalPages}
					onPageChange={handlePageChange}
				/>
			</div>
		</div>
	);
};

export default Home;
