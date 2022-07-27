import SearchBar from "../components/searchbar";
import Header from "../components/header";
import Image from "next/image";
import Link from "next/link";
import { WalletProps } from "./_app";



//max-w-7xl
//mx-3
export default function Home({ walletProps }: { walletProps: WalletProps }) {
  return (
    <div className="w-full">
      <Header walletProps={walletProps}/>

      <div className="flex justify-center mx-3">
        <div>
          <div className="flex justify-center mt-8 sm:mt-12 xl:mt-16">
              <div className="wrap">
                <div className="neptun">
                  <div className="logo">SNS</div>
                </div>
              </div>
          </div>

          <div className="flex justify-center">
            <div className="text-3xl sm:text-4xl md:text-5xl py-8 xl:py-10">Starknet Name Service</div>
          </div>

          <div className="flex justify-center">
            <div className="pb-12 xl:pb-16 pt-4 xl:pt-5 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold inline-block text-center">Choose your .stark domain for your online identity.</div>
          </div>

          <SearchBar />
        </div>
      </div>
      <div className="flex justify-center bg-white text-2xl sm:text-3xl md:text-4xl font-normal text-slate-500">
        <div className="mx-3">
          <div className="flex justify-center mt-24">
            <div className="text-5xl grad-purple pb-1 inline-block text-center">The first Layer 2 naming service</div>
          </div>
          <div className="text-lg sm:text-2xl md:text-3xl mt-8 sm:mt-16 inline-block text-center max-w-7xl">Upgrades your StarkNet account to display your starkname across profiles, games and applications. </div>
          <div className="flex space-x-16 mt-8 sm:mt-16 justify-center mb-24">
            <div className="border rounded-full p-2 sm:p-5 flex space-x-4">
              <div className="block sm:hidden">
                <Image 
                  src="/bluestark.png"
                  height={35}
                  width={40}
                />
              </div>
              <div className="hidden md:block">
                <Image 
                  src="/bluestark.png"
                  height={45}
                  width={50}
                />
              </div>
              
              <div className="text-xl sm:text-4xl">0x61...298</div>
            </div>

            <div className="arrowAnim scale-50 mt-5 sm:mt-7">
              <div className="arrowSliding">
                <div className="arrow"></div>
              </div>
              <div className="arrowSliding delay1">
                <div className="arrow"></div>
              </div>
              <div className="arrowSliding delay2">
                <div className="arrow"></div>
              </div>
              <div className="arrowSliding delay3">
                <div className="arrow"></div>
              </div>

            </div>
            <div className="border rounded-full p-2 sm:p-5 flex space-x-4">
              <div className="block sm:hidden">
                <Image 
                  src="/starkname_transparent.png"
                  height={35}
                  width={40}
                />
              </div>
              <div className="hidden md:block">
                <Image 
                  src="/starkname_transparent.png"
                  height={45}
                  width={50}
                />
              </div>
              
              <div className="text-xl sm:text-4xl">alex.stark</div>
              
            </div>
          </div>
          
        </div>

      </div>
      <div className="bg-white-custom relative text-2xl sm:text-3xl md:text-4xl font-normal">
        <div className="flex justify-center pt-16 mx-3 font-bold text-starklightred text-5xl">1</div>
        <div className="flex justify-center pt-12 mx-3">
          <div className="text-4xl inline-block text-center">Decentralized, secure and unique</div>
        </div>

        <div className="flex justify-center pb-16 pt-8 mx-3">
          <div className="text-3xl text-center inline-block max-w-7xl">Your starkname is mapped to your account address in <span><Link href="https://goerli.voyager.online/contract/0x06642df6ff8b3bbeee0a87d65d72424a212fd0a09229c238ab1e1fe9e1ccacf0"><a target="_blank" className="text-blue-800">this simple smart contract.</a></Link></span> No one will be able to control it, except you.</div>

        </div>
        {/* <div className="sun absolute -top-10"></div> */}
        <div className="flex justify-center mx-6">
          <hr className="max-w-7xl w-full"></hr>
        </div>
        <div className="flex pt-16 justify-center mx-3 font-bold text-starklightred text-5xl">2</div>
        <div className="flex justify-center pt-12 mx-3">
          <div className="text-4xl inline-block text-center">Collectable</div>
        </div>

        <div className="flex justify-center pb-16 pt-8 mx-3">
          <div className="text-3xl text-center inline-block max-w-7xl">You can register as many starknames as you want. In return, you may collect starkpoints, the native gaming ERC-20 token on StarkNet.</div>

        </div>



      </div>
      {/* <div className="blur">
        <div className="wrapper">
          <div className="toptwo">
            <div className="top"></div>
            <div className="middle"></div>
          </div>
          <div className="midtwo"></div>
          <div className="bottom"></div>
        </div>

      </div> */}
      {/* <div className="ball mt-96"></div> */}

      
      {/* <div className="shadow"></div> */}


     {/*  <div className="relative w-full max-w-lg">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        <div className="m-8 relative space-y-4">
          <div className="p-5 bg-white rounded-lg flex items-center justify-between space-x-8">
            <div className="flex-1">
              <div className="h-4 w-48 bg-gray-300 rounded"></div>
            </div>
            <div>
              <div className="w-24 h-6 rounded-lg bg-purple-300"></div>
            </div>
          </div>
          <div className="p-5 bg-white rounded-lg flex items-center justify-between space-x-8">
            <div className="flex-1">
              <div className="h-4 w-56 bg-gray-300 rounded"></div>
            </div>
            <div>
              <div className="w-20 h-6 rounded-lg bg-yellow-300"></div>
            </div>
          </div>
          <div className="p-5 bg-white rounded-lg flex items-center justify-between space-x-8">
            <div className="flex-1">
              <div className="h-4 w-44 bg-gray-300 rounded"></div>
            </div>
            <div>
              <div className="w-28 h-6 rounded-lg bg-pink-300"></div>
            </div>
          </div>
        </div>
      </div> */}

    </div>
    
  )
}





     