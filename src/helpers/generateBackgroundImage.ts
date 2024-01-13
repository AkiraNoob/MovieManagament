export const generateMinimizeMovieCardBackgroundImage = (src: string) =>
  `linear-gradient(0deg, rgba(22, 24, 30, 0.7) 0%, rgba(22, 24, 30, 0.7) 100%), url("${src}"), url("/placeholder.jpg")`;

export const generatEDefaultMovieCardPlacementBackgroundImage = (src: string) =>
  `linear-gradient(180deg, rgba(22, 24, 30, 0.00) 0%, rgba(22, 24, 30, 0.70) 65.28%), linear-gradient(0deg, rgba(22, 24, 30, 0.40) 0%, rgba(22, 24, 30, 0.40) 100%), url("${src}"), url("/placeholder.jpg")`;

export const generateBannerMovieCardBackgroundImage = (src: string) =>
  `linear-gradient(0deg, rgba(22, 24, 30, 0.50) 0%, rgba(22, 24, 30, 0.50) 100%), url("${src}"), url("/placeholder.jpg")`;
