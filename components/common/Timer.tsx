'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

function Timer() {
  const [sec, setSec] = useState(5);
  const router = useRouter();
  const timerId = useRef<NodeJS.Timeout | undefined>(
    undefined
  );
  useEffect(() => {
    if (timerId.current) {
      clearInterval(timerId.current);
    }
    timerId.current = setInterval(() => {
      setSec((prev) => prev - 1);
    }, 1000);

    return () => {
      if (timerId.current) {
        clearInterval(timerId.current);
      }
    };
  }, []);

  useEffect(() => {
    if (sec === 0) {
      router.push('/home');
    }
  }, [sec, router]);
  return (
    <p className=" flex-1 mt-44 text-2xl leading-9 tracking-wider  justify-items-end">
      Redirecting you to Homepage in{' '}
      <span className="font-semibold">{sec} Seconds</span>
    </p>
  );
}

export default Timer;
