import SearchBar from "../components/searchbar";
import Header from "../components/header";




export default function Home() {
  return (
    <div className="max-w-7xl w-full mx-3">
      <Header />

      <div className="flex justify-center">
        
        <div>
          <div className="flex justify-center mt-6 xl:mt-10">
              <div className="wrap">
                <div className="neptun">
                  <div className="logo">SNS</div>
                </div>
              </div>
          </div>

          <div className="flex justify-center">
            <div className="text-4xl sm:text-5xl md:text-6xl py-3 xl:py-4 font-medium">Starknet Name Service</div>
          </div>

          <div className="flex justify-center">
            <div className="pb-7 xl:pb-9 pt-3 xl:pt-4 text-3xl sm:text-4xl md:text-5xl">Get your .stark domain for your online identity.</div>
          </div>

          <SearchBar />
        </div>
      </div>
    </div>
    
  )
}





     