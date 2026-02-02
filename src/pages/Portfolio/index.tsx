import { useMediaQuery } from "usehooks-ts";
import { SlideShowWeb, SlideShowMobile } from "@/Components";

export default function Portfolio({ mobileImages, webImages }: { mobileImages: string[], webImages: string[] }) {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const photos = isMobile ? mobileImages : webImages;
  
  return isMobile ? <SlideShowMobile photos={photos}/> : <SlideShowWeb photos={photos}/>;
};
