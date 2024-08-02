import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Pagina principal</h1>
      <Link href={"/login"} className="border p-2 rounded-lg hover:opacity-40">
        Iniciar Sesion
      </Link>
    </main>
  );
}
