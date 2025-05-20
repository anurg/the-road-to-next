import Link from "next/link";
const HomePage = () => {
  return (
    <div>
      <h2 className="text-lg bg-blue-600">Home Page!!!</h2>;
      <Link href="/tickets" className="underline">
        Go To Tickets Page
      </Link>
    </div>
  );
};

export default HomePage;
