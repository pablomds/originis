import NavbarPublic from "@/components/Header/NavbarPublic";
import FooterPublic from "@/components/Footer/FooterPublic";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header><NavbarPublic /></header>
      <main>{children}</main>
      <FooterPublic/>
    </>
  );
};
