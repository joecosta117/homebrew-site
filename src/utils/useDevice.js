export const BREAKPOINTS = {
  MOBILE: 374.98,
  TABLET: 767.98,
  DESKTOP: 1023.8,
  WIDE: 1439.98,
};

const useDevice = () => {
  if (typeof window !== "undefined") {
    if (window.innerWidth >= BREAKPOINTS.WIDE) {
      return "wide";
    } else if (window.innerWidth >= BREAKPOINTS.DESKTOP) {
      return "desktop";
    } else if (window.innerWidth >= BREAKPOINTS.TABLET) {
      return "tablet";
    } else {
      return "mobile";
    }
  }
};

export default useDevice;
