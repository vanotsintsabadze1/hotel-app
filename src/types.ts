type userAuthorizedType = {
  isUserLoggedIn: boolean;
  setUserIsLoggedIn: (status: boolean) => void;
};

type userCredentialDataType = {
  id: string;
  email: string;
  emailConfirmed: boolean;
};

type userActivityCheckType = {
  data: userCredentialDataType;
  status: number;
};

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

export type { RoomType, RoomOverviewType, userAuthorizedType, userActivityCheckType };
