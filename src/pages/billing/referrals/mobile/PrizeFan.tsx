/** @doc Fanned membership-credit cards for the mobile referral hero. */

export type CreditCard = {
  /** Big value, e.g. "3" */
  value: string;
  /** Unit under/next to the value, e.g. "Days" */
  unit: string;
  /** Card face gradient */
  face: string;
  /** Small caption at the top-left of the card */
  caption?: string;
};

function Face({
  card,
  style,
  side,
}: {
  card: CreditCard;
  style: React.CSSProperties;
  side?: boolean;
}) {
  return (
    <div
      style={{
        position: "absolute",
        width: 168,
        height: 108,
        borderRadius: 14,
        padding: 12,
        overflow: "hidden",
        background: card.face,
        boxShadow: side
          ? "0 20px 40px -22px rgba(0,0,0,0.9)"
          : "0 26px 54px -20px rgba(0,0,0,0.95)",
        filter: side ? "blur(1.6px)" : undefined,
        ...style,
      }}
    >
      {card.caption && (
        <span
          className="block text-[9.5px] italic"
          style={{ color: "rgba(20,20,20,0.55)" }}
        >
          {card.caption}
        </span>
      )}
      <div className="absolute bottom-2.5 right-3 flex items-baseline gap-1">
        <span
          className="text-[30px] leading-none"
          style={{ fontFamily: "Georgia, 'Times New Roman', serif", color: "#101010" }}
        >
          {card.value}
        </span>
        <span className="text-[12px]" style={{ color: "rgba(16,16,16,0.7)" }}>
          {card.unit}
        </span>
      </div>
    </div>
  );
}

export default function PrizeFan({ cards }: { cards: CreditCard[] }) {
  const [left, center, right] = cards;
  return (
    <div className="relative mx-auto h-[210px] w-full max-w-[360px]">
      {/* soft light behind the stack */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[260px] w-[300px] -translate-x-1/2 -translate-y-1/2"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.03) 45%, transparent 72%)",
        }}
      />
      {left && (
        <Face
          card={left}
          side
          style={{
            left: "50%",
            top: 52,
            transform: "translateX(-50%) translateX(-148px) rotate(-17deg)",
          }}
        />
      )}
      {right && (
        <Face
          card={right}
          side
          style={{
            left: "50%",
            top: 52,
            transform: "translateX(-50%) translateX(148px) rotate(17deg)",
          }}
        />
      )}
      {center && (
        <div
          className="absolute left-1/2 top-6 -translate-x-1/2"
          style={{
            zIndex: 2,
            padding: 8,
            borderRadius: 22,
            background: "#000",
            boxShadow: "0 30px 70px -26px rgba(140,220,220,0.35)",
          }}
        >
          <Face card={center} style={{ position: "relative", left: 0, top: 0 }} />
        </div>
      )}
    </div>
  );
}
