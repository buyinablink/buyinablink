"use client";
import Image from "next/image";
import "./page.css";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import KeenSlider from "keen-slider";
import logo from "../public/logo.svg";
import heroi from "../public/heroi.png";
import interfacei from "../public/interface.svg";
import payments from "../public/payments.svg";
export default function Home() {
  const keenSlider = new KeenSlider(
    "#keen-slider",
    {
      loop: true,
      slides: {
        origin: "center",
        perView: 1.25,
        spacing: 16,
      },
      breakpoints: {
        "(min-width: 1024px)": {
          slides: {
            origin: "auto",
            perView: 1.5,
            spacing: 32,
          },
        },
      },
    },
    []
  );
  const keenSliderPrev = () => {
    keenSlider.prev();
  };
  const keenSliderNext = () => {
    keenSlider.next();
  };
  return (
    <div>
      <header
        className="pb-6 lg:pb-0 sticky top-0"
        style={{ backgroundColor: "#2B303B", zIndex: 9999 }}
      >
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex-shrink-0">
              <a href="#" title="" className="flex">
                <Image
                  width={100}
                  height={100}
                  className="w-auto h-8 lg:h-10"
                  src={logo}
                  alt="Logo"
                />
              </a>
            </div>

            <button
              id="menu-toggle"
              type="button"
              className="inline-flex p-2 text-white transition-all duration-200 rounded-md lg:hidden focus:bg-[#232323] hover:bg-[#232323]"
            >
              <svg
                id="menu-open-icon"
                className="block w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 8h16M4 16h16"
                />
              </svg>

              <svg
                id="menu-close-icon"
                className="hidden w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <a
              href="https://seller.buyinablink.xyz"
              title=""
              className="items-center justify-center hidden px-4 py-3 ml-10 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md lg:inline-flex hover:bg-blue-700 focus:bg-blue-700"
              role="button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get started now
            </a>
          </nav>

          <nav
            id="mobile-menu"
            className="hidden pt-4 pb-6 rounded-md lg:hidden"
          >
            <div className="flow-root">
              <div className="flex flex-col px-6 -my-2 space-y-1 nav-links">
                <a
                  href="#"
                  title=""
                  className="inline-flex py-2 font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  Features
                </a>
                <a
                  href="#"
                  title=""
                  className="inline-flex py-2 font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  Solutions
                </a>
                <a
                  href="#"
                  title=""
                  className="inline-flex py-2 font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  Resources
                </a>
                <a
                  href="#"
                  title=""
                  className="inline-flex py-2 font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  Pricing
                </a>
              </div>
            </div>

            <div className="px-6 mt-6">
              <a
                href="#"
                title=""
                className="inline-flex justify-center px-4 py-3 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:bg-blue-700"
                role="button"
              >
                Get started now
              </a>
            </div>
          </nav>
        </div>
      </header>

      <div style={{ backgroundColor: "#232323" }}>
        <section className="bg-[#232323] py-10 sm:py-16 lg:py-24">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
              <div>
                <p className="text-base font-semibold tracking-wider text-blue-600 uppercase">
                  E-Commerce with Solana
                </p>
                <h1 className="mt-4 text-4xl font-bold highlight-text lg:mt-8 sm:text-6xl xl:text-6xl">
                  Transform Your Sales with Solana Blinks
                </h1>
                <p
                  className="mt-4 text-base lg:mt-8 sm:text-xl"
                  style={{ color: "#808389" }}
                >
                  Easily create your online store, share products via Solana
                  Blinks, and manage orders—all from a single dashboard.
                </p>

                <a
                  href="https://seller.buyinablink.xyz"
                  title=""
                  className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-black transition-all duration-200 bg-yellow-300 rounded-full lg:mt-16 hover:bg-yellow-400 focus:bg-yellow-400"
                  role="button"
                  target="_blank"
                >
                  Join for free
                  <svg
                    className="w-6 h-6 ml-8 -mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </a>

                <p style={{ color: "#808389" }} className="mt-5">
                  Already joined us?{" "}
                  <a
                    href="https://seller.buyinablink.xyz"
                    title=""
                    target="_blank"
                    className="link-text transition-all duration-200 hover:underline"
                    rel="noopener noreferrer"
                  >
                    Log in
                  </a>
                </p>
              </div>

              <div>
                <Image
                  width={0}
                  height={0}
                  className="w-full rounded-lg"
                  src={heroi}
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      <div
        className="layout-main bg"
        style={{ display: "block", paddingTop: "3rem" }}
      >
        <div className="restrictions-1 flex flex-wrap w-full py-6 info-section rounded-xl">
          <div className="w-full lg:w-1/2 p-9 highlight-text flex flex-col">
            <div>
              <h1 className="text-3xl mb-4">
                Simplified E-Commerce with Blinks
              </h1>
              <p className="medium-info-desc mb-6">
                Our core principles to make selling online easier and more
                secure.
              </p>
            </div>

            <div className="mt-auto">
              <div className="flex">
                <div className="small-info-ico">
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="26" height="26" rx="5" fill="#FACC14" />
                    <path
                      d="M11.2922 11.0189L12.5912 8.26523C12.629 8.18554 12.6871 8.11851 12.7591 8.07166C12.8311 8.02482 12.914 8 12.9987 8C13.0833 8 13.1662 8.02482 13.2382 8.07166C13.3102 8.11851 13.3683 8.18554 13.4062 8.26523L14.7052 11.0189L17.6092 11.4631C17.6929 11.4754 17.7717 11.5121 17.8366 11.5692C17.9015 11.6264 17.9497 11.7015 17.976 11.7861C18.0022 11.8708 18.0053 11.9615 17.9849 12.0478C17.9645 12.1342 17.9215 12.2128 17.8607 12.2747L15.7597 14.4168L16.2557 17.4431C16.3192 17.8316 15.9292 18.1274 15.5957 17.9442L12.9987 16.5147L10.4012 17.9442C10.0682 18.1279 9.67815 17.8316 9.74165 17.4426L10.2377 14.4163L8.13665 12.2742C8.07615 12.2123 8.03335 12.1337 8.01314 12.0475C7.99292 11.9613 7.99609 11.8708 8.02229 11.7864C8.04849 11.7019 8.09666 11.6269 8.16134 11.5699C8.22601 11.5128 8.3046 11.476 8.38815 11.4637L11.2922 11.0189Z"
                      fill="white"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <p className="">
                  Rated <strong>4.9/5</strong> from over <strong>600</strong>{" "}
                  reviews.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 p-4 grid md:grid-cols-2 grid-cols-1 gap-1">
            <div className="p-4 text-white">
              <div className="small-info-header flex">
                <div className="small-info-ico">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="50" height="50" rx="8" fill="#E9EFFD" />
                    <path
                      d="M37.5 12.5C37.5 14.1415 37.1767 15.767 36.5485 17.2835C35.9203 18.8001 34.9996 20.1781 33.8388 21.3388C32.6781 22.4996 31.3001 23.4203 29.7835 24.0485C28.267 24.6767 26.6415 25 25 25C23.3585 25 21.733 24.6767 20.2165 24.0485C18.6999 23.4203 17.3219 22.4996 16.1612 21.3388C15.0004 20.1781 14.0797 18.8001 13.4515 17.2835C12.8233 15.767 12.5 14.1415 12.5 12.5L25 12.5H37.5Z"
                      fill="#2563EB"
                    />
                    <path
                      d="M12.5 37.5C12.5 35.8585 12.8233 34.233 13.4515 32.7165C14.0797 31.1999 15.0004 29.8219 16.1612 28.6612C17.3219 27.5004 18.6999 26.5797 20.2165 25.9515C21.733 25.3233 23.3585 25 25 25C26.6415 25 28.267 25.3233 29.7835 25.9515C31.3001 26.5797 32.6781 27.5004 33.8388 28.6612C34.9996 29.8219 35.9203 31.1999 36.5485 32.7165C37.1767 34.233 37.5 35.8585 37.5 37.5L25 37.5L12.5 37.5Z"
                      fill="#2563EB"
                    />
                  </svg>
                </div>
                <h3>Instant Setup</h3>
              </div>
              <p className="small-info-desc">
                Create your store in minutes, no technical skills required.
              </p>
            </div>
            <div className="p-4 text-white">
              <div className="small-info-header flex">
                <div className="small-info-ico">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="50" height="50" rx="8" fill="#E9EFFD" />
                    <rect
                      x="10"
                      y="10.5001"
                      width="16.5"
                      height="16.5"
                      rx="5"
                      fill="#2563EB"
                    />
                    <path
                      d="M23.5 28.5C23.5 25.7386 25.7386 23.5 28.5 23.5H35C37.7614 23.5 40 25.7386 40 28.5V35C40 37.7614 37.7614 40 35 40H28.5C25.7386 40 23.5 37.7614 23.5 35V28.5Z"
                      fill="#2563EB"
                    />
                  </svg>
                </div>
                <h3>Secure Transactions</h3>
              </div>
              <p className="small-info-desc">
                Funds are held securely in escrow and only released when orders
                are confirmed as shipped.
              </p>
            </div>
            <div className="p-4 text-white">
              <div className="small-info-header flex">
                <div className="small-info-ico">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="50" height="50" rx="8" fill="#E9EFFD" />
                    <path
                      d="M12.2605 11.1558L25.3802 9.84385L38.5 24.9316L25.3802 24.9316L12.2605 11.1558Z"
                      fill="#2563EB"
                    />
                    <path
                      d="M12.2605 25.6257L25.3802 24.3138L38.5 39.4015L25.3802 39.4015L12.2605 25.6257Z"
                      fill="#2563EB"
                    />
                  </svg>
                </div>
                <h3>Shareable Blinks</h3>
              </div>
              <p className="small-info-desc">
                Share your store or individual products with a single Blink link
                on social media platforms like Twitter.
              </p>
            </div>
            <div className="p-4 text-white">
              <div className="small-info-header flex">
                <div className="small-info-ico">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="50" height="50" rx="8" fill="#E9EFFD" />
                    <path d="M25 9L35.8253 22.5H14.1747L25 9Z" fill="#2563EB" />
                    <path
                      d="M25 23L35.8253 36.5H14.1747L25 23Z"
                      fill="#2563EB"
                    />
                  </svg>
                </div>
                <h3>Efficient Order Management</h3>
              </div>
              <p className="small-info-desc">
                Track orders, manage inventory, and view sales insights from a
                single dashboard.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center items-center py-6">
          <div className="w-full max-w-6xl flex flex-wrap lg:flex-nowrap gap-x-6">
            <div className="w-full lg:w-1/2 flex justify-center items-center bg-blue-700 p-6 rounded-xl">
              <Image
                width={0}
                height={0}
                src={payments}
                alt="Payment Illustration"
                className="rounded-lg max-w-full h-auto"
              />
            </div>

            <div
              className="w-full lg:w-1/2 p-8 rounded-xl flex flex-col justify-center"
              style={{ backgroundColor: "#2B303B" }}
            >
              <h1 className="text-3xl mb-4" style={{ color: "#CACFD8" }}>
                Secure Payments with Solana-Powered Escrow
              </h1>

              <p className="medium-info-desc mb-6">
                Protect both buyers and sellers with automated escrow services
                that hold payments until delivery is confirmed.
              </p>

              <button
                className="border custom-border bg-transparent text-white py-2 px-6 rounded-xl mb-6 hover:bg-gray-700 transition-all"
                style={{ width: "fit-content" }}
              >
                See Details
              </button>

              <ul className="space-y-4">
                <li className="flex items-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12ZM16.03 8.97C16.1705 9.11063 16.2493 9.30125 16.2493 9.5C16.2493 9.69875 16.1705 9.88937 16.03 10.03L11.03 15.03C10.8894 15.1705 10.6988 15.2493 10.5 15.2493C10.3012 15.2493 10.1106 15.1705 9.97 15.03L7.97 13.03C7.89631 12.9613 7.83721 12.8785 7.79622 12.7865C7.75523 12.6945 7.73319 12.5952 7.73141 12.4945C7.72963 12.3938 7.74816 12.2938 7.78588 12.2004C7.8236 12.107 7.87974 12.0222 7.95096 11.951C8.02218 11.8797 8.10701 11.8236 8.2004 11.7859C8.29379 11.7482 8.39382 11.7296 8.49452 11.7314C8.59522 11.7332 8.69454 11.7552 8.78654 11.7962C8.87854 11.8372 8.96134 11.8963 9.03 11.97L10.5 13.44L12.735 11.205L14.97 8.97C15.1106 8.82955 15.3012 8.75066 15.5 8.75066C15.6988 8.75066 15.8894 8.82955 16.03 8.97Z"
                      fill="#0FA958"
                    />
                  </svg>

                  <span className="list-text">No Hidden Fees</span>
                </li>
                <li className="flex items-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12ZM16.03 8.97C16.1705 9.11063 16.2493 9.30125 16.2493 9.5C16.2493 9.69875 16.1705 9.88937 16.03 10.03L11.03 15.03C10.8894 15.1705 10.6988 15.2493 10.5 15.2493C10.3012 15.2493 10.1106 15.1705 9.97 15.03L7.97 13.03C7.89631 12.9613 7.83721 12.8785 7.79622 12.7865C7.75523 12.6945 7.73319 12.5952 7.73141 12.4945C7.72963 12.3938 7.74816 12.2938 7.78588 12.2004C7.8236 12.107 7.87974 12.0222 7.95096 11.951C8.02218 11.8797 8.10701 11.8236 8.2004 11.7859C8.29379 11.7482 8.39382 11.7296 8.49452 11.7314C8.59522 11.7332 8.69454 11.7552 8.78654 11.7962C8.87854 11.8372 8.96134 11.8963 9.03 11.97L10.5 13.44L12.735 11.205L14.97 8.97C15.1106 8.82955 15.3012 8.75066 15.5 8.75066C15.6988 8.75066 15.8894 8.82955 16.03 8.97Z"
                      fill="#0FA958"
                    />
                  </svg>

                  <span className="list-text">
                    Instant Release on Confirmation
                  </span>
                </li>
                <li className="flex items-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12ZM16.03 8.97C16.1705 9.11063 16.2493 9.30125 16.2493 9.5C16.2493 9.69875 16.1705 9.88937 16.03 10.03L11.03 15.03C10.8894 15.1705 10.6988 15.2493 10.5 15.2493C10.3012 15.2493 10.1106 15.1705 9.97 15.03L7.97 13.03C7.89631 12.9613 7.83721 12.8785 7.79622 12.7865C7.75523 12.6945 7.73319 12.5952 7.73141 12.4945C7.72963 12.3938 7.74816 12.2938 7.78588 12.2004C7.8236 12.107 7.87974 12.0222 7.95096 11.951C8.02218 11.8797 8.10701 11.8236 8.2004 11.7859C8.29379 11.7482 8.39382 11.7296 8.49452 11.7314C8.59522 11.7332 8.69454 11.7552 8.78654 11.7962C8.87854 11.8372 8.96134 11.8963 9.03 11.97L10.5 13.44L12.735 11.205L14.97 8.97C15.1106 8.82955 15.3012 8.75066 15.5 8.75066C15.6988 8.75066 15.8894 8.82955 16.03 8.97Z"
                      fill="#0FA958"
                    />
                  </svg>

                  <span className="list-text">Transparency and Security</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center items-center">
          <div className="w-full max-w-6xl flex flex-wrap lg:flex-nowrap gap-x-6">
            <div
              className="w-full lg:w-1/2 p-8 rounded-xl flex flex-col justify-center"
              style={{ backgroundColor: "#2B303B" }}
            >
              <h1 className="text-3xl mb-4" style={{ color: "#CACFD8" }}>
                All-in-One Solution for Your E-Commerce Needs
              </h1>

              <p className="medium-info-desc mb-6">
                Buy in a Blink provides the tools you need to manage your store,
                process payments, and handle orders seamlessly.
              </p>

              <button
                className="border custom-border bg-transparent text-white py-2 px-6 rounded-xl mb-6 hover:bg-gray-700 transition-all"
                style={{ width: "fit-content" }}
              >
                See Details
              </button>

              <ul className="space-y-4">
                <li className="flex items-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12ZM16.03 8.97C16.1705 9.11063 16.2493 9.30125 16.2493 9.5C16.2493 9.69875 16.1705 9.88937 16.03 10.03L11.03 15.03C10.8894 15.1705 10.6988 15.2493 10.5 15.2493C10.3012 15.2493 10.1106 15.1705 9.97 15.03L7.97 13.03C7.89631 12.9613 7.83721 12.8785 7.79622 12.7865C7.75523 12.6945 7.73319 12.5952 7.73141 12.4945C7.72963 12.3938 7.74816 12.2938 7.78588 12.2004C7.8236 12.107 7.87974 12.0222 7.95096 11.951C8.02218 11.8797 8.10701 11.8236 8.2004 11.7859C8.29379 11.7482 8.39382 11.7296 8.49452 11.7314C8.59522 11.7332 8.69454 11.7552 8.78654 11.7962C8.87854 11.8372 8.96134 11.8963 9.03 11.97L10.5 13.44L12.735 11.205L14.97 8.97C15.1106 8.82955 15.3012 8.75066 15.5 8.75066C15.6988 8.75066 15.8894 8.82955 16.03 8.97Z"
                      fill="#0FA958"
                    />
                  </svg>

                  <span className="list-text">Real-Time Inventory Updates</span>
                </li>
                <li className="flex items-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12ZM16.03 8.97C16.1705 9.11063 16.2493 9.30125 16.2493 9.5C16.2493 9.69875 16.1705 9.88937 16.03 10.03L11.03 15.03C10.8894 15.1705 10.6988 15.2493 10.5 15.2493C10.3012 15.2493 10.1106 15.1705 9.97 15.03L7.97 13.03C7.89631 12.9613 7.83721 12.8785 7.79622 12.7865C7.75523 12.6945 7.73319 12.5952 7.73141 12.4945C7.72963 12.3938 7.74816 12.2938 7.78588 12.2004C7.8236 12.107 7.87974 12.0222 7.95096 11.951C8.02218 11.8797 8.10701 11.8236 8.2004 11.7859C8.29379 11.7482 8.39382 11.7296 8.49452 11.7314C8.59522 11.7332 8.69454 11.7552 8.78654 11.7962C8.87854 11.8372 8.96134 11.8963 9.03 11.97L10.5 13.44L12.735 11.205L14.97 8.97C15.1106 8.82955 15.3012 8.75066 15.5 8.75066C15.6988 8.75066 15.8894 8.82955 16.03 8.97Z"
                      fill="#0FA958"
                    />
                  </svg>

                  <span className="list-text">Automated Payment Handling</span>
                </li>
                <li className="flex items-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12ZM16.03 8.97C16.1705 9.11063 16.2493 9.30125 16.2493 9.5C16.2493 9.69875 16.1705 9.88937 16.03 10.03L11.03 15.03C10.8894 15.1705 10.6988 15.2493 10.5 15.2493C10.3012 15.2493 10.1106 15.1705 9.97 15.03L7.97 13.03C7.89631 12.9613 7.83721 12.8785 7.79622 12.7865C7.75523 12.6945 7.73319 12.5952 7.73141 12.4945C7.72963 12.3938 7.74816 12.2938 7.78588 12.2004C7.8236 12.107 7.87974 12.0222 7.95096 11.951C8.02218 11.8797 8.10701 11.8236 8.2004 11.7859C8.29379 11.7482 8.39382 11.7296 8.49452 11.7314C8.59522 11.7332 8.69454 11.7552 8.78654 11.7962C8.87854 11.8372 8.96134 11.8963 9.03 11.97L10.5 13.44L12.735 11.205L14.97 8.97C15.1106 8.82955 15.3012 8.75066 15.5 8.75066C15.6988 8.75066 15.8894 8.82955 16.03 8.97Z"
                      fill="#0FA958"
                    />
                  </svg>

                  <span className="list-text">Decentralized Verification</span>
                </li>
              </ul>
            </div>

            <div className="w-full lg:w-1/2 flex justify-center items-center bg-blue-700 p-6 rounded-xl">
              <Image
                width={0}
                height={0}
                src={interfacei}
                alt="Payment Illustration"
                className="rounded-lg max-w-full h-auto"
              />
            </div>
          </div>
        </div>

        <section>
          <div
            className="max-w-[1152px] px-4 py-6 sm:px-6 lg:me-0 lg:py-6 lg:pe-0 lg:ps-8 xl:py-6"
            style={{ margin: "auto" }}
          >
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center lg:gap-16">
              <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                <h2
                  className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
                  style={{
                    textAlign: "left !important",
                    color: "#d2d2d2 !important",
                  }}
                >
                  Loved by our customers
                </h2>

                <p
                  className="mt-4 text-gray-700"
                  style={{ textAlign: "left !important", color: "#808389" }}
                >
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Voluptas veritatis illo placeat harum porro optio fugit a
                  culpa sunt id!
                </p>

                <div className="hidden lg:mt-8 lg:flex lg:gap-4">
                  <button
                    onClick={keenSliderPrev}
                    aria-label="Previous slide"
                    id="keen-slider-previous-desktop"
                    className="rounded-full border border-blue-600 p-3 text-blue-600 transition hover:bg-blue-600 hover:text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="size-5 rtl:rotate-180"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.75 19.5L8.25 12l7.5-7.5"
                      />
                    </svg>
                  </button>

                  <button
                    onClick={keenSliderNext}
                    aria-label="Next slide"
                    id="keen-slider-next-desktop"
                    className="rounded-full border border-blue-600 p-3 text-blue-600 transition hover:bg-blue-600 hover:text-white"
                  >
                    <svg
                      className="size-5 rtl:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 5l7 7-7 7"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="-mx-6 lg:col-span-2 lg:mx-0">
                <div id="keen-slider" className="keen-slider">
                  <div className="keen-slider__slide rounded-xl">
                    <blockquote className="flex h-full flex-col justify-between testimonial-block p-6 shadow-sm sm:p-8 lg:p-12">
                      <div>
                        <div className="flex gap-0.5 text-yellow-500">
                          <svg
                            className="size-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>

                          <svg
                            className="size-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>

                          <svg
                            className="size-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>

                          <svg
                            className="size-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>

                          <svg
                            className="size-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </div>

                        <div className="mt-4 testimonial-text-cont">
                          <p
                            className="text-2xl font-bold text-blue-600 sm:text-3xl"
                            style={{ color: "#b2b2b2 !important" }}
                          >
                            Darrell Steward
                          </p>

                          <p
                            className="mt-4 leading-relaxed text-gray-700"
                            style={{ color: "#808389 !important" }}
                          >
                            Efficient and professional. I will definitely use
                            their services again. The professionalism of this
                            team made the entire process effortless and
                            stress-free.
                          </p>
                        </div>
                      </div>
                      <footer
                        className="mt-4 text-sm font-medium text-gray-700 sm:mt-6"
                        style={{ color: "#808389 !important" }}
                      >
                        &mdash; deliver.com
                      </footer>
                    </blockquote>
                  </div>
                  <div className="keen-slider__slide rounded-xl">
                    <blockquote className="flex h-full flex-col justify-between testimonial-block p-6 shadow-sm sm:p-8 lg:p-12">
                      <div>
                        <div className="flex gap-0.5 text-yellow-500">
                          <svg
                            className="size-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>

                          <svg
                            className="size-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>

                          <svg
                            className="size-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>

                          <svg
                            className="size-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>

                          <svg
                            className="size-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </div>

                        <div className="mt-4 testimonial-text-cont">
                          <p
                            className="text-2xl font-bold text-blue-600 sm:text-3xl"
                            style={{ color: "#b2b2b2 !important" }}
                          >
                            Annette Black
                          </p>

                          <p
                            className="mt-4 leading-relaxed text-gray-700"
                            style={{ color: "#808389 !important" }}
                          >
                            Reliable and trustworthy. They have earned my trust
                            and loyalty. This company has consistently
                            demonstrated reliability and trustworthiness.
                          </p>
                        </div>
                      </div>

                      <footer
                        className="mt-4 text-sm font-medium text-gray-700 sm:mt-6"
                        style={{ color: "#808389 !important" }}
                      >
                        &mdash; shop.co
                      </footer>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-center gap-4 lg:hidden">
              <button
                onClick={() => keenSliderPrev}
                aria-label="Previous slide"
                id="keen-slider-previous"
                className="rounded-full border border-blue-600 p-4 text-blue-600 transition hover:bg-blue-600 hover:text-white"
              >
                <svg
                  className="size-5 -rotate-180 transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 5l7 7-7 7"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  />
                </svg>
              </button>

              <button
                onClick={keenSliderNext}
                aria-label="Next slide"
                id="keen-slider-next"
                className="rounded-full border border-blue-600 p-4 text-blue-600 transition hover:bg-blue-600 hover:text-white"
              >
                <svg
                  className="size-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 5l7 7-7 7"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  />
                </svg>
              </button>
            </div>
          </div>
        </section>
      </div>

      <section
        className="py-10 sm:pt-16 lg:pt-24"
        style={{ backgroundColor: "#2c303b" }}
      >
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-12">
            <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
              <Image
                width={0}
                height={0}
                className="w-auto h-9"
                src={logo}
                alt=""
              />

              <p className="text-base leading-relaxed text-gray-600 mt-7">
                Simplifies e-commerce by providing an easy way to create and
                share your store using Solana Blinks. Secure, fast, and reliable
                for both buyers and sellers.
              </p>

              <ul className="flex items-center space-x-3 mt-9">
                <li>
                  <a
                    href="#"
                    title=""
                    className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600 focus:bg-blue-600"
                  >
                    <svg
                      className="w-4 h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p
                className="text-sm font-semibold tracking-widest uppercase"
                style={{ color: "#808389" }}
              >
                Sellers
              </p>

              <ul className="mt-6 space-y-4 foot-links">
                <li>
                  <a
                    href="#"
                    title=""
                    className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                  >
                    {" "}
                    Sign In{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    title=""
                    className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                  >
                    {" "}
                    Dashboard{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    title=""
                    className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                  >
                    {" "}
                    Orders{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    title=""
                    className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                  >
                    {" "}
                    Products{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    title=""
                    className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                  >
                    {" "}
                    Blinks{" "}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p
                className="text-sm font-semibold tracking-widest uppercase"
                style={{ color: "#808389" }}
              >
                Users
              </p>

              <ul className="mt-6 space-y-4 foot-links">
                <li>
                  <a
                    href="#"
                    title=""
                    className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                  >
                    {" "}
                    Sign In{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    title=""
                    className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                  >
                    {" "}
                    Orders{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    title=""
                    className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                  >
                    {" "}
                    Cart{" "}
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1 lg:col-span-2 lg:pl-8">
              <p
                className="text-sm font-semibold tracking-widest uppercase"
                style={{ color: "#808389" }}
              >
                Subscribe to newsletter
              </p>

              <form action="#" method="POST" className="mt-6">
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-6 py-4 mt-3 font-semibold text-white transition-all duration-200 bg-blue-600 rounded-md hover:bg-blue-700 focus:bg-blue-700"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <hr className="mt-16 mb-10 border-gray-200" />

          <p className="text-sm text-center text-gray-600">
            © Copyright 2024, All Rights Reserved by Buy In A Blink
          </p>
        </div>
      </section>
    </div>
  );
}
