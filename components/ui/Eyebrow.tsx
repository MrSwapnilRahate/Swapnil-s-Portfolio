type Props = { index?: string; children: string; className?: string };

/** `01 / TECH MATRIX` — the reference's numbered section marker. */
export function Eyebrow({ index, children, className = "" }: Props) {
  return (
    <p className={`eyebrow flex items-center gap-2.5 ${className}`}>
      {index && (
        <>
          <span className="text-faint">{index}</span>
          <span aria-hidden className="text-faint">/</span>
        </>
      )}
      <span>{children}</span>
      <span aria-hidden className="ml-1 h-px w-8 bg-gold/40 sm:w-14" />
    </p>
  );
}
