import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Drive with DigiRoute",
  description:
    "Join DigiRoute's rider network in Qatar and the UAE. Flexible shifts, competitive pay, full insurance, and a driver app built to make your day easier.",
  alternates: { canonical: "https://www.digiroute.me/driver" },
  openGraph: { url: "https://www.digiroute.me/driver" },
};

export default function DriverLayout({ children }: { children: React.ReactNode }) {
  return children;
}
