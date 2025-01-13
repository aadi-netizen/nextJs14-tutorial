import "@/app/globals.css";
import Navbar from "@/components/Navbar";



const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className="!scroll-smooth">
      <body>
        <Navbar />
        <main className="max-w-5xl mx-auto pt-5">{children}</main>
      </body>
    </html>
  )
}

export default RootLayout