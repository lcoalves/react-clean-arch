import React from "react";
import { MemoryRouter } from "react-router-dom";

interface RouterWrapperProps {
  children: React.ReactNode;
}

export const tick = async (timeout = 0) => new Promise(resolve => setTimeout(resolve, timeout));

export const mockTranslation = (formatMessageFn: jest.Mock) => {
  formatMessageFn.mockReturnValue({ t: jest.fn().mockImplementation(obj => obj) });
};

export const RouterWrapper = ({ children }: RouterWrapperProps) => (
  <MemoryRouter>{children}</MemoryRouter>
);
