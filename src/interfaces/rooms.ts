export interface imageBase64 {
  imageBase64: string;
}

export interface room {
  id: string;
  type: string;
  description: string;
  capacity: number;
  pricePerNight: number;
  pricePerNightCurrency: 1;
  images: imageBase64[];
}
