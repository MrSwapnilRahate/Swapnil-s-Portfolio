import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt =
  "Swapnil Rahate — Software Engineer, Frontend & Product Engineering";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#060607",
          padding: "72px",
          position: "relative",
        }}
      >
        {/* overhead glow */}
        <div
          style={{
            position: "absolute",
            top: -260,
            left: 260,
            width: 700,
            height: 520,
            background:
              "radial-gradient(ellipse, rgba(233,180,76,0.30), rgba(6,6,7,0))",
            display: "flex",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 40, height: 1, background: "#e9b44c", display: "flex" }} />
          <div
            style={{
              fontSize: 20,
              letterSpacing: 6,
              color: "#e9b44c",
              textTransform: "uppercase",
            }}
          >
            Portfolio
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 108,
              fontWeight: 800,
              color: "#f4f2ee",
              letterSpacing: -3,
              lineHeight: 1,
              display: "flex",
            }}
          >
            Swapnil Rahate
          </div>
          <div
            style={{
              fontSize: 44,
              fontWeight: 700,
              color: "#e9b44c",
              marginTop: 18,
              letterSpacing: -1,
              display: "flex",
            }}
          >
            Software Engineer
          </div>
          <div
            style={{
              fontSize: 26,
              color: "#9a9793",
              marginTop: 14,
              display: "flex",
            }}
          >
            Frontend &amp; Product Engineering
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(255,255,255,0.12)",
            paddingTop: 28,
          }}
        >
          <div style={{ fontSize: 22, color: "#9a9793", display: "flex" }}>
            React.js · Next.js · TypeScript · Node.js
          </div>
          <div style={{ fontSize: 22, color: "#e9b44c", display: "flex" }}>
            4.5+ Years · Ex-Infosys
          </div>
        </div>
      </div>
    ),
    size
  );
}
