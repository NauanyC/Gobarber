import * as React from "react";
import { Container } from "./styles";

export interface TooltipProps {
  className?: string;
  children?: React.ReactNode;
  title: string;
}

const Tooltip: React.SFC<TooltipProps> = ({
  className,
  children,
  title,
}: TooltipProps) => (
  <Container className={className}>
    {children}
    <span>{title}</span>
  </Container>
);

export default Tooltip;
