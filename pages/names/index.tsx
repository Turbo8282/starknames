import { useRouter } from "next/router";
import { useEffect } from "react";

export default function NameIndex() {
    const router = useRouter();
    const name = router.query.name;
    useEffect(() => {
        try {
            router.push("/names/" + name + "/register")
        } catch {
          router.push("/");
        }
      }, []);

    
}