interface PostData {
  slice(arg0: number, size: number): unknown;
  title: string;
  slug: string;
  description?: string;
  year?: string;
  problem?: string;
  thumbnailColour: {
    css: string;
  }
  solution?: string;
  thumbnail: {
    width: number;
    height: number
    url: string;
  };
}

export type { PostData };
