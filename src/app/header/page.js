"use client";
import Link from 'next/link'
import React, { Fragment, useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";
import {
    Bars3Icon,
    XMarkIcon,
} from "@heroicons/react/24/outline";

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    return (
        <>
            <header className="bg-white shadow-md shadow-black/860">
                <nav
                    className="mx-auto flex max-w-screen-2xl items-center justify-between lg:px-[120px] p-4 lg:py-6 h-[72px]"
                    aria-label="Global"
                >
                    <Link href="/"><img src="/img/job-theme-logo.svg" /></Link>
                    <div className="flex lg:hidden ml-auto">
                        {/* <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </button> */}
                    </div>
                    {/* <div className="justify-start items-center hidden lg:flex lg:flex-0 w-full">
                        <div className="flex lg:justify-center gap-6 w-11/12">
                            <Link
                                href="javascript:void(0)"
                                className="text-black text-sm font-normal leading-4"
                            >
                                Engineering
                            </Link>
                            <Link
                                href="javascript:void(0)"
                                className="text-black text-sm font-normal leading-4"
                            >
                                Security
                            </Link>
                            <Link
                                href="javascript:void(0)"
                                className="text-black text-sm font-normal leading-4"
                            >
                                Product
                            </Link>
                            <Link
                                href="javascript:void(0)"
                                className="text-black text-sm font-normal leading-4"
                            >
                                Education
                            </Link>
                            <Link
                                href="javascript:void(0)"
                                className="text-black text-sm font-normal leading-4"
                            >
                                Community
                            </Link>
                            <Link
                                href="javascript:void(0)"
                                className="text-black text-sm font-normal leading-4"
                            >
                                Changelog
                            </Link>
                        </div>

                    </div> */}
                </nav>
                {/* <Dialog
                    as="div"
                    className="lg:hidden"
                    open={mobileMenuOpen}
                    onClose={setMobileMenuOpen}
                >
                    <div className="fixed inset-0 z-10" />
                    <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <a href="javascript:void(0)" className="-m-1.5 p-1.5">
                                <span >
                                <img className="h-8 w-40" src="/img/blog-logo.svg" alt="" /></span>
                            </a>
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-8 py-6 flex flex-col">
                                    <Link
                                        href="javascript:void(0)"
                                        className="text-black text-sm font-normal leading-4"
                                    >
                                        Engineering
                                    </Link>
                                    <Link
                                        href="javascript:void(0)"
                                        className="text-black text-sm font-normal leading-4"
                                    >
                                        Security
                                    </Link>
                                    <Link
                                        href="javascript:void(0)"
                                        className="text-black text-sm font-normal leading-4"
                                    >
                                        Product
                                    </Link>
                                    <Link
                                        href="javascript:void(0)"
                                        className="text-black text-sm font-normal leading-4"
                                    >
                                        Education
                                    </Link>
                                    <Link
                                        href="javascript:void(0)"
                                        className="text-black text-sm font-normal leading-4"
                                    >
                                        Community
                                    </Link>
                                    <Link
                                        href="javascript:void(0)"
                                        className="text-black text-sm font-normal leading-4"
                                    >
                                        Changelog
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Dialog.Panel>
                </Dialog> */}
            </header>
        </>
    )
}
