import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { StructuredData } from '@/components/StructuredData';

describe('landing essentials', () => {
  it('exposes the price, address and primary visit actions', () => {
    render(<Hero />);
    expect(screen.getByText('R$ 2.400/mês')).toBeInTheDocument();
    expect(screen.getByText(/R\. Dois de Julho, 110/)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Entrar no imóvel/i })).toHaveAttribute('href', '#tour');
    expect(screen.getByRole('link', { name: /Agendar visita/i })).toHaveAttribute('href');
  });

  it('opens and closes the mobile navigation with an accessible button', async () => {
    const user = userEvent.setup();
    render(<Header />);
    const button = screen.getByRole('button', { name: 'Abrir menu' });
    expect(button).toHaveAttribute('aria-expanded', 'false');
    await user.click(button);
    expect(screen.getByRole('button', { name: 'Fechar menu' })).toHaveAttribute('aria-expanded', 'true');
  });

  it('keeps the mandatory MtsFerreira footer credit', () => {
    render(<Footer />);
    const credit = screen.getByRole('link', { name: 'Desenvolvido por MtsFerreira' });
    expect(credit).toHaveAttribute('href', 'https://MtsFerreira.dev');
    expect(credit).toHaveAttribute('target', '_blank');
    expect(credit).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders structured data for the residence and rental offer', () => {
    const { container } = render(<StructuredData />);
    const script = container.querySelector('script[type="application/ld+json"]');
    expect(script).not.toBeNull();
    expect(script?.textContent).toContain('SingleFamilyResidence');
    expect(script?.textContent).toContain('Offer');
  });
});
