import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

export function Header() {
  return (
    <header className={style.header}>
      <h1>
        <Link activeClassName={style.active} href="/">
          Code up
        </Link>
      </h1>
      <nav>
        <Link activeClassName={style.active} href="/courses/">
          Все курсы
        </Link>
        <Link activeClassName={style.active} href="/community">
          Комьюнити
        </Link>
        <Link activeClassName={style.active} href="/profile">
          Блог
        </Link>
        <Link activeClassName={style.active} href="/profile/john">
          Войти
        </Link>
        <Link activeClassName={style.active} href="/profile/thebset">
          Регистрация
        </Link>
      </nav>
    </header>
  );
}
