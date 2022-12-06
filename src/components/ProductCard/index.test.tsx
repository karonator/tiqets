import React from 'react';
import { render, screen, act } from '@testing-library/react';

import 'jest-styled-components';

import { wrapWithTheme } from '../../tests/wrapWithTheme';
import { IProduct } from '../../types';
import { UseClampedTextParams } from '../../hooks/useClampedText';

import ProductCard from '.';

jest.mock('../../hooks/useClampedText', () => {
  const originalModule = jest.requireActual('../../hooks/useClampedText');
  return {
    __esModule: true,
    ...originalModule,
    default: ({ text }: UseClampedTextParams) => text
  };
});

describe('Render <ProductCard />', () => {
  const product: IProduct = {
    id: 1,
    title: 'Test product',
    summary: 'Test product description',
    image: 'some url',
    price: 10
  };

  beforeEach(() => {
    window.IntersectionObserver = jest.fn().mockReturnValue({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null
    });
  });

  test('without discount, before image load', () => {
    const { container } = render(wrapWithTheme(
      <ProductCard product={product} />
    ));

    const { title, summary, price } = product;

    expect(screen.queryByText(title)).toBeInTheDocument();
    expect(screen.queryByText(summary)).toBeInTheDocument();
    expect(screen.queryByText(`€${price.toFixed(2)}`)).toBeInTheDocument();
    expect(container.querySelectorAll('img').length).toBe(0);
  });

  test('without discount, image loaded', () => {
    const { container } = render(wrapWithTheme(
      <ProductCard product={product} />
    ));

    const { title, summary, price } = product;

    expect(screen.queryByText(title)).toBeInTheDocument();
    expect(screen.queryByText(summary)).toBeInTheDocument();
    expect(screen.queryByText(`€${price.toFixed(2)}`)).toBeInTheDocument();
    expect(container.querySelectorAll('img').length).toBe(0);

    /* eslint-disable-next-line */
    const observerCallback = window.IntersectionObserver.mock.calls[0][0];
    act(() => {
      observerCallback([{ intersectionRatio: 20 }]);
    });
    expect(container.querySelectorAll('img').length).toBe(1);
  });

  test('with discount', () => {
    const productWithDiscount:IProduct = {
      ...product,
      discountedPrice: 20
    };

    const { container } = render(wrapWithTheme(
      <ProductCard product={productWithDiscount} />
    ));

    const {
      title,
      summary,
      price,
      discountedPrice
    } = productWithDiscount;

    expect(screen.queryByText(title)).toBeInTheDocument();
    expect(screen.queryByText(summary)).toBeInTheDocument();
    expect(screen.queryByText(`€${price.toFixed(2)}`)).toBeInTheDocument();
    expect(screen.queryByText(`€${discountedPrice?.toFixed(2)}`)).toBeInTheDocument();
    expect(container.querySelectorAll('img').length).toBe(0);
  });
});
