/*
 * @Author: Li yli2935@uwo.ca
 * @Date: 2023-09-03 16:09:02
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-09-04 15:40:20
 * @FilePath: /airbnb/app/components/navbar/Navbar.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from "react";
import Logo from "./Logo";
import Container from "../Container";
import Search from "./Search";
import UserMenu from "./UserMenu";

export default function Navbar() {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div
        className="
          py-4 
          border-b-[1px]
        "
      >
        <Container>
            <div className="
            flex 
            flex-row 
            items-center 
            justify-between
            gap-3
            md:gap-0
            ">
              <Logo />
              <Search />
              <UserMenu />
                
            </div>


        </Container>
        
      </div>
      
    </div>
  );
}
