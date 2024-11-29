'use client'
import Layout from "@/components/layout/main";
import { store } from "@/redux/store";
import { Provider } from "react-redux";
import "../public/globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google" content="notranslate" />
        <title>Library App</title>
      </head>
      <body>
        <Provider store={store}>
            {children}
        </Provider>

      </body>
    </html>
  );
}
