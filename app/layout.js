'use client'

import { Inter } from "next/font/google";
import "./globals.css";
import { store,persistor } from "@/store/store";
import {Provider} from 'react-redux';
import { ToastContainer } from "react-toastify";
import { PersistGate } from "redux-persist/integration/react";
const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Full App",
//   description: "Generated",
// };

export default function RootLayout({ children }) {
  return (
    
    <html lang="en">
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <body className={inter.className}>{children}
      <ToastContainer/>
      </body>
    </PersistGate>
      </Provider>
    </html>
  
  );
}
