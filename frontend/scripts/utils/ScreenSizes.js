const isMobile = screen.width <= 414;
const isTablet = screen.width < 1280 && screen.width > 414;
const isDesk = screen.width >= 1280;

export {
    isMobile, 
    isTablet, 
    isDesk
}