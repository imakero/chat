import { useEffect, useRef, useState } from "react";

export function useEventSource(url: string, withCredentials: boolean = false) {
  const source = useRef<EventSource | null>(null);
  const [status, setStatus] = useState("init");
  useEffect(() => {
    if (url) {
      const es = new EventSource(url, { withCredentials });
      source.current = es;
      es.addEventListener("open", () => setStatus("open"));
      es.addEventListener("error", () => setStatus("error"));
      return () => {
        source.current = null;
        es.close();
      };
    }
    setStatus("closed");
    return undefined;
  }, [url, withCredentials]);
  return [source.current, status];
}

export declare type EventSourceEvent = Event & {
  data: string;
};

export function useEventSourceListener(
  source: EventSource,
  types: string[],
  listener: (e: EventSourceEvent) => void,
  dependencies: any[] = []
) {
  useEffect(() => {
    if (source) {
      types.forEach((type) => source.addEventListener(type, listener));
      return () =>
        types.forEach((type) => source.removeEventListener(type, listener));
    }
    return undefined;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [source, ...dependencies]);
}
