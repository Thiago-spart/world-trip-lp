import { LinkProps } from "next/link";
import type { AnchorHTMLAttributes } from "react";

type LinkAttributes = AnchorHTMLAttributes<HTMLAnchorElement>;

type LinkOmitted = Omit<LinkAttributes, "style" | "target">;

export interface NextLinkProps extends LinkOmitted, LinkProps {
	href: string;
	blank?: boolean;
	disabled?: boolean;
}
