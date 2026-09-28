import Link from 'next/link';

export default function TOC() {
  return (
    <ul>
      <li>Zhanyi Chen</li>
      <li>
        <a href="/labs/lab1">Lab 1: HTML Examples</a>
      </li>
      <li>
        <a href="/labs/lab2">Lab 2: CSS Basics</a>
      </li>
      <li>
        <a href="/labs/lab3">Lab 3: JavaScript Fundamentals</a>
      </li>
      <li>
        <a href="/labs/lab4">Lab 4</a>
      </li>
      <li>
        <a href="/labs/lab5">Lab 5</a>
      </li>
      <li>
        <Link href="/book/ch1" id="wd-toc-book-link">
          Chapter 1
        </Link>
      </li>
    </ul>
  );
}
