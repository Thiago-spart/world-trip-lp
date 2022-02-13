import Link from "next/link";
import { NextLinkProps } from "../../types/interfaces/link";

export const NextLink: React.FC<NextLinkProps> = ({
  href,
  blank,
  disabled,
  children,
  ...props
}) => (
  <Link href={href}>
    <a
      style={{ pointerEvents: disabled ? "none" : "auto" }}
      target={blank ? "_blank" : "_self"}
      rel="noopener noreferrer"
      {...props}
    >
      {children}
    </a>
  </Link>
);
