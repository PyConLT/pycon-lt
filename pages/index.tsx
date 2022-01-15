import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div>
      {/* TODO, move to layour component */}
      <main>
        <Link href="/events/2022">
          <a>2022</a>
        </Link>
      </main>

      {/* TODO move to layout component */}
      <footer>
        <a>Footer</a>
      </footer>
    </div>
  );
};

export default Home;
