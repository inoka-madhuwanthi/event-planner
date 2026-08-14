import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

import { NeonAuthUIProvider } from "@neondatabase/auth-ui";
import { UserButton } from "@neondatabase/auth/react/ui";

import { authClient } from "@/lib/auth/client";
import { getSession } from "@/lib/auth/server";

export const dynamic = "force-dynamic";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Event Planner",
    description: "Create events, invite people, and manage RSVPs.",
};

export default async function RootLayout({
                                             children,
                                         }: LayoutProps<"/">) {
    const session = await getSession();
    const isAuthenticated = !!session.data?.user;

    return (
        <html
            lang="en"
            suppressHydrationWarning
            className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
        >
        <body className="min-h-full flex flex-col bg-background">
        <NeonAuthUIProvider authClient={authClient}>
            <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-xl">
                <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4">

                    {/* Logo */}
                    <Link
                        href="/"
                        className="flex items-center gap-2 font-semibold tracking-tight"
                    >
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">
                            E
                        </div>

                        <span>Event Planner</span>
                    </Link>

                    {/*/!* Navigation *!/*/}
                    {/*{isAuthenticated ? (*/}
                    {/*    <nav className="flex items-center gap-2">*/}
                    {/*        <Button variant="ghost" asChild>*/}
                    {/*            <Link href="/dashboard">*/}
                    {/*                Dashboard*/}
                    {/*            </Link>*/}
                    {/*        </Button>*/}

                    {/*        <Button asChild>*/}
                    {/*            <Link href="/events/new">*/}
                    {/*                Create Event*/}
                    {/*            </Link>*/}
                    {/*        </Button>*/}

                            <UserButton size="icon" />
                    {/*    </nav>*/}
                    {/*) : (*/}
                    {/*    <nav className="flex items-center gap-2">*/}
                    {/*        <Button variant="ghost" asChild>*/}
                    {/*            <Link href="/auth/sign-in">*/}
                    {/*                Sign in*/}
                    {/*            </Link>*/}
                    {/*        </Button>*/}

                    {/*        <Button asChild>*/}
                    {/*            <Link href="/auth/sign-up">*/}
                    {/*                Get started*/}
                    {/*            </Link>*/}
                    {/*        </Button>*/}
                    {/*    </nav>*/}
                    {/*)}*/}
                </div>
            </header>

            <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-4">
                {children}
            </main>
        </NeonAuthUIProvider>
        </body>
        </html>
    );
}