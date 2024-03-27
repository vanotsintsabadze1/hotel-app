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

type ImageBase64Type = {
  imageBase64: string;
};

type RoomType = {
  capacity: number;
  description: string;
  id: string;
  images: ImageBase64Type[];
  pricePerNight: number;
  pricePerNightCurrency: number;
  type: number;
};

type RoomOverviewType = {
  header: string;
  description: string;
  imgUrl: string;
};

type ReservationDates = {
  checkInDate: string;
  checkOutDate: string;
};

type DateContextType = {
  reservationDates: ReservationDates;
  setReservationDate: {
    setCheckInDate: (_data: string) => void;
    setCheckOutDate: (_data: string) => void;
  };
};

type ReservationData = {
  roomId: string;
  checkInDateUtc: string | null;
  checkOutDateUtc: string | null;
  numberOfGuests: number;
};

type ReservedRoomDetails = {
  checkInDateUtc: string;
  checkOutDateUtc: string;
  numberOfGuests: number;
  room: {
    images: ImageBase64Type[];
    type: string;
    description: string;
  };
  status: number;
};

export type { RoomType, RoomOverviewType, userAuthorizedType, userActivityCheckType, DateContextType, ReservationDates, ReservationData, ImageBase64Type, ReservedRoomDetails };
