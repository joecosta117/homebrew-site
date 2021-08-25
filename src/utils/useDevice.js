const breakpoints = {
  mobile: 374.98,
  tablet: 767.98,
  desktop: 1023.8,
  wide: 1439.98,
};

const useDevice = () => {
  if (typeof window !== "undefined") {
    if (window.innerWidth >= breakpoints.wide) {
      return "wide";
    } else if (window.innerWidth >= breakpoints.desktop) {
      return "desktop";
    } else if (window.innerWidth >= breakpoints.tablet) {
      return "tablet";
    } else {
      return "mobile";
    }
  }
};

export default useDevice;
