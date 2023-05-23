import { useState } from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
	const isFirstPage = currentPage === 1;
	const isLastPage = currentPage === totalPages;

	return (
		<div className="flex justify-center mt-4">
			<button
				disabled={isFirstPage}
				onClick={() => onPageChange(currentPage - 1)}
				className="rounded-full bg-gray-800 text-slate-950 bg-yellow-600 disabled:cursor-not-allowed"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M15.75 19.5L8.25 12l7.5-7.5"
					/>
				</svg>
			</button>
			<span className="text-yellow-600 mr-5 ml-5">
				{currentPage}/{totalPages}
			</span>
			<button
				disabled={isLastPage}
				onClick={() => onPageChange(currentPage + 1)}
				className="rounded-full bg-gray-800 text-slate-950 bg-yellow-600 disabled:cursor-not-allowed"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M8.25 4.5l7.5 7.5-7.5 7.5"
					/>
				</svg>
			</button>
		</div>
	);
};

export default Pagination;
