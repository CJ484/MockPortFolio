import { Suspense } from "react";
import { Loading, SlideShow } from "@/Components"
import "@/styles/pages/portfolio.scss"

export default function Portfolio({ images }: { images: string[] }) {

    return (
        <Suspense fallback={<Loading />}>
            <div className="portfolioPage">
                <SlideShow photos={images} />
            </div>
        </Suspense>
    );

};
