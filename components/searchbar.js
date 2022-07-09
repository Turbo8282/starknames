import Image from "next/image"
export default function SearchBar() {
    return (
        <form className="h-20 border-4 border-slate-300 rounded-3xl hover:border-red-400 flex justify-start items-center xl:h-24">
            <div className="ml-5 mt-2 bg-text-slate-300">
                <Image className="turnred"
                    src="/search-solid.svg"
                    width={30}
                    height={30}
                 />
            </div>
            <div className="text-2xl xl:text-3xl ml-3 text-slate-300 font-light hello relative inline">
                Search names or addresses     
            </div>
            
        </form>
        
    )
}