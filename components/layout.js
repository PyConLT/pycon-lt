import Navbar from "./navbar";
import Footer from "./footer";
import Cover from "./cover";
export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <Cover />
      <main>{children}</main>
      <Footer />
    </>
  );
}
