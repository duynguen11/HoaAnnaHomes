import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import {
  BellIcon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const navigation = [
  { name: "KHU VỰC CÁC DỰ ÁN", href: "", current: true },
  { name: "QUẬN 1", href: "/realestateQ1", current: false },
  { name: "BÌNH THẠNH", href: "/realestateBT", current: false },
  { name: "THỦ THIÊM ", href: "/realestateTT", current: false },
  { name: "QUẬN 2", href: "/realestateQ2", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function AreasMenu() {
  return (
    <>
      <div className="mx-auto max-w-7xl">
        <Disclosure as="nav" className="bg-gray-50">
          <div className="px-8 sm:px-6 lg:px-8">
            <div className="flex py-2 items-center justify-between">
              <div className="flex items-center">
                <div className="hidden md:block">
                  <div className="flex items-baseline space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        as="a"
                        to={item.href}
                        aria-current={item.current ? "page" : undefined}
                        className={classNames(
                          item.current
                            ? "text-xs font-semibold text-gray-500"
                            : "text-xs font-semibold text-gray-500 hover:text-blue-700",
                          "rounded px-3 py-2 text-sm"
                        )}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-4 flex items-center md:ml-6">
                  <span className="text-sm text-gray-700 me-2">
                    Nhận thông tin dự án mới
                  </span>
                  <button
                    type="button"
                    className="relative rounded-full bg-red-600 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span className="absolute -inset-1.5" />
                    <BellIcon
                      aria-hidden="true"
                      className="text-white size-5"
                    />
                  </button>

                  {/* Profile dropdown */}
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                {/* Mobile menu button */}
                <DisclosureButton className="group relative inline-flex items-center justify-center rounded p-2 text-gray-400 hover:bg-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="absolute -inset-0.5" />
                  <span className="text-sm font-semibold text-gray-500 mr-2">
                    CHỌN KHU VỰC DỰ ÁN
                  </span>
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="block size-5 group-data-[open]:hidden"
                  />
                  <XMarkIcon
                    aria-hidden="true"
                    className="hidden size-5 group-data-[open]:block"
                  />
                </DisclosureButton>
              </div>
            </div>
          </div>

          <DisclosurePanel className="">
            <div className="space-y-2 px-3 pb-3 pt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  as="a"
                  to={item.href}
                  aria-current={item.current ? "page" : undefined}
                  className={classNames(
                    item.current
                      ? "text-sm bg-gray-400 text-white"
                      : "text-sm text-gray-400 hover:bg-gray-400 hover:text-white",
                    "block rounded p-2 text-base font-medium"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </DisclosurePanel>
        </Disclosure>
      </div>
    </>
  );
}
