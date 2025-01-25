import Image from 'next/image';
import {
  ColumnsPhotoAlbum,
  RenderImageContext,
  RenderImageProps,
  RowsPhotoAlbum,
} from 'react-photo-album';
import { Box } from '@mantine/core';

import 'react-photo-album/columns.css';

import { ErrorBoundary } from 'react-error-boundary';
import photos from './photos';

export default function PhotographySection({ ...props }) {
  return (
    <Box {...props}>
      <ErrorBoundary fallback={<></>}>
        <ColumnsPhotoAlbum
          photos={photos}
          render={{ image: renderNextImage }}
          columns={(containerWidth) => {
            if (containerWidth < 400) return 3;
            if (containerWidth < 800) return 3;
            return 3;
          }}
        />
      </ErrorBoundary>
    </Box>
  );
}

function renderNextImage(
  { alt = '', title, sizes }: RenderImageProps,
  { photo, width, height }: RenderImageContext
) {
  return (
    <div
      style={{
        width: '100%',
        position: 'relative',
        aspectRatio: `${width} / ${height}`,
      }}
    >
      <Image
        fill
        src={photo}
        alt={alt}
        title={title}
        sizes={sizes}
        placeholder={'blurDataURL' in photo ? 'blur' : undefined}
      />
    </div>
  );
}
