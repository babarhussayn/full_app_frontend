'use client'

import { Inter } from "next/font/google";
import "./globals.css";
import { store } from "@/store/store";
import {Provider} from 'react-redux';
import { ToastContainer } from "react-toastify";
const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Full App",
//   description: "Generated",
// };

export default function RootLayout({ children }) {
  return (
    
    <html lang="en">
      <Provider store={store}>
      <body className={inter.className}>{children}
      
      </body>
    
      </Provider>
    </html>
  
  );
}
