"use client";

import { Button } from "react-bootstrap";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div>
      <h1>Error</h1>
      <p>Something went wrong.</p>
      <Button onClick={reset}>Try again.</Button>
    </div>
  );
}
