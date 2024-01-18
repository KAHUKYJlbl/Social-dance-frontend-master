import { type ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  children: ReactNode;
  container?: Element;
}

export const Portal = ({ children, container = document.body }: PortalProps) =>
  createPortal(children, container);
