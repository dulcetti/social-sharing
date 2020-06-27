export interface PropsSocialShare {
  className?: string;
  options?: PropsSvg;
  textButton?: string;
  title?: string;
  url: string;
  urlDescription?: string;
  urlTitle: string;
}

export interface PropsSvg {
  label?: string;
  social?: SocialMedias;
  text?: string;
}

interface SocialMedias {
  author?: string;
  facebook?: Colors;
  linkedin?: Colors;
  share?: {
    circle?: string;
    polygon?: string;
  };
  twitter?: Colors;
  whatsapp?: Colors;
}

interface Colors {
  bg?: string;
  color?: string;
}
