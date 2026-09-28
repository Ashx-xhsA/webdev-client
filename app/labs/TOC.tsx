import Link from 'next/link';

export default function TOC() {
  return (
    <ul>
      <li>Zhanyi Chen</li>
      <li>
        <a href="/labs/lab1" id="wd-lab1-link">
          Lab 1: HTML Examples
        </a>
      </li>
      <li>
        <a href="/labs/lab2" id="wd-lab2-link">
          Lab 2: CSS Basics
        </a>
      </li>
      <li>
        <a href="/labs/lab3" id="wd-lab3-link">
          Lab 3: JavaScript Fundamentals
        </a>
      </li>
      <li>
        <a href="/labs/lab4" id="wd-lab4-link">
          Lab 4
        </a>
      </li>
      <li>
        <a href="/labs/lab5" id="wd-lab5-link">
          Lab 5
        </a>
      </li>
      <li>
        <Link href="/book/ch1" id="wd-toc-book-link">
          Chapter 1
        </Link>
      </li>
    </ul>
  );
}
