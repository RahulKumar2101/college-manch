import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "College Manch",
  description: "Compare Colleges, Watch Reviews & Videos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-gray-900">
        <Navbar />
        {/* Add top padding to avoid overlap with fixed navbar */}
  <main className="pt-16 px-4">{children}</main>
      </body>
    </html>
  );
}
