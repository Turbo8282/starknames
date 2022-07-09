import Link from "next/link";
import Image from "next/image";
import SearchBar from "../components/searchbar";
export default function Home() {
  
  return (
    <div className="flex justify-center">
      <div>
        <div className="flex justify-center mt-12 xl:mt-16">
          <div className="wrap">
            <div className="neptun">
              <div className="logo">SNS</div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="text-6xl py-3 xl:py-4 font-medium">Starknet Name Service</div>

        </div>
        <div className="flex justify-center">
          <div className="pb-7 xl:pb-9 pt-3 xl:pt-4 text-5xl">Get your .stark domain for your online identity.</div>

        </div>
          <SearchBar />


        
      </div>
      
      
    </div>
    
  )
}


/* <div className="h-screen flex items-center justify-center">
          <div className="relative w-full max-w-lg">
            <div className="absolute top-0 -left-4 w-72 h-72 bg-red-500 rounded-full mix-blend-multiply filter blur-2xl animate-blob"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-2xl animate-blob animation-delay-2000"></div>
          </div>
      </div> */



     