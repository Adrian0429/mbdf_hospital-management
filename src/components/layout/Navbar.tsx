import Image from "next/image"
import Link from "next/link"
import ButtonLink from "../ButtonLink";

function Navbar(){
    return(
        <nav className="flex flex-row justify-between pt-12">
            <Image 
                src={"./Hospital.svg"} 
                alt={"Hospital Logo"}
                width={100}
                height={50}    
            ></Image>
            <div className="space-x-5 flex items-center">
                <Link href={"/"}>Home</Link>
                <Link href={"/booking"}>Services</Link>
                <Link href={"/doctor"}>Doctors</Link>
                <Link href={""}>About Us</Link>
                <Link href={""}>Contact Us</Link>
            </div>
            <div className="flex flex-row space-x-10">
                <ButtonLink href={"/login"} className="bg-[#156C6D] text-white">Masuk</ButtonLink>
                <ButtonLink href={"/register"} className="text-[#156C6D] border-[#156C6D] border-2">Daftar</ButtonLink>
            </div>
        </nav>
    )
}

export default Navbar;