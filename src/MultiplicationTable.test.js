const React = import('react');
const { render, screen } = import('@testing-library/react');
const MultiplicationTable = import('./MultiplicationTable');
const { primesGenerator, generateTable } = import('./MultiplicationTable');

describe('primesGenerator', () => {
  test('generates the correct number of primes', () => {
    expect(primesGenerator(10)).toHaveLength(10);
    expect(primesGenerator(20)).toHaveLength(20);
  });
});

describe('generateTable', () => {
  test('generates the correct multiplication table', () => {
    const primes = [2, 3, 5];
    const expectedTable = [
      ['', 2, 3, 5],
      [2, 4, 6, 10],
      [3, 6, 9, 15],
      [5, 10, 15, 25],
    ];
    expect(generateTable(primes)).toEqual(expectedTable);
  });
});

describe('MultiplicationTable', () => {
  test('renders the correct table', () => {
    render(React.createElement(MultiplicationTable));
    expect(screen.getByText('25')).toBeInTheDocument();
  });
});
