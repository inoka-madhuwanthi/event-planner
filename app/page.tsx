import Link from "next/link";
import {
    ArrowRight,
    CalendarDays,
    CheckCircle2,
    Sparkles,
} from "lucide-react";
import Image from "next/image";
import { getSession } from "@/lib/auth/server";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export default async function Home() {
    const session = await getSession();

    if (session.data?.user) {
        return <AuthenticatedHome user={session.data.user} />;
    }

    return <PublicHome />;
}


function PublicHome() {
    return (
        <div className="flex flex-1 flex-col">

            {/* Hero */}
            <section className="relative flex min-h-[calc(100vh-64px)] items-center overflow-hidden">

                <div className="grid w-full gap-12 py-20 lg:grid-cols-2 lg:items-center">

                    {/* Left */}
                    <div>
                        <Badge
                            variant="secondary"
                            className="mb-6 gap-2 rounded-full px-4 py-2"
                        >
                            <Sparkles className="h-4 w-4" />
                            Simple event planning
                        </Badge>

                        <h1 className="max-w-3xl text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                            Plan your event.
                            <br />
                            <span className="bg-gradient-to-r from-primary via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Bring people together.
              </span>
                        </h1>

                        <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
                            Create events, invite your friends, and keep track of everyone’s
                            RSVP from one simple place.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-3">
                            <Button size="lg" asChild className="gap-2 rounded-full px-6">
                                <Link href="/auth/sign-up">
                                    Create your first event
                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                            </Button>

                            <Button
                                size="lg"
                                variant="outline"
                                asChild
                                className="rounded-full px-6"
                            >
                                <Link href="/auth/sign-in">
                                    Sign in
                                </Link>
                            </Button>
                        </div>

                        <div className="mt-8 flex flex-wrap gap-6 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="h-4 w-4 text-green-500" />
                                Easy to use
                            </div>

                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="h-4 w-4 text-green-500" />
                                Simple invitations
                            </div>

                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="h-4 w-4 text-green-500" />
                                RSVP tracking
                            </div>
                        </div>
                    </div>

                    {/* Event Preview */}
                    <div className="relative flex items-center justify-center">
                        <div className="absolute -inset-6 -z-10 rounded-full bg-primary/10 blur-3xl" />

                        <Image
                            src="/home.png"
                            alt="Event Planner dashboard"
                            width={800}
                            height={600}
                            priority
                            className="w-full max-w-4xl scale-120 object-contain"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}


function AuthenticatedHome({
                               user,
                           }: {
    user: {
        name?: string | null;
        email?: string | null;
    };
}) {
    const displayName =
        user.name?.split(" ")[0] ||
        user.email?.split("@")[0] ||
        "there";

    return (
        <div className="flex flex-1 flex-col py-10">

            {/* Welcome */}
            <section className="relative overflow-hidden rounded-3xl border bg-muted/30 p-8 md:p-12">
                <div className="absolute right-[-100px] top-[-100px] h-[300px] w-[300px] rounded-full bg-primary/10 blur-3xl" />

                <div className="relative">
                    <Badge variant="secondary" className="mb-4 gap-2">
                        <Sparkles className="h-4 w-4" />
                        Welcome back
                    </Badge>

                    <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
                        Good to see you, {displayName}.
                    </h1>

                    <p className="mt-3 max-w-xl text-muted-foreground">
                        Ready to plan your next event? Create an event and start inviting
                        your guests.
                    </p>

                    <div className="mt-6 flex flex-wrap gap-3">
                        <Button asChild className="gap-2">
                            <Link href="/events/new">
                                <CalendarDays className="h-4 w-4" />
                                Create Event
                            </Link>
                        </Button>

                        <Button variant="outline" asChild>
                            <Link href="/dashboard">
                                View Dashboard
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}


function FeatureCard({icon, title, description,}: {
    icon: React.ReactNode;
    title: string;
    description: string;
}) {
    return (
        <Card className="group transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <CardHeader>
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                    {icon}
                </div>

                <CardTitle>{title}</CardTitle>

                <CardDescription className="leading-6">
                    {description}
                </CardDescription>
            </CardHeader>
        </Card>
    );
}