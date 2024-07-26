export type Color = {
  /** The color id */
  id: number;

  /** The name of this color */
  name: string;

  /** The base RGB color */
  base_rgb: [number, number, number];

  /** Color categories */
  categories: string[];

  /** Appearance on cloth */
  cloth: ColorMaterial;

  /** Appearance on fur */
  fur?: ColorMaterial;

  /** Appearance on leather */
  leather: ColorMaterial;

  /** Appearance on metal */
  metal: ColorMaterial;

  /** Item id of the dye */
  item?: number;
};

type ColorMaterial = {
  /** Brightness of the color */
  brightness: number;

  /** Contrast of the color */
  contrast: number;

  /** HSL hue of the color */
  hue: number;

  /** HSL lightness of the color */
  lightness: number;

  /** HSL saturation of the color */
  saturation: number;

  /** Precalculated RGB color */
  rgb: [number, number, number];
};
