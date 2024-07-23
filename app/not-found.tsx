


import Link from "next/link";
import Image from "next/image";
const NotFound: React.FC = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gradient-to-br from-green-100 to-red-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">404 - Page Not Found</h1>
        <p className="text-gray-800">
          Sorry, the page you are looking for could not be found.
        </p>
      </div>

      <Image
        src="/static/images/robot-pana.svg"
        alt="404 Error Image"
        width={400}
        height={600}
      />

      <Link href="/">
        <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-gray-700 mx-auto text-center rounded-full relative mt-4">
          <span>Go back to home</span>
          <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button>
      </Link>
    </main>
  );
};

export default NotFound;