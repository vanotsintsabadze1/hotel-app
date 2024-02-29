type RoomType = {
  capacity: number;
  description: string;
  id: string;
  images: string[];
  pricePerNight: number;
  pricePerNightCurrency: number;
  type: number;
};

type RoomOverviewType = {
  header: string;
  description: string;
  imgUrl: string;
};

export type { RoomType, RoomOverviewType };
