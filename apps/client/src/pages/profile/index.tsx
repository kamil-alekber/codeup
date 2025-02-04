import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import style from './style.css';

interface Props {
  user: string;
}

export function Profile(props: Props) {
  const { user } = props;
  const [time, setTime] = useState(Date.now());
  const [count, setCount] = useState(0);

  // gets called when this route is navigated to
  useEffect(() => {
    const timer = window.setInterval(() => setTime(Date.now()), 1000);

    // gets called just before navigating away from the route
    return () => {
      clearInterval(timer);
    };
  }, []);

  // update the current time
  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div className={style.profile}>
      <h1>Profile: {user}</h1>
      <p>This is the user profile for a user named {user}.</p>

      <div>Current time: {new Date(time).toLocaleString()}</div>

      <p>
        <button onClick={increment}>Click Me</button> Clicked {count} times.
      </p>
    </div>
  );
}
