import { SimplePaletteColorOptions } from "@mui/material";
import {
  ColorPartial,
  CommonColors,
  PaletteMode,
  PaletteTonalOffset,
  TypeAction,
  TypeBackground,
  TypeText,
} from "@mui/material/styles/createPalette";

export type OurPaletteColorOptions = SimplePaletteColorOptions & ColorPartial;
export interface OurPaletteOptions {
  primary?: OurPaletteColorOptions;
  secondary?: OurPaletteColorOptions;
  error?: OurPaletteColorOptions;
  warning?: OurPaletteColorOptions;
  info?: OurPaletteColorOptions;
  success?: OurPaletteColorOptions;
  mode?: PaletteMode;
  tonalOffset?: PaletteTonalOffset;
  contrastThreshold?: number;
  common?: Partial<CommonColors>;
  grey?: OurPaletteColorOptions;
  text?: Partial<TypeText>;
  divider?: string;
  action?: Partial<TypeAction>;
  background?: Partial<TypeBackground>;
  getContrastText?: (background: string) => string;
}
