import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rooms",
  description: "A hotel app",
};

export default function RoomsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <main>{children}</main>;
}
