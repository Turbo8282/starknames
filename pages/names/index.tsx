import { useRouter } from "next/router";
  

export default function NameIndex() {
    const router = useRouter();
    const name = router.query.name;

    router.push("/names/" + name + "/register")
    
}