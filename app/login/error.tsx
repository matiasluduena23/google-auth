"use client"; // Error components must be Client Components

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <Button>
        <Link href={"/login"}>Volver</Link>
      </Button>
    </div>
  );
}
