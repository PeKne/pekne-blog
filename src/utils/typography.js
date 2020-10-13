import Typography from "typography";
import Lincoln from "typography-theme-lincoln";
Lincoln.overrideThemeStyles = () => ({
  "a.gatsby-resp-image-link": {
    boxShadow: "none",
  },

  ".site_header": {
    boxShadow: "none",
    textDecoration: "none",
    textTransform: "uppercase",
    color: "black",
    textShadow: "none",
    fontWeight: "bold",
    backgroundImage: "none",
    fontFamily: "Edosz",
  },

  ".post_header": {
    fontFamily: "Amatic",
    backgroundImage: "none",
    color: "orange",
    fontWeight: 600,
  },
});

delete Lincoln.googleFonts;

const typography = new Typography(Lincoln);

// Hot reload typography in development.
if (process.env.NODE_ENV !== "production") {
  typography.injectStyles();
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
