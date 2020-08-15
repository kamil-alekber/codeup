import { useRef, useEffect } from 'preact/hooks';
import { h } from 'preact';

/**
 * Хук используется для отлова клика/touch(на мобилке) вне элемента, который прикреплен за реактовским ref объектом.
 *
 * @param callback - функция которая будет вызвана при отлове клика вне заданного элемента
 * @returns Хук возвращает ref объект который можно прикрепить к div элементу:
 *
 * @example
 *   const menuRef = useClickOutside(()=> {
 *        closeMenu(true);
 *   });
 *
 * <div ref={menuRef}>
 *   <Menu>
 *    <Link1> a </Link>
 *    <Link2> b </Link>
 *    <Link3> c </Link>
 *   </Menu>
 * </div>
 *
 */
export function useClickOutside(callback: (e: MouseEvent) => void) {
  const ref = useRef<HTMLDivElement>(null);

  const handleClickOutside = (e: MouseEvent) => {
    if (ref?.current && !ref.current.contains(e.target as Node)) {
      callback(e);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.addEventListener('click', handleClickOutside);
    }
    return () => {
      if (typeof window !== 'undefined') {
        document.removeEventListener('click', handleClickOutside);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref]);

  return ref;
}
