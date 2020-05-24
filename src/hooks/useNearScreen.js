import { useEffect, useState, useRef } from "react";

export default function useNearScreen({
  distance = "100px",
  externalRef,
  once = true,
}) {
  const [isNearScreen, setShow] = useState(false);
  const fromRef = useRef();

  useEffect(() => {
    const onChange = (entries, observer) => {
      const el = entries[0];
      if (el.isIntersecting) {
        setShow(true);
        once && observer.disconnect();
      } else {
        !once && setShow(false);
      }
    };
    const observer = new IntersectionObserver(onChange, {
      rootMargin: distance,
      threshold: 1.0,
    });

    const element = externalRef ? externalRef.current : fromRef.current;

    if (element) observer.observe(element);

    return () => observer && observer.disconnect();
  });

  return { isNearScreen, fromRef };
}
