/*
 * @Author: Li yli2935@uwo.ca
 * @Date: 2023-09-03 18:37:10
 * @LastEditors: Li yli2935@uwo.ca
 * @LastEditTime: 2023-09-04 11:28:06
 * @FilePath: /airbnb/app/components/Container.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from "react";
interface ContainerProps {
  children: React.ReactNode;
}
const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
  <div className="
    max-w-[2520px]
    mx-auto
    xl:px-20
    md:px-10
    sm:px-2
    px-4
  ">
    {children}
  </div>
  );
};
export default Container;
