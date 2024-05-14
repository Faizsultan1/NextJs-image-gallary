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
        <input 
        type="search" 
        placeholder="search"
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        className="bg-white p-2 w-[260px] md:w-80 text-xl rounded-xl text-black"
        />
    </form>
}
