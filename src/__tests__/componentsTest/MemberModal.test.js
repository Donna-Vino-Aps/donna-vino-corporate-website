import React from "react";
import { render, screen } from "@testing-library/react";
import MemberModal from "@/components/Modal/MemberModal";

describe("ModalMember component", () => {
  it("should render the ModalMember component correctly", () => {
    render(<MemberModal />);

    expect(screen.getByTestId("member-name")).toBeInTheDocument();
    expect(screen.getByTestId("member-title")).toBeInTheDocument();
    expect(screen.getByTestId("member-description")).toBeInTheDocument();
    expect(screen.getByTestId("member-image")).toBeInTheDocument();
  });

  it("should render the FloatingButton components within ModalMember correctly", () => {
    render(<MemberModal />);

    const floatingButtons = screen.getAllByTestId("floating-button");
    //expect(floatingButtons).toHaveLength(3);
  });
});
