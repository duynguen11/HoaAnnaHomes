"use client";
import { useState, useEffect } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import {
  FaTiktok,
  FaInstagram,
  FaYoutube,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";
import IquiLogo from "../../assets/images/IQUI-logo.png";
import "./Header.css";

const products = [
  {
    name: "CĂN HỘ CHO THUÊ",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "CĂN HỘ CHUYỂN NHƯỢNG",
    description: "Speak directly to your customers",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "CĂN HỘ DỰ ÁN MỚI",
    description: "Your customers’ data will be safe and secure",
    href: "#",
    icon: FingerPrintIcon,
  },
  {
    name: "VĂN PHÒNG CHO THUÊ",
    description: "Connect with third-party tools",
    href: "#",
    icon: SquaresPlusIcon,
  },
  {
    name: "NHÀ PHỐ - VILLA",
    description: "Build strategic funnels that will convert",
    href: "#",
    icon: ArrowPathIcon,
  },
];

const markets = [
  {
    name: "SỰ KIỆN",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "TIN TỨC",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: ChartPieIcon,
  },
];

const news = [
  {
    name: "LUẬT BĐS",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: SquaresPlusIcon,
  },
  {
    name: "TIPS ĐẦU TƯ CHO NGƯỜI MỚI",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: ArrowPathIcon,
  },
];

const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];

export default function Example() {
  const [isFixed, setIsFixed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Cố định navbar ngay khi bắt đầu cuộn
      setIsFixed(window.scrollY > 0);
    };

    // Gắn sự kiện scroll
    window.addEventListener("scroll", handleScroll);

    // Cleanup khi component bị unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="header bg-white">
      <div className="mx-auto max-w-7xl relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 px-6 sm:px-3.5 sm:before:flex-1">
        <div
          aria-hidden="true"
          className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
        >
          <div
            style={{
              clipPath:
                "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
            }}
            className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
        >
          <div
            style={{
              clipPath:
                "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
            }}
            className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
          />
        </div>
        <div className="flex flex-wrap items-center gap-y-2">
          <div className="text-xs p-2">
            <div className="flex flex-wrap justify-between">
              <strong className="pb-1 pe-6 text-blue-500 tracking-wider w-full sm:w-auto">
                Hotline: +84 906 821 738/ 093 884 6848
              </strong>
              <strong className="pb-1 text-blue-500 tracking-wider w-full sm:w-auto">
                Email: hoaanna.realtor@gmail.com
              </strong>
            </div>
            <div>
              <strong className="text-blue-500 tracking-wider w-full sm:w-auto">
                Zalo/WhatsApp/Viber
              </strong>
            </div>
          </div>

          <div className="flex flex-wrap items-center hidden sm:flex">
            <button
              type="button"
              className="px-3 py-2 text-gray-400 hover:text-blue-500"
            >
              <FaTiktok className="size-3" />
            </button>
            <button
              type="button"
              className="px-3 py-2 text-gray-400 hover:text-pink-500"
            >
              <FaInstagram className="size-4" />
            </button>
            <button
              type="button"
              className="px-3 py-2 text-gray-400 hover:text-red-600"
            >
              <FaYoutube className="size-5" />
            </button>
            <button
              type="button"
              className="px-3 py-2 text-gray-400 hover:text-blue-500"
            >
              <FaFacebook className="size-4" />
            </button>
            <button
              type="button"
              className="px-3 py-2 text-gray-400 hover:text-blue-700"
            >
              <FaLinkedin className="size-4" />
            </button>
          </div>
        </div>
      </div>
      <nav
        className={`mx-auto max-w-7xl flex items-center justify-between p-6 lg:px-8 transition-all duration-300 ${
          isFixed ? "fixed top-0 left-0 right-0 bg-white z-99" : "relative"
        }`}
      >
        <div className="py-1 flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <div className="flex flex-col items-center">
              <img alt="Iqui Logo" src={IquiLogo} className="h-10 w-auto" />
              <p
                style={{ fontSize: "8px" }}
                className="text-xs text-center font-semibold"
              >
                YOUR TRUSTED REAL ESTATE ADVISOR
              </p>
            </div>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-4">
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 p-2 text-xs font-semibold text-gray-500 hover:text-blue-700">
              DỰ ÁN
              <ChevronDownIcon
                aria-hidden="true"
                className="size-3 flex-none text-gray-600"
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute -left-8 top-full z-10 mt-9 w-screen max-w-md overflow-hidden rounded bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="p-1">
                {products.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-3 rounded-lg p-1 text-sm/6 hover:bg-gray-50"
                  >
                    <div className="flex size-11 flex-none items-center justify-center rounded bg-gray-50 group-hover:bg-white">
                      <item.icon
                        aria-hidden="true"
                        className="size-5 text-gray-600 group-hover:text-blue-700"
                      />
                    </div>
                    <div className="flex-auto">
                      <a
                        href={item.href}
                        className="block text-xs text-gray-900"
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-xs text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 divide-gray-900/5 bg-gray-50">
                {callsToAction.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-center gap-x-2 p-2 text-xs font-semibold text-gray-900 hover:bg-gray-100"
                  >
                    <item.icon
                      aria-hidden="true"
                      className="size-5 flex-none text-gray-400"
                    />
                    {item.name}
                  </a>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 p-2 text-xs font-semibold text-gray-500 hover:text-blue-700">
              THỊ TRƯỜNG
              <ChevronDownIcon
                aria-hidden="true"
                className="size-3 flex-none text-gray-600"
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute -left-8 top-full z-10 mt-9 w-screen max-w-md overflow-hidden rounded bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="p-1">
                {markets.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-3 rounded-lg p-1 text-sm/6 hover:bg-gray-50"
                  >
                    <div className="flex size-11 flex-none items-center justify-center rounded bg-gray-50 group-hover:bg-white">
                      <item.icon
                        aria-hidden="true"
                        className="size-5 text-gray-600 group-hover:text-blue-700"
                      />
                    </div>
                    <div className="flex-auto">
                      <a
                        href={item.href}
                        className="block text-xs text-gray-900"
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-xs text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </PopoverPanel>
          </Popover>
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 p-2 text-xs font-semibold text-gray-500 hover:text-blue-700">
              THƯ VIỆN BĐS
              <ChevronDownIcon
                aria-hidden="true"
                className="size-3 flex-none text-gray-600"
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute -left-8 top-full z-10 mt-9 w-screen max-w-md overflow-hidden rounded bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="p-1">
                {news.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-3 rounded-lg p-1 text-sm/6 hover:bg-gray-50"
                  >
                    <div className="flex size-11 flex-none items-center justify-center rounded bg-gray-50 group-hover:bg-white">
                      <item.icon
                        aria-hidden="true"
                        className="size-5 text-gray-600 group-hover:text-blue-700"
                      />
                    </div>
                    <div className="flex-auto">
                      <a
                        href={item.href}
                        className="block text-xs text-gray-900"
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-xs text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </PopoverPanel>
          </Popover>
          <a
            href="#"
            className="p-2 text-xs font-semibold text-gray-500 hover:text-blue-700"
          >
            TIKTOK
          </a>
          <a
            href="#"
            className="p-2 text-xs font-semibold text-gray-500 hover:text-blue-700"
          >
            TUYỂN DỤNG
          </a>
          <a
            href="#"
            className="p-2 text-xs font-semibold text-gray-500 hover:text-blue-700"
          >
            GIỚI THIỆU
          </a>
        </PopoverGroup>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="mobile-header fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto sr-only"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-3 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg p-3 pl-3 pr-3.5 text-[14px] font-semibold text-gray-600 hover:bg-gray-50">
                    DỰ ÁN
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="size-5 flex-none group-data-[open]:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...products].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded py-3 pl-6 pr-3 text-sm text-gray-600 hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg p-3 pl-3 pr-3.5 text-[14px] font-semibold text-gray-600 hover:bg-gray-50">
                    THỊ TRƯỜNG
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="size-5 flex-none group-data-[open]:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...markets].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded py-3 pl-6 pr-3 text-sm text-gray-600 hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg p-3 pl-3 pr-3.5 text-[14px] font-semibold text-gray-600 hover:bg-gray-50">
                    THƯ VIỆN BĐS
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="size-5 flex-none group-data-[open]:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...news].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded py-3 pl-6 pr-3 text-sm text-gray-600 hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg p-3 text-[14px] font-semibold text-gray-600 hover:bg-gray-50"
                >
                  TIKTOK
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg p-3 text-[14px] font-semibold text-gray-600 hover:bg-gray-50"
                >
                  TUYỂN DỤNG
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg p-3 text-[14px] font-semibold text-gray-600 hover:bg-gray-50"
                >
                  GIỚI THIỆU
                </a>
              </div>
              <div className="py-6">
                <p className="-mx-3 block rounded-lg p-3 text-[14px] font-semibold text-blue-500">
                  Hotline: +84 906 821 738
                </p>
                <p className="-mx-3 block rounded-lg p-3 text-[14px] font-semibold text-blue-500 tracking-wider">
                  Email: hoaanna.realtor@gmail.com
                </p>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}