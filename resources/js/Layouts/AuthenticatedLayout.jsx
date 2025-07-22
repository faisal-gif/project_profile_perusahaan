import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link, usePage } from '@inertiajs/react';
import { User } from 'lucide-react';
import { useState } from 'react';

export default function AuthenticatedLayout({ header, children }) {
    const user = usePage().props.auth.user;

    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <div className="drawer lg:drawer-open bg-base-300">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">

                <div className="navbar bg-gradient-to-br from-blue-50 to-green-50 shadow-sm ">
                    <div className="hidden md:flex-none">
                        <button className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-5 w-5 stroke-current"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg>
                        </button>
                    </div>
                    <div className="flex-1">
                        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block h-6 w-6 stroke-current"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                            </svg>
                        </label>
                    </div>
                    <div className="flex-none">
                        <Dropdown>
                            <Dropdown.Trigger>
                                <button className="btn btn-ghost flex items-center gap-2">
                                    <User size={20} />
                                    <span>{user.name}</span>
                                    <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 8l4 4 4-4" />
                                    </svg>
                                </button>
                            </Dropdown.Trigger>
                            <Dropdown.Content>
                                <Dropdown.Link href={route('profile.edit')}>
                                    Profile
                                </Dropdown.Link>
                                <Dropdown.Link href={route('logout')} method="post" as="button">
                                    Log Out
                                </Dropdown.Link>
                            </Dropdown.Content>
                        </Dropdown>
                    </div>
                </div>
                <main>{children}</main>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4 ">
                    <li>
                        <Link href="/">
                            <ApplicationLogo className="h-10 w-auto mx-auto" />
                        </Link>
                    </li>
                    {/* Sidebar content here */}
                    <li className='mb-3 pt-10'>
                        <h2 className="menu-title">News</h2>
                        <ul>
                            <li><Link href={route('news.index')}>News List</Link></li>
                            <li><Link href={route('category.index')}>Category</Link></li>
                        </ul>
                    </li>

                    <li className='mb-3'>
                        <h2 className="menu-title">Website</h2>
                        <ul>
                            <li><Link href={route('hero.index')}>Hero</Link></li>
                            <li><Link href={route('visi_misi.index')}>Visi & Misi</Link></li>
                            <li><Link href={route('tim.index')}>Tim</Link></li>
                            <li><Link href={route('layanan.index')}>Layanan</Link></li>
                            <li><Link href={route('kerjasama.index')}>Kerjasama</Link></li>
                        </ul>

                    </li>

                    <li className='mb-3'>
                        <h2 className="menu-title">Pesan</h2>
                        <ul>
                            <li><Link href={route('message.index')}>List Pesan</Link></li>
                        </ul>
                    </li>

                </ul>
            </div>
        </div>
        // <div className="min-h-screen bg-gray-100">
        //     <nav className="border-b border-gray-100 bg-white">
        //         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        //             <div className="flex h-16 justify-between">
        //                 <div className="flex">
        //                     <div className="flex shrink-0 items-center">
        //                         <Link href="/">
        //                             <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />
        //                         </Link>
        //                     </div>

        //                     <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
        //                         <NavLink
        //                             href={route('dashboard')}
        //                             active={route().current('dashboard')}
        //                         >
        //                             Dashboard
        //                         </NavLink>
        //                     </div>
        //                 </div>

        //                 <div className="hidden sm:ms-6 sm:flex sm:items-center">
        //                     <div className="relative ms-3">
        //                         <Dropdown>
        //                             <Dropdown.Trigger>
        //                                 <span className="inline-flex rounded-md">
        //                                     <button
        //                                         type="button"
        //                                         className="inline-flex items-center rounded-md border border-transparent bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out hover:text-gray-700 focus:outline-none"
        //                                     >
        //                                         {user.name}

        //                                         <svg
        //                                             className="-me-0.5 ms-2 h-4 w-4"
        //                                             xmlns="http://www.w3.org/2000/svg"
        //                                             viewBox="0 0 20 20"
        //                                             fill="currentColor"
        //                                         >
        //                                             <path
        //                                                 fillRule="evenodd"
        //                                                 d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        //                                                 clipRule="evenodd"
        //                                             />
        //                                         </svg>
        //                                     </button>
        //                                 </span>
        //                             </Dropdown.Trigger>

        //                             <Dropdown.Content>
        //                                 <Dropdown.Link
        //                                     href={route('profile.edit')}
        //                                 >
        //                                     Profile
        //                                 </Dropdown.Link>
        //                                 <Dropdown.Link
        //                                     href={route('logout')}
        //                                     method="post"
        //                                     as="button"
        //                                 >
        //                                     Log Out
        //                                 </Dropdown.Link>
        //                             </Dropdown.Content>
        //                         </Dropdown>
        //                     </div>
        //                 </div>

        //                 <div className="-me-2 flex items-center sm:hidden">
        //                     <button
        //                         onClick={() =>
        //                             setShowingNavigationDropdown(
        //                                 (previousState) => !previousState,
        //                             )
        //                         }
        //                         className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition duration-150 ease-in-out hover:bg-gray-100 hover:text-gray-500 focus:bg-gray-100 focus:text-gray-500 focus:outline-none"
        //                     >
        //                         <svg
        //                             className="h-6 w-6"
        //                             stroke="currentColor"
        //                             fill="none"
        //                             viewBox="0 0 24 24"
        //                         >
        //                             <path
        //                                 className={
        //                                     !showingNavigationDropdown
        //                                         ? 'inline-flex'
        //                                         : 'hidden'
        //                                 }
        //                                 strokeLinecap="round"
        //                                 strokeLinejoin="round"
        //                                 strokeWidth="2"
        //                                 d="M4 6h16M4 12h16M4 18h16"
        //                             />
        //                             <path
        //                                 className={
        //                                     showingNavigationDropdown
        //                                         ? 'inline-flex'
        //                                         : 'hidden'
        //                                 }
        //                                 strokeLinecap="round"
        //                                 strokeLinejoin="round"
        //                                 strokeWidth="2"
        //                                 d="M6 18L18 6M6 6l12 12"
        //                             />
        //                         </svg>
        //                     </button>
        //                 </div>
        //             </div>
        //         </div>

        //         <div
        //             className={
        //                 (showingNavigationDropdown ? 'block' : 'hidden') +
        //                 ' sm:hidden'
        //             }
        //         >
        //             <div className="space-y-1 pb-3 pt-2">
        //                 <ResponsiveNavLink
        //                     href={route('dashboard')}
        //                     active={route().current('dashboard')}
        //                 >
        //                     Dashboard
        //                 </ResponsiveNavLink>
        //             </div>

        //             <div className="border-t border-gray-200 pb-1 pt-4">
        //                 <div className="px-4">
        //                     <div className="text-base font-medium text-gray-800">
        //                         {user.name}
        //                     </div>
        //                     <div className="text-sm font-medium text-gray-500">
        //                         {user.email}
        //                     </div>
        //                 </div>

        //                 <div className="mt-3 space-y-1">
        //                     <ResponsiveNavLink href={route('profile.edit')}>
        //                         Profile
        //                     </ResponsiveNavLink>
        //                     <ResponsiveNavLink
        //                         method="post"
        //                         href={route('logout')}
        //                         as="button"
        //                     >
        //                         Log Out
        //                     </ResponsiveNavLink>
        //                 </div>
        //             </div>
        //         </div>
        //     </nav>

        //     {header && (
        //         <header className="bg-white shadow">
        //             <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        //                 {header}
        //             </div>
        //         </header>
        //     )}

        //     <main>{children}</main>
        // </div>
    );
}
