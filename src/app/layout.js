import "./globals.css";

export const metadata= {
  title: "E-Store",
  description: "E-commerce store - Nextjs builting Project",
};

export default function RootLayout({children}){
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
