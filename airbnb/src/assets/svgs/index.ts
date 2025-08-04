import logoUrl from "./logo.svg";
import worldIconUrl from "./worldIcon.svg";
import hamIconUrl from "./hamIcon.svg";
import searchIconUrl from "./searchIcon.svg";
import rightArrowUrl from "./RightArrow.svg";
import carouselRightArrowUrl from "./carouselRightArow.svg";
import carouselLeftArrowUrl from "./carouselLeftArrow.svg";
import wishIconUrl from "./wishIcon.svg";
import shareIconUrl from "./shareIcon.svg";
import ratingIconUrl from "./rating.svg";
import redWishIconUrl from "./redWishIcon.svg";
type svgMap = {
  [key: string]: string;
};

const svgs: svgMap = {
  hamIcon: hamIconUrl,
  logo: logoUrl,
  worldIcon: worldIconUrl,
  searchIcon: searchIconUrl,
  rightArrow: rightArrowUrl,
  wishIcon: wishIconUrl,
  carouselLeftArrow: carouselLeftArrowUrl,
  carouselRightArrow: carouselRightArrowUrl,
  shareIcon: shareIconUrl,
  redWishIcon: redWishIconUrl,
  ratingIcon: ratingIconUrl,
};

export const exportSvg = (name: string): string => {
  return svgs[name];
};
