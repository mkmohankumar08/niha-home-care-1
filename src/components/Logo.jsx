export default function Logo({ dark = false }) {
  const primary = dark ? "#F1F4F1" : "#14294F";
  return (
    <div className="flex items-center gap-3">
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect x="1" y="1" width="38" height="38" rx="11" stroke={primary} strokeWidth="1.5" />
        <path
          d="M8 25C12 25 12 15 16 15C20 15 20 25 24 25C28 25 28 15 32 15"
          stroke="#2D6CDF"
          strokeWidth="2.75"
          strokeLinecap="round"
        />
        <circle cx="16" cy="15" r="2.25" fill="#2E7D5B" />
      </svg>
      <div className="leading-none">
        <div
          className={`font-display font-semibold tracking-tight text-xl ${dark ? "text-mist" : "text-navy"}`}
        >
          NIHA
        </div>
        <div className={`font-body text-[10px] tracking-[0.25em] font-semibold ${dark ? "text-recovery-light" : "text-recovery"}`}>
          HOME CARE
        </div>
      </div>
    </div>
  );
}
