import { createTheme } from "@mui/material";
import { TypographyOptions } from "@mui/material/styles/createTypography";
import { ComponentOverrides } from "./componentsOverrides";
import { OurPaletteOptions } from "./theme.dto";

const SPACING_FRAGMENT = 8;

export const typographyOverrides: TypographyOptions = {
  fontFamily: "Inter, sans-serif",
  button: {
    textTransform: "capitalize",
  },
  h1: {
    fontSize: "2.0rem",
    fontWeight: 600,
  },
  h2: {
    fontSize: "1.5rem",
    fontWeight: 600,
  },
  h3: {
    fontSize: "1.25rem",
    fontWeight: 600,
  },
  h4: {
    fontSize: "1.0rem",
    fontWeight: 600,
  },
  h5: {
    fontSize: "0.875rem",
    fontWeight: 600,
  },
  h6: {
    fontSize: "0.75rem",
    fontWeight: 600,
  },
  subtitle1: {
    fontSize: "1rem",
    fontWeight: 600,
  },
  subtitle2: {
    fontSize: "1rem",
    fontWeight: 600,
  },
};

const baseLightPallete: OurPaletteOptions = {
  mode: "light",
  background: {
    default: "#f7f8fa",
    paper: "#fff",
  },
  primary: {
    light: "#819C78",
    main: "#3E6E44",
    dark: "#174337",
    contrastText: "white",
    50: "#C0C9B4",
    100: "#A2B296",
    200: "#819C78",
    300: "#5D855B",
    400: "#3E6E44",
    500: "#215732",
    600: "#1C4D36",
    700: "#174337",
    800: "#133836",
    900: "#0F282D",
  },
  secondary: {
    light: "#d1adcd",
    main: "#ac6ca4",
    dark: "#522e4d",
    contrastText: "white",
    50: "#f6eff5",
    100: "#e3cee1",
    200: "#d1adcd",
    300: "#bf8db8",
    400: "#ac6ca4",
    500: "#93538b",
    600: "#72406c",
    700: "#522e4d",
    800: "#311c2e",
    900: "#10090f",
  },
  text: {
    primary: "#215732",
    secondary: "#5D855B",
    disabled: "#819C78",
  },
  grey: {
    light: "#D8D8DF",
    main: "#8F8FA3",
    dark: "#434356",
    contrastText: "white",
    50: "#F7F7F8",
    100: "#EBEBEF",
    200: "#D8D8DF",
    300: "#B9B9C6",
    400: "#8F8FA3",
    500: "#73738C",
    600: "#5A5A72",
    700: "#434356",
    800: "#25252D",
    900: "#131318",
  },
  error: {
    light: "#f2d2d5",
    main: "#bf1e2d",
    dark: "#73121b",
    contrastText: "white",
    50: "#f9e9ea",
    100: "#f2d2d5",
    300: "#e5a5ab",
    400: "#d2626c",
    500: "#bf1e2d",
    600: "#ac1b29",
    700: "#73121b",
    800: "#4c0c12",
    900: "#130304",
  },
  warning: {
    light: "#E6A75C",
    main: "#D1750F",
    dark: "#D35B00",
    contrastText: "white",
    50: "#FFD4B4",
    100: "#F2BF85",
    200: "#E6A75C",
    300: "#DB8E33",
    400: "#D1750F",
    500: "#FF7F00",
    600: "#E96D00",
    700: "#D35B00",
    800: "#BB4900",
    900: "#A43700",
  },
  success: {
    light: "#9CDEC8",
    main: "#4CAF50",
    dark: "#297835",
    contrastText: "white",
    50: "#E8F8E8",
    100: "#C5E1CC",
    200: "#9CDEC8",
    300: "#73CDAC",
    400: "#4CAF50",
    500: "#4CAF50",
    600: "#36903F",
    700: "#297835",
    800: "#1C672B",
    900: "#0F5622",
  },
  info: {
    light: "#03a9f4",
    main: "#0288d1",
    dark: "#01579b",
    contrastText: "white",
    100: "#b7d3fb",
    200: "#a6c9f7",
  },
};

const baseDarkPallete: OurPaletteOptions = {
  mode: "dark",
  background: {
    paper: "#eeeeee",
  },
  primary: {
    light: "#667964",
    main: "#9AAD90",
    dark: "#D9DFC6",
    contrastText: "white",
    50: "#33423B",
    100: "#4C5D4E",
    200: "#667964",
    300: "#80947A",
    400: "#9AAD90",
    500: "#B3C1A6",
    600: "#C6D0B6",
    700: "#D9DFC6",
    800: "#EBEED7",
    900: "#F3F3E8",
  },
  secondary: {
    light: "#d1adcd",
    main: "#ac6ca4",
    dark: "#522e4d",
    contrastText: "white",
    50: "#f6eff5",
    100: "#e3cee1",
    200: "#d1adcd",
    300: "#bf8db8",
    400: "#ac6ca4",
    500: "#93538b",
    600: "#72406c",
    700: "#522e4d",
    800: "#311c2e",
    900: "#10090f",
  },
  text: {
    primary: "#F3F3E8",
    secondary: "#B3C1A6",
    disabled: "#9AAD90",
  },
  grey: {
    light: "#D8D8DF",
    main: "#8F8FA3",
    dark: "#434356",
    contrastText: "white",
    50: "#F7F7F8",
    100: "#EBEBEF",
    200: "#D8D8DF",
    300: "#B9B9C6",
    400: "#8F8FA3",
    500: "#73738C",
    600: "#5A5A72",
    700: "#434356",
    800: "#25252D",
    900: "#131318",
  },
  error: {
    light: "#f2d2d5",
    main: "#bf1e2d",
    dark: "#73121b",
    contrastText: "white",
    50: "#f9e9ea",
    100: "#f2d2d5",
    300: "#e5a5ab",
    400: "#d2626c",
    500: "#bf1e2d",
    600: "#ac1b29",
    700: "#73121b",
    800: "#4c0c12",
    900: "#130304",
  },
  warning: {
    light: "#E6A75C",
    main: "#D1750F",
    dark: "#D35B00",
    contrastText: "white",
    50: "#FFD4B4",
    100: "#F2BF85",
    200: "#E6A75C",
    300: "#DB8E33",
    400: "#D1750F",
    500: "#FF7F00",
    600: "#E96D00",
    700: "#D35B00",
    800: "#BB4900",
    900: "#A43700",
  },
  success: {
    light: "#9CDEC8",
    main: "#4CAF50",
    dark: "#297835",
    contrastText: "white",
    50: "#E8F8E8",
    100: "#C5E1CC",
    200: "#9CDEC8",
    300: "#73CDAC",
    400: "#4CAF50",
    500: "#4CAF50",
    600: "#36903F",
    700: "#297835",
    800: "#1C672B",
    900: "#0F5622",
  },
  info: {
    light: "#03a9f4",
    main: "#0288d1",
    dark: "#01579b",
    contrastText: "white",
    100: "#b7d3fb",
    200: "#a6c9f7",
  },
};

export const theme = createTheme({
  colorSchemes: {
    dark: { palette: baseDarkPallete },
    light: { palette: baseLightPallete },
  },
  typography: typographyOverrides,
  components: ComponentOverrides(),
  shape: {
    borderRadius: 8,
  },
  spacing: SPACING_FRAGMENT,
});
