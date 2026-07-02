import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        height: "100%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        background: "#09090b",
        padding: "0 80px",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 42,
          left: 52,
          color: "#71717a",
          fontSize: 18,
        }}
      >
        felipebolgar.dev
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <span
          style={{
            color: "#ffffff",
            fontSize: 64,
            fontWeight: 700,
            lineHeight: 1.1,
          }}
        >
          Felipe Bolgar
        </span>
        <span style={{ color: "#71717a", fontSize: 28, fontWeight: 400 }}>
          Full-Stack Developer
        </span>
      </div>
    </div>,
    { width: 1200, height: 630 },
  );
}
