import { notFound } from "next/navigation";

/** Unknown URLs render the translated not-found page inside the site layout. */
export default function MissingPage() {
  notFound();
}
