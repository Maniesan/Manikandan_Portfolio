import Footer from "@/components/Footer";

export const metadata = {
  title: "MANIKANDAN ESWARAN Eswaran | About"
};
export default function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
