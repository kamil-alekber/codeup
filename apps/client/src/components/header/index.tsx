import { h } from 'preact';
import { useState, useRef } from 'preact/hooks';
import { Link } from 'preact-router/match';
import style from './style.css';
import { useClickOutside } from '../../helpers/useClickOutside';

export function Header() {
  const [isMenu, setIsMenu] = useState(false);
  const clickMenuRef = useRef<HTMLDivElement>(null);

  const menuLinks = [
    { name: 'Все курсы', link: '/courses' },
    { name: 'Комьюнити', link: '/community' },
    { name: 'Блог', link: '/profile' },
    { name: 'Войти', link: '/profile/john' },
    { name: 'Регистрация', link: '/profile/thebest' },
  ].map((item) => (
    <Link
      key={item.link}
      className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
      activeClassName={style.active}
      href={item.link}
      onClick={() => setIsMenu(false)}
    >
      {item.name}
    </Link>
  ));

  const menuRef = useClickOutside((e) => {
    if (clickMenuRef?.current && !clickMenuRef.current.contains(e.target as Node)) {
      setIsMenu(false);
    }
  });

  return (
    <header>
      <div className="bg-teal-500  p-6">
        <nav className="flex items-center justify-between flex-wrap">
          <div id="logo" className="flex items-center flex-shrink-0 text-white mr-6">
            <span className="font-semibold text-xl tracking-tight">
              <Link onClick={() => setIsMenu(false)} activeClassName={style.active} href="/">
                Code up
              </Link>
            </span>
          </div>

          <div ref={clickMenuRef} className="block lg:hidden">
            <button
              onClick={() => setIsMenu(!isMenu)}
              className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
            >
              <svg
                className="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div className="hidden w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="flex justify-end text-sm lg:flex-grow">{menuLinks}</div>
          </div>
        </nav>
        {isMenu && (
          <div ref={menuRef} className="lg:hidden">
            <div className="flex justify-end flex-col text-sm lg:flex-grow">{menuLinks}</div>
          </div>
        )}
      </div>
    </header>
  );
}
