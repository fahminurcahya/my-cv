
"use client"
import Cv from "@/components/cv";
import { useSearchParams } from "next/navigation";

const CvPage = () => {
    const searchParams = useSearchParams()
    const search = searchParams.get('generate')

    return (
        <Cv isGenerate={search == "true"} />
    );
}

export default CvPage;
