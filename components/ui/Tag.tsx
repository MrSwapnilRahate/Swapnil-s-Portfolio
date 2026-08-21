type Props = { children: string; active?: boolean };

export function Tag({ children, active = false }: Props) {
  return (
    <span
      className={`label-mono inline-block rounded-md border px-2.5 py-1 text-[0.58rem] leading-none transition-colors duration-500 ${
        active
          ? "border-gold/45 bg-gold/10 text-gold-bright"
          : "border-line text-muted hover:border-gold/35 hover:text-gold-bright"
      }`}
    >
      {children}
    </span>
  );
}
