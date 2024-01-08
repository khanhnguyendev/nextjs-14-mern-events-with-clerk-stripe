import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <div className="flex h-screen flex-col">
        <Header />
        <body>{children}</body>
        <Footer />
      </div>
    </html>
  );
}
