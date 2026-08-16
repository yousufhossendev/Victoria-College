/**
 * Brand arrow, inlined from public/icons/arrow-right.svg.
 *
 * Inlined rather than loaded as an <img> so it inherits `currentColor` and can
 * be animated on hover — the asset hardcodes its fill. Keep the path in step
 * with the file if that ever changes.
 */
export function ArrowRight({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={`shrink-0 ${className}`}
      fill="currentColor"
    >
      <path d="M13.6735 20.4644C13.6898 20.4796 14.1895 20.6062 14.784 20.7425C15.3786 20.8789 15.8706 20.9695 15.8793 20.9444C15.9293 20.6396 15.9748 20.3341 16.0156 20.028C16.1509 19.0658 16.4771 17.9433 16.8273 17.2407C17.9171 15.0524 19.8709 13.6036 22.2426 13.2262L22.8458 13.1313L22.8458 11.1971L22.2993 11.1055C18.7135 10.5044 16.3756 7.82291 15.9393 3.81164C15.9109 3.54982 15.8771 3.336 15.8629 3.336C15.7429 3.336 13.7389 3.81818 13.7007 3.85636C13.6735 3.88473 13.6942 4.12909 13.7466 4.40182C14.3258 7.41818 15.9862 9.87273 18.1407 10.9004L18.6567 11.1469L8.03128 11.1655L1.31237 11.1775L1.31237 13.1345L8.04874 13.1465L18.6491 13.1662L17.9967 13.4967C16.3047 14.3542 14.964 16.0364 14.1753 18.2935C13.9506 18.9371 13.6113 20.4022 13.6735 20.4644Z" />
    </svg>
  );
}
