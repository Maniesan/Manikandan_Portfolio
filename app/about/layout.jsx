import Footer from "@/components/Footer";

export const metadata = {
  title: "Manikandan Eswaran | About"
};
export default function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
