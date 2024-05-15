"use client"

import { useRouter } from "next/navigation"
import { FormEvent, useState } from "react"

export default function Search() {
	const [search, setSearch] = useState("")
    const router = useRouter()
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
        if (search) {
            
            router.push(`/results/${search}`)
        }
        setSearch('')
	}

	return <form onSubmit={handleSubmit}>
        <div className="flex items-center gap-2 sm:gap-3">
        <input 
        type="search" 
        placeholder="search"
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        className="bg-white p-2 w-60  md:w-80 sm:text-xl rounded-md text-black border-none outline-none"
        />
        <button type="submit"
        className="bg-white text-black px-2 py-[7px] sm:py-2   rounded-md active:scale-95 transition-all"> 🔍</button>
        </div>
    </form>
}
