import Image from "next/image"
import { useRouter } from "next/router";
import Script from "next/script";
import { useState, useEffect } from "react";

const AnimatedInput = ({placeholder: passedPlaceholder = "", ...passedProps}) => {
    const [placeholder, setPlaceholder] = useState(passedPlaceholder.slice(0, 0));
    const [placeholderIndex, setPlaceholderIndex] = useState(0);

    const handleKeyDown = e => {
        if(e.key === " " || e.key === "," || e.key === "." || e.key === "+" || e.key === "=" || e.key === "`" || e.key === "~" || e.key === "<" || e.key === ">" 
        || e.key === "/" || e.key === "?" || e.key === ";" || e.key === "'" || e.key === "[" || e.key === "]" || e.key === "{" || e.key === "}" || e.key === "|" 
        || e.key === "(" || e.key === ")" || e.key === "!" || e.key === "@" || e.key === "#" || e.key === "$" || e.key === "%" || e.key === "^" || e.key === "&"
        || e.key === "*" ||  e.key === "\\") {
            e.preventDefault();
        }
    }


    useEffect(() => {
        const intr = setInterval(() => {
            setPlaceholder(passedPlaceholder.slice(0, placeholderIndex));
            if (placeholderIndex + 1 > passedPlaceholder.length) {
            } else {
                setPlaceholderIndex(placeholderIndex + 1)
            }
        }, 75);
        return () => {
            clearInterval(intr)
        }
    },);


    return (
        <input onKeyDown={handleKeyDown} {...passedProps} placeholder={placeholder} className="p-3 rounded-3xl border-4 border-slate-300 text-2xl ml-1 relative inline w-full font-light input-searchbar email-id" spellCheck="false" minLength={3} />

    )
};

const NormalInput = ({placeholder, ...passedProps}) => {

    const handleKeyDown = e => {
        if(e.key === " " || e.key === "," || e.key === "." || e.key === "+" || e.key === "=" || e.key === "`" || e.key === "~" || e.key === "<" || e.key === ">" 
        || e.key === "/" || e.key === "?" || e.key === ";" || e.key === "'" || e.key === "[" || e.key === "]" || e.key === "{" || e.key === "}" || e.key === "|" 
        || e.key === "(" || e.key === ")" || e.key === "!" || e.key === "@" || e.key === "#" || e.key === "$" || e.key === "%" || e.key === "^" || e.key === "&"
        || e.key === "*" ||  e.key === "\\") {
            e.preventDefault();
        }
    }


    return (
        <input onKeyDown={handleKeyDown} {...passedProps} placeholder={placeholder} className="animate-pulse p-3 rounded-3xl border-4 border-slate-300 text-2xl ml-1 relative inline w-full font-light input-searchbar email-id" spellCheck="false" minLength={3} />

    )
};


export default function SearchBar() {
    const router = useRouter();

    const onSubmit = event => {
        event.preventDefault();
        router.push("/search/" + encodeURI(event.target[0].value));
        
    }

    return (
        <form onSubmit={onSubmit} className="mb-20 h-20 flex justify-start items-center xl:h-24">
            <AnimatedInput placeholder="Search names or addresses" />

            <button className="ml-3 mt-1" type="submit">
                <Image
                    src="/search-solid.svg"
                    width={30}
                    height={30}
                 />
            </button>
                
            
        </form>
        
    )
}

export function NormalSearchBar() {
    const router = useRouter();

    const onSubmit = event => {
        event.preventDefault();
        router.push("/search/" + encodeURI(event.target[0].value));
        
    }

    return (
        <form onSubmit={onSubmit} className="h-20 flex justify-start items-center xl:h-24">
            <NormalInput placeholder="Search other names or addresses" />

            <button className="ml-3 mt-1" type="submit">
                <Image
                    src="/search-solid.svg"
                    width={30}
                    height={30}
                 />
            </button>
                
            
        </form>
        
    )
}