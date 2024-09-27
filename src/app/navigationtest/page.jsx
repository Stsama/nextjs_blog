"use client";

import Link from "next/link"
import { usePathname, useRouter, useSearchParams } from "next/navigation"


const NavigationTestPage = () => {

    // Client Side Navigation
    const pathname = usePathname() // Get the current pathname

    const SearchParams = useSearchParams() // Get the current query
    // const q = SearchParams.get("q") // Get the value of the query parameter "q"

    console.log(q)

    console.log(pathname)
    const router = useRouter()
    const handleClick = () => {
        console.log("Write and Redirect")
        // router.push("/") // Redirect to home page with the router and adding to history
        // router.replace("/") // Redirect to home page with the router without adding to history
        // router.back() // Redirect to previous page
        // router.forward() // Redirect to next page
        router.refresh() // Refresh the page
    }
  return (
    <div>
        <Link href="/" prefetch={false}>Clik here</Link>
        <button onClick={handleClick} >Write and Redirect</button>
    </div>
  )
}

export default NavigationTestPage