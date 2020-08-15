import { h } from 'preact';
import { Link } from 'preact-router/match';

export function CoursesTable() {
  const courses = [
    { id: 1, name: 'JS basics', tags: ['JS', 'programming language'] },
    { id: 2, name: 'CSS bachelor', tags: ['CSS', 'styling', 'beginner'] },
    { id: 3, name: 'HTML and beyond', tags: ['HTML', 'basics', 'semantic'] },
    { id: 4, name: 'React mastery', tags: ['React', 'library', 'intermediate'] },
  ].map((item) => {
    return (
      <div key={item.id} className="max-w-sm rounded overflow-hidden shadow-lg my-3">
        <img
          className="w-full"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQA9pX9QM7keDq3W1b5vlLVvK7ODkHoHj8rPA&usqp=CAU"
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">
            <Link href={`/courses/${item.name}`}>
              {item.name}{' '}
              <small className="font-semibold bg-green-200 rounded-full px-3 py-1 text-sm">
                code up!
              </small>
            </Link>
          </div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
            Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>
        </div>
        <div className="px-6 py-4">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    );
  });
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap justify-evenly">{courses}</div>
    </div>
  );
}
