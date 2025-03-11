import Link from "next/link";

export default function Home() {
  const data = [
    { id: 1, name: "Star Rating", link: "/star-rating" },
    { id: 2, name: "Multi Step Form", link: "/multi-step-form" },
  ];
  return (
    <>
      <div className="p-5 bg-[#111827] text-white text-xl sticky top-0 left-0 right-0">
        React Components
      </div>

      <div className="p-5 inline-flex flex-col gap-2">
        {data?.map((item) => (
          <Link
            key={item?.id}
            href={item?.link}
            className="cursor-pointer hover:underline"
          >
            {item?.id}. {item?.name}
          </Link>
        ))}
      </div>
    </>
  );
}
