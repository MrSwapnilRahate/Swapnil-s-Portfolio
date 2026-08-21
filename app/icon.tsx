import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const size = { width: 64, height: 64 };
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
          background: "#060607",
          color: "#e9b44c",
          fontSize: 34,
          fontWeight: 800,
          letterSpacing: -1,
        }}
      >
        SR
      </div>
    ),
    size
  );
}
