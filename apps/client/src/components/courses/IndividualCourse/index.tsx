import { h } from 'preact';
import { route } from 'preact-router';

interface Props {
  name: string;
}

export function IndividualCourseQuery(props: Props) {
  console.log(props);
  return (
    <div>
      <h1 className="text-xl text-center">Welcome to the course {props.name}</h1>
      {/* <p onClick={() => route()}>go back</p> */}
    </div>
  );
}
