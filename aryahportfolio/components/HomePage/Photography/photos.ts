import type { Photo } from 'react-photo-album';

const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

function assetLink(asset: string, width: number) {
  return `/assets/photography/landing/${asset}`;
}

const photos = [
  {
    asset: '1.jpg',
    alt: 'Photography',
    width: 4000,
    height: 6000,
  },
  {
    asset: '2.jpg',
    alt: 'Photography',
    width: 4000,
    height: 6000,
  },

  {
    asset: '3.jpg',
    alt: 'Photography',
    width: 6000,
    height: 4000,
  },
  {
    asset: '4.jpg',
    alt: 'Photography',
    width: 4000,
    height: 6000,
  },
  {
    asset: '13.jpg',
    alt: 'Photography',
    width: 4475,
    height: 3395,
  },
  {
    asset: '5.jpg',
    alt: 'Photography',
    width: 4000,
    height: 6000,
  },

  {
    asset: '6.jpg',
    alt: 'Photography',
    width: 4000,
    height: 6000,
  },
  //   {
  //     asset: '7.jpg',
  //     alt: 'Photography',
  //     width: 3341,
  //     height: 5473,
  //   },

  //   {
  //     asset: '8.jpg',
  //     alt: 'Photography',
  //     width: 4000,
  //     height: 6000,
  //   },
  {
    asset: '9.jpg',
    alt: 'Photography',
    width: 4000,
    height: 6000,
  },
  {
    asset: '10.jpg',
    alt: 'Photography',
    width: 6000,
    height: 4000,
  },
  {
    asset: '11.jpg',
    alt: 'Photography',
    width: 4000,
    height: 6000,
  },
  {
    asset: '12.jpg',
    alt: 'Photography',
    width: 4000,
    height: 6000,
  },

  {
    asset: '14.jpg',
    alt: 'Photography',
    width: 4000,
    height: 6000,
  },
].map(
  ({ asset, alt, width, height }) =>
    ({
      src: assetLink(asset, width),
      alt,
      width,
      height,
      //   srcSet: breakpoints.map((breakpoint) => ({
      //     src: assetLink(asset, breakpoint),
      //     width: breakpoint,
      //     height: Math.round((height / width) * breakpoint),
      //   })),
    }) as Photo
);

export default photos;
