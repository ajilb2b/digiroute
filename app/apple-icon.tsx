import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
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
          borderRadius: "40px",
          border: "12px solid #5500FF",
          position: "relative",
        }}
      >
        <span
          style={{
            color: "#5500FF",
            fontSize: "110px",
            fontWeight: 900,
            lineHeight: 1,
            fontFamily: "Arial Black, Arial, sans-serif",
            letterSpacing: "-4px",
            marginTop: "6px",
          }}
        >
          D
        </span>
        {/* Orange dot accent — matches the logo's circular dot motif */}
        <div
          style={{
            position: "absolute",
            top: "22px",
            right: "26px",
            width: "26px",
            height: "26px",
            borderRadius: "50%",
            background: "#FF6B00",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
