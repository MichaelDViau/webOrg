interface FaqListProps {
  faqs: { question: string; answer: string }[];
  className?: string;
}

export function FaqList({ faqs, className }: FaqListProps) {
  return (
    <div className={className}>
      <div className="divide-y divide-line border-y border-line">
        {faqs.map((faq) => (
          <details key={faq.question} className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-lg font-medium text-ink sm:py-6">
              {faq.question}
              <svg
                viewBox="0 0 16 16"
                aria-hidden="true"
                className="size-4 shrink-0 transition-transform duration-200 group-open:rotate-45"
              >
                <path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </summary>
            <p className="max-w-2xl pb-6 leading-relaxed">{faq.answer}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
