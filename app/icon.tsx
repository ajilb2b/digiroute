import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "white",
          borderRadius: "7px",
          border: "2.5px solid #5500FF",
          position: "relative",
        }}
      >
        {/* Bold D matching the rounded logo style */}
        <span
          style={{
            color: "#5500FF",
            fontSize: "20px",
            fontWeight: 900,
            lineHeight: 1,
            fontFamily: "Arial Black, Arial, sans-serif",
            letterSpacing: "-1px",
            marginTop: "1px",
          }}
        >
          D
        </span>
        {/* Small dot in top-right — referencing the circular dots from the logo */}
        <div
          style={{
            position: "absolute",
            top: "4px",
            right: "5px",
            width: "5px",
            height: "5px",
            borderRadius: "50%",
            background: "#FF6B00",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
