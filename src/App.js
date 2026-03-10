import React, { useState } from "react";
import { Heart, Sparkles, Gamepad2, Beer, CircleDot } from "lucide-react";
import "./App.css";
import logo from "./logo.svg"

export default function Giftcard3DRevealPage() {
  const [zoomed, setZoomed] = useState(false);

  const params = new URLSearchParams(window.location.search);

  const packType = params.get("packType") || "gaming";

  const packs = {
    gaming: {
      pack: "Gaming Pack",
      items: ["PC 3 цаг", "1 Energy drink, 1 Soft Drink"],
    },
    billiard: {
      pack: "Billiard Pack",
      items: ["Billiard 2 цаг", "4 Beer"],
    },
    gergaming: {
      pack: "Ger Gaming Pack",
      items: ["PC 2 цаг", "Billiard 2 цаг", "6 Beer"],
    },
  };

  const selectedPack = packs[packType];

  const gift = {
    from: params.get("from") || "",
    to: params.get("to") || "Чамд зориулсан",
    pack: selectedPack.pack,
    message:
      params.get("msg") ||
      "Цэргийн баяраар чамд хөгжилтэй, тухтай нэг орой бэлэглэж байна. Ger Gaming Lounge-д гоё өнгөрүүлээрэй.",
    code: params.get("code") || "GER18-001",
    valid: params.get("valid") || "2026.03.18 – 2026.03.28",
    items: selectedPack.items,
  };

  return (
    <div className="page">
      <div className="bg-gradient-layer" />
      <div className="bg-grid-layer" />

      <div className="main-grid">
        <div className="left-panel">
          <div className="glow-shadow" />

          <div className="scene">
            <div className="stand-wrap">
              <div className="stand-base-spin" />

              <div className="stand-logo">
                <img src={logo} alt="Ger Gaming Lounge" />
              </div>
            </div>

            <div
              className={`gift-card ${zoomed ? "zoomed" : ""}`}
              onClick={() => setZoomed(!zoomed)}
              title="Click to zoom"
            >
              <div className="gift-card-overlay" />

              <div className="card-content">
                <div className="card-header">
                  <div>
                    <div className="brand-label">Ger Gaming Lounge</div>
                    <div className="pack-title">{gift.pack}</div>
                  </div>

                  <div className="sparkle-box">
                    <Sparkles size={24} />
                  </div>
                </div>

                <div className="items-list">
                  {gift.items.map((item, index) => (
                    <div className="item-row" key={index}>
                      {index === 0 && <Gamepad2 size={16} className="item-icon" />}
                      {index === 1 && <CircleDot size={16} className="item-icon" />}
                      {index === 2 && <Beer size={16} className="item-icon" />}
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="card-footer">
                  <div>
                    <div className="meta-label">Code</div>
                    <div className="meta-value code-value">{gift.code}</div>
                  </div>
                  <div className="footer-right">
                    <div className="meta-label">Valid</div>
                    <div className="meta-small">{gift.valid}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="click-hint">
              {zoomed ? "Click card again to go back" : "Click the card to zoom in"}
            </div>
          </div>
        </div>

        <div className="right-panel">
          <div className="from-badge">
            <Heart size={16} />
            <span>{gift.from}</span>
          </div>

          <h1 className="receiver-title">{gift.to}</h1>
          <p className="from-text">{gift.from}</p>

          <div className="message-box">
            <div className="message-label">Message</div>
            <p className="message-text">{gift.message}</p>
          </div>

          <div className="info-grid">
            <div className="info-card">
              <span className="highlight">Хаяг:</span> Баянбүрд, Computer mall -н замын эсрэг талд Гэрэл төв, 3 давхарт
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}