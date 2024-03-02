// to understand what color is secondary, then you need to look at the
//  tailwind.config.js file located in root folder

const backgroundColors = {
  primary: "transparent",
  secondary: "secondary",
};

const headerBackgroundController = (path: string): string => {
  const { primary, secondary } = backgroundColors;

  switch (path) {
    case "/":
      return primary;
    case "/rooms":
      return primary;
    default:
      return secondary;
  }
};

export { headerBackgroundController };
