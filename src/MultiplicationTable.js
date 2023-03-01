import React from 'react'
import './App.css';

// isPrime function checks if a number is prime. it checks if any number from 2 to the square root of n divides n evenly.

function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
// The primesGenerator function generates an array of prime numbers. It starts with n=2 and keeps checking if each number is prime until it has found the requested number of primes.
function primesGenerator(count) {
  const primes = [];
  let n = 2;
  while (primes.length < count) {
    if (isPrime(n)) {
      primes.push(n);
    }
    n++;
  }
  return primes;
}

// The generateTable function generates an array representing the multiplication table.
//  The first row and column are the prime numbers, and each cell contains the product of the 
//  corresponding row and column primes.
function generateTable(primes) {
  const table = [];
  table.push(['', ...primes]);
  for (let i = 0; i < primes.length; i++) {
    const row = [primes[i]];
    for (let j = 0; j < primes.length; j++) {
      row.push(primes[i] * primes[j]);
    }
    table.push(row);
  }
  return table;
}

/*The MultiplicationTable component generates the prime numbers and multiplication table,
and renders them as an HTML table using React's JSX syntax. The map function is used
 to iterate over the rows and cells of the table.*/
function MultiplicationTable() {
  const primes = primesGenerator(10);
  const table = generateTable(primes);

  return (
    <table>
      <tbody>
        {table.map((row, i) => (
          <tr key={i}>
            {row.map((cell, j) => (
              <td key={j}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
/*To run this code in a React project, you can create a new project using 
create-react-app and replace the contents of the App.js file with 
the code above. You will also need to install the Jest library using 
npm install --save-dev jest and add some test cases.*/

export default MultiplicationTable;

// function MultiplicationTable(props) {
//   function calculatePrimes(num) {
//     const primes = [];
//     const isPrime = new Array(num + 1).fill(true);
  
//     for (let i = 2; i <= num; i++) {
//       if (isPrime[i]) {
//         primes.push(i);
  
//         for (let j = i * i; j <= num; j += i) {
//           isPrime[j] = false;
//         }
//       }
//     }
  
//     return primes;
//   }
//     const primes = calculatePrimes(29);
//     const rows = [];
  
//     // create table rows
//     for (let i = 0; i <= 10; i++) {
//       const cols = [];
  
//       for (let j = 0; j <= 10; j++) {
//         if (i === 0 && j === 0) {
//           cols.push(<th key={j}></th>);
//         } else if (i === 0) {
//           cols.push(<th key={j}>{primes[j - 1]}</th>);
//         } else if (j === 0) {
//           cols.push(<th key={j}>{primes[i - 1]}</th>);
//         } else {
//           cols.push(<td key={j}>{primes[i - 1] * primes[j - 1]}</td>);
//         }
//       }
  
//       rows.push(<tr key={i}>{cols}</tr>);
//     }
  
//     return (
//       <table>
//         <tbody>{rows}</tbody>
//       </table>
//     );
//   }
  
  // export default MultiplicationTable;
    