/*
 * @Author: Li yli2935@uwo.ca
 * @Date: 2023-09-03 15:55:06
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-09-04 22:54:59
 * @FilePath: /airbnb/app/layout.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import "./globals.css";

import Navbar from "@/app/components/navbar/Navbar";
import { Nunito } from "next/font/google";
import ClientOnly from "./components/ClientOnly";
export const metadata = {
  title: "Airbnb",
  description: "Airbnb Clone",
};
const font = Nunito({
  subsets: ["latin"],
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <Navbar />
        </ClientOnly>
        <div className="pb-20 pt-28">{children}</div>
      </body>
    </html>
  );
}
