import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Navbar from '@/components/Navbar/Navbar';

describe('Navbar component', () => {

  test('should render the Navbar component correctly', () => {
    render(<Navbar />);

    const logo = screen.getByAltText('logo');
    expect(logo).toBeInTheDocument();

    const homeLink = screen.getByTestId('home'); 
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveTextContent("Home");

    const ourValuesLink = screen.getByTestId('our-values'); 
    expect(ourValuesLink).toBeInTheDocument();
    expect(ourValuesLink).toHaveTextContent("Our Values");
    
    const ourTeamLink = screen.getByTestId('our-team'); 
    expect(ourTeamLink).toBeInTheDocument();
    expect(ourTeamLink).toHaveTextContent("Our Team");

    const contactLink = screen.getByTestId('contact'); 
    expect(contactLink).toBeInTheDocument();
    expect(contactLink).toHaveTextContent("Contact");
  });

  test('should have the correct links to pages', () => {
    render(<Navbar />);

    const homeLink = screen.getByTestId('home'); 
    expect(homeLink).toHaveAttribute('href', '/');

    const ourValuesLink = screen.getByTestId('our-values'); 
    expect(ourValuesLink).toHaveAttribute('href', '/our-values');

    const ourTeamLink = screen.getByTestId('our-team'); 
    expect(ourTeamLink).toHaveAttribute('href', '/our-team');

    const contactLink = screen.getByTestId('contact'); 
    expect(contactLink).toHaveAttribute('href', '/contact');
  });

  test('should have the correct class when the icon is clicked', () => {
    render(<Navbar />);

    const englishIcon = screen.getByTestId('en-icon');
    expect(englishIcon).toHaveClass("bg-primary-light");

    const denmarkIcon = screen.getByTestId('dk-icon');
    fireEvent.click(denmarkIcon);

    expect(denmarkIcon).toHaveClass("bg-primary-light");
    expect(englishIcon.classList.contains("bg-primary-light")).toBe(false);
  });
});