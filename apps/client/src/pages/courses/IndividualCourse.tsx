import { h } from 'preact';
import { IndividualCourseQuery } from '../../components/courses/IndividualCourse';

interface Props {
  name: string;
}

export function IndividualCourse({ name }: Props) {
  return <IndividualCourseQuery name={name} />;
}
