import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import hash from "../../utils";
const apiKey = import.meta.env.VITE_PUBLIC_KEY;

import axios from "axios";

const Modal = () => {
	const { id } = useParams();
	const [open, setOpen] = useState(true);
	const [character, setCharacter] = useState([]);

	const getCharacterById = async () => {
		const res = await axios.get(
			`https://gateway.marvel.com/v1/public/characters/${id}?ts=1&apikey=${apiKey}&hash=${hash}`
		);
		setCharacter(res.data.data.results[0]);
	};

	const cancelButtonRef = useRef(null);

	useEffect(() => {
		getCharacterById();
	}, []);
	console.log(character);
	return (
		<div>
			<Transition.Root show={open} as={Fragment}>
				<Dialog
					as="div"
					className="relative z-10"
					initialFocus={cancelButtonRef}
					onClose={setOpen}
				>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
					</Transition.Child>

					<div className="fixed inset-0 z-10 overflow-y-auto">
						<div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
								enterTo="opacity-100 translate-y-0 sm:scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 translate-y-0 sm:scale-100"
								leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
							>
								<Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
									<div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
										<div className="sm:flex sm:items-start">
											<div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
												<Dialog.Title
													as="h3"
													className="text-base font-semibold leading-6 text-gray-900"
												>
													Character Name{character?.name}
												</Dialog.Title>
												<div className="mt-2">
													<p className="text-sm text-gray-500">
														Description {character.description}
													</p>
													<img
														src={`${character.thumbnail?.path}.jpg`}
														alt={character.name}
														style={{
															width: "150px",
															height: "100px",
															marginTop: "1rem",
														}}
													/>
												</div>
											</div>
										</div>
									</div>
									<div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
										<Link to={"/"}>
											<button
												type="button"
												className="inline-flex w-full justify-center rounded-md bg-yellow-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
												onClick={() => setOpen(false)}
											>
												OK
											</button>
										</Link>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition.Root>
		</div>
	);
};

export default Modal;
