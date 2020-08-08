import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

export function Notfound() {
  return (
    <div className={style.notfound}>
      <h1>Error 404</h1>
      <p>That page doesn&apos;t exist.</p>
      <Link href="/">
        <h4>Back to Home</h4>
      </Link>
    </div>
  );
}
