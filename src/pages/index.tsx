import { type } from "os";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Index = () => {
  return (
    <section className="bg-white">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl ">
            Payments tool for software companies
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl ">
            From checkout to global sales tax compliance, companies around the
            world use Flowbite to simplify their payment stack.
          </p>
          <Link
            href="/register/register"
            className="inline-flex border-[0.1rem] border-gray-300 items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-black rounded-lg bg-primary-700 hover:bg-slate-100 focus:ring-4 focus:ring-primary-300"
          >
            Get started
          </Link>
          <Link
            href="/getUserPage"
            className="inline-flex border-[0.1rem] border-gray-300 items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-black rounded-lg bg-primary-700 hover:bg-slate-100 focus:ring-4 focus:ring-primary-300"
          >
            Speak to Sales
          </Link>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <Image
            src="/Assets/pict1.jpg"
            alt="mockup"
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </section>
  );
};

export default Index;
