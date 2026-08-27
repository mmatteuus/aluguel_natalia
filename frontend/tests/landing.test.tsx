import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { Footer } from '@/components/Footer';
import { Gallery } from '@/components/Gallery';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { StructuredData } from '@/components/StructuredData';

vi.mock('@vercel/analytics', () => ({ track: vi.fn() }));

describe('landing essentials', () => {
  it('exposes the price, address and primary visit actions', () => {
    render(<Hero />);
    expect(screen.getByText('R$ 2.200/mês')).toBeInTheDocument();
    expect(screen.getByText(/R\. Dois de Julho, 110/)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Ver fotos/i })).toHaveAttribute('href', '#galeria');
    expect(screen.getByRole('link', { name: /Agendar visita/i })).toHaveAttribute('href');
  });

  it('keeps the hero focused on two conversion actions', () => {
    const { container } = render(<Hero />);
    expect(container.querySelectorAll('.hero__actions a')).toHaveLength(2);
    expect(screen.getByRole('link', { name: /Agendar visita pelo WhatsApp/i })).toHaveAttribute('href', expect.stringContaining('wa.me'));
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

describe('gallery', () => {
  it('renders all 12 real photographs as expandable tiles', () => {
    render(<Gallery />);
    expect(screen.getByRole('heading', { name: 'As fotos do sobrado' })).toBeInTheDocument();
    expect(screen.getAllByRole('button')).toHaveLength(12);
    expect(screen.queryByText('O hall de entrada é o primeiro ambiente do sobrado no piso térreo.')).not.toBeInTheDocument();
  });

  it('opens the lightbox, navigates with arrow keys and closes with Escape', async () => {
    const user = userEvent.setup();
    render(<Gallery />);
    await user.click(screen.getByRole('button', { name: /Hall de entrada do sobrado/ }));
    const dialog = screen.getByRole('dialog');
    expect(dialog).toBeVisible();
    expect(dialog).toHaveTextContent('1 / 12');
    await user.keyboard('{ArrowRight}');
    expect(dialog).toHaveTextContent('2 / 12');
    await user.keyboard('{ArrowLeft}');
    expect(dialog).toHaveTextContent('1 / 12');
    await user.keyboard('{Escape}');
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('closes the lightbox with the close button and restores focus to the tile', async () => {
    const user = userEvent.setup();
    render(<Gallery />);
    const tile = screen.getByRole('button', { name: /Sala de estar vista do hall de entrada/ });
    await user.click(tile);
    const dialog = screen.getByRole('dialog');
    await user.click(screen.getByRole('button', { name: 'Fechar galeria' }));
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(document.activeElement).toBe(tile);
  });
});
