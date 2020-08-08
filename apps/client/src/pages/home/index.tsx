import { h } from 'preact';
import style from './style.css';

export function Home() {
  return (
    <div className={style.home}>
      <h1>Home</h1>
      <p>This is the Home component.</p>
    </div>
  );
}
