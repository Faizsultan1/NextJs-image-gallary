import React from "react"

const loading = () => {
	const dummy = Array.from({ length: 15 })
	return (
		<div className="px-2 my-3 grid grid-cols-gallery gap-2">
			{dummy.map((item, i) => (
				<div key={i} className="h-64 bg-gray-200 rounded-xl animate-pulse"></div>
			))}
		</div>
	)
}

export default loading
