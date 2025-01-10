import "@/app/globals.css";
import Navbar from "@/components/Navbar";



const RootLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <html>
      <body>
        <Navbar />
        <main className="max-w-3xl mx-auto pt-5">{children}</main>
      </body>
    </html>
  )
}

export default RootLayout