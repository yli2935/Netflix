/*
 * @Author: Li yli2935@uwo.ca
 * @Date: 2023-09-04 11:29:28
 * @LastEditors: Li yli2935@uwo.ca
 * @LastEditTime: 2023-09-04 11:29:42
 * @FilePath: /airbnb/app/components/navbar/Logo.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return ( 
    <Image
      onClick={() => router.push('/')}
      className="hidden md:block cursor-pointer" 
      src="/images/logo.png" 
      height="100" 
      width="100" 
      alt="Logo" 
    />
   );
}
 
export default Logo;