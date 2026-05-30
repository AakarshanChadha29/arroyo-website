type SectionLabelProps = {
  label: string;
};

export function SectionLabel({ label }: SectionLabelProps) {
  return (
    <div className="ui-section-label flex items-center gap-3 mb-4">
      <div className="ui-section-label__line w-8 h-px bg-arroyo-accent" />
      <span className="ui-section-label__text font-mono text-[11px] text-arroyo-accent tracking-[0.14em] uppercase">
        {label}
      </span>
    </div>
  );
}
