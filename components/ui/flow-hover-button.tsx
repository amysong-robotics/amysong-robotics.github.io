import type { AnchorHTMLAttributes, ReactNode } from "react"

export type FlowHoverButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  icon?: ReactNode
  children?: ReactNode
}

/**
 * Framework-agnostic anchor version of the flow-hover-button interaction.
 * The site itself is Jekyll, so the matching CSS is applied in `_pages/about.md`.
 */
export function FlowHoverButton({ icon, children, ...props }: FlowHoverButtonProps) {
  return (
    <a {...props} className={`flow-hover-button ${props.className ?? ""}`.trim()}>
      {icon}
      <span>{children}</span>
    </a>
  )
}
