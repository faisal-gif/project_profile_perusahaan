import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function AuthLayout({ children }) {
    return (
        <div className="flex min-h-screen flex-col items-center bg-base-100 pt-6 sm:justify-center sm:pt-0 ">
            <div>
                <Link href="/">
                    <ApplicationLogo className="h-20 w-20 fill-current" />
                </Link>
            </div>

            <div className="mt-6 w-96 overflow-hidden lg:w-full bg-base-100 px-6 py-4 shadow-md sm:max-w-md sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
