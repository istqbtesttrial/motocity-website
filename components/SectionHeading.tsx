type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
}

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl space-y-4">
      <p className="text-xs uppercase tracking-[0.45em] text-black/40">{eyebrow}</p>
      <h2 className="text-3xl font-semibold uppercase leading-[0.95] tracking-[-0.04em] text-black sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? <p className="max-w-2xl text-sm leading-7 text-black/55 sm:text-base">{description}</p> : null}
    </div>
  )
}
