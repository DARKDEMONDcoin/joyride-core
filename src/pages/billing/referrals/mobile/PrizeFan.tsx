/** @doc Fanned prize cards for the mobile referral hero (Moonshot-style). */
import { GOLD, GOLD_SOFT } from "./tokens";

export type PrizeCard = { label: string; value: string; unit: string };

const cardBase: React.CSSProperties = {
  position: "absolute",
  width: 132,
  height: 178,
  borderRadius: 20,
  border: `1px solid ${GOLD}44`,
  background:
    "linear-gradient(165deg, rgba(201,162,76,0.22) 0%, rgba(20,20,20,0.95) 55%, rgba(0,0,0,1) 100%)",
  boxShadow: "0 30px 60px -30px rgba(201,162,76,0.45)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  padding: 12,
};

function Card({
  prize,
  style,
  dim,
}: {
  prize: PrizeCard;
  style: React.CSSProperties;
  dim?: boolean;
}) {
  return (
    <div style={{ ...cardBase, ...style, opacity: dim ? 0.55 : 1 }}>
      <span className="text-[9.5px] font-medium uppercase tracking-[0.18em] text-white/50">
        {prize.label}
      </span>
      <span
        className="mt-2 text-[34px] font-light leading-none tabular-nums"
        style={{
          background: `linear-gradient(180deg, #ffffff 0%, ${GOLD_SOFT} 60%, ${GOLD} 100%)`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {prize.value}
      </span>
      <span className="mt-1.5 text-[10.5px] leading-tight text-white/55">{prize.unit}</span>
    </div>
  );
}

export default function PrizeFan({ prizes }: { prizes: PrizeCard[] }) {
  const [left, center, right] = prizes;
  return (
    <div className="relative mx-auto h-[210px] w-full max-w-[320px]">
      {/* Halo */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[240px] w-[240px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(201,162,76,0.28) 0%, rgba(201,162,76,0.06) 45%, transparent 70%)",
          filter: "blur(6px)",
        }}
      />
      {left && (
        <Card
          prize={left}
          dim
          style={{
            left: "50%",
            top: 26,
            transform: "translateX(-50%) translateX(-78px) rotate(-16deg) scale(0.88)",
          }}
        />
      )}
      {right && (
        <Card
          prize={right}
          dim
          style={{
            left: "50%",
            top: 26,
            transform: "translateX(-50%) translateX(78px) rotate(16deg) scale(0.88)",
          }}
        />
      )}
      {center && (
        <Card
          prize={center}
          style={{
            left: "50%",
            top: 12,
            transform: "translateX(-50%)",
            zIndex: 2,
            boxShadow: "0 34px 70px -26px rgba(201,162,76,0.6)",
          }}
        />
      )}
    </div>
  );
}