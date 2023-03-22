export interface ColorGradationsInterface {
  default: string
  100: string
  200: string
  300: string
  400: string
  500: string
  600: string
  700: string
  800: string
  900: string
}

export interface ColorsInterface {
  primary: ColorGradationsInterface
  neutral: ColorGradationsInterface
  success: ColorGradationsInterface
  info: ColorGradationsInterface
  warn: ColorGradationsInterface
  error: ColorGradationsInterface
  theme: {
    text: string
    subText: string
    background: string
    relativeNeutral: ColorGradationsInterface
  }
}
