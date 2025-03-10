import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="p-5 bg-[#111827] text-white text-xl sticky top-0 left-0 right-0">
        React Components
      </div>

      <div className="p-5">
        <Link href="/star-rating" className="cursor-pointer hover:underline">
          1. Star Rating
        </Link>
      </div>
    </>
  );
}
