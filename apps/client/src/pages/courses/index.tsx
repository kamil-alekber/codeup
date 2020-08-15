import { h } from 'preact';
import { CoursesTable } from '../../components/courses/courses';
export function Courses() {
  return (
    <div>
      <h1 className="text-xl text-center my-3">Выберите курсы под ваш интерес</h1>
      <CoursesTable />
    </div>
  );
}
