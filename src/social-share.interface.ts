export interface PropsSocialShare {
  className?: string;
  options?: PropsOptions;
  url: string;
  urlDescription?: string;
  urlTitle: string;
}

export interface PropsOptions {
  author?: string;
  bgFacebook?: string;
  bgLinkedin?: string;
  bgTwitter?: string;
  bgWhatsapp?: string;
  colorSvgs?: string;
  label?: string;
  labelColor?: string;
  scrollY?: number;
  shareCircle?: string;
  sharePolygon?: string;
  title?: string;
}
