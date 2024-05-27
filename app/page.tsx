import { Suspense } from 'react';
import { unstable_noStore as noStore } from 'next/cache';
import Link from 'next/link';
import Image from 'next/image';
import conf from 'public/images/me/conf.jpg';
import collision from 'public/images/me/collision.jpg';
import drone from 'public/images/me/drone.jpg';
import nyc from 'public/images/me/nyc.jpg';
import sbs from 'public/images/me/sbs.jpg';
import drone2 from 'public/images/me/drone2.jpg';
import beach from 'public/images/me/beach.jpg';
// import avatar from 'app/avatar.jpg';
import ViewCounter from 'app/blog/view-counter';
import { PreloadResources } from 'app/preload';
import {
    getLeeYouTubeSubs,
    getVercelYouTubeSubs,
    getViewsCount,
} from 'app/db/queries';

function Badge(props) {
    return (
        <a
            {...props}
            target="_blank"
            className="inline-flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
        />
    );
}

function ArrowIcon() {
    return (
        <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
                fill="currentColor"
            />
        </svg>
    );
}

function ChannelLink({ img, link, name }) {
    return (
        <div className="group flex w-full">
            <a
                href={link}
                target="_blank"
                className="flex w-full items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800"
            >
                <div className="flex items-center space-x-3">
                    <div className="relative h-16">
                        <Image
                            alt={name}
                            src={img}
                            height={64}
                            width={64}
                            sizes="33vw"
                            className="h-16 w-16 rounded-full border border-neutral-200 dark:border-neutral-700"
                            priority
                        />
                        <div className="relative -right-10 -top-6 inline-flex h-6 w-6 items-center rounded-full border border-neutral-200 bg-white p-1 dark:border-neutral-700">
                            <svg width="15" height="11" role="img" aria-label="YouTube logo">
                                <use href="/sprite.svg#youtube" />
                            </svg>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <p className="font-medium text-neutral-900 dark:text-neutral-100">
                            {name}
                        </p>
                        <Suspense fallback={<p className="h-6" />}>
                            <Subs name={name} />
                        </Suspense>
                    </div>
                </div>
                <div className="transform text-neutral-700 transition-transform duration-300 group-hover:-rotate-12 dark:text-neutral-300">
                    <ArrowIcon />
                </div>
            </a>
        </div>
    );
}

async function Subs({ name }: { name: string }) {
    noStore();
    let subscribers;
    if (name === '@leerob') {
        subscribers = await getLeeYouTubeSubs();
    } else {
        subscribers = await getVercelYouTubeSubs();
    }

    return (
        <p className="text-neutral-600 dark:text-neutral-400">
            {subscribers} subscribers
        </p>
    );
}

function BlogLink({ slug, name }) {
    return (
        <div className="group">
            <a
                href={`/blog/${slug}`}
                className="flex w-full items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800"
            >
                <div className="flex flex-col">
                    <p className="font-medium text-neutral-900 dark:text-neutral-100">
                        {name}
                    </p>
                    <Suspense fallback={<p className="h-6" />}>
                        <Views slug={slug} />
                    </Suspense>
                </div>
                <div className="transform text-neutral-700 transition-transform duration-300 group-hover:-rotate-12 dark:text-neutral-300">
                    <ArrowIcon />
                </div>
            </a>
        </div>
    );
}

async function Views({ slug }: { slug: string }) {
    let views = await getViewsCount();
    return <ViewCounter allViews={views} slug={slug} />;
}

export default function Page() {
    return (
        <section>
            <PreloadResources />
            <h1 className="mb-8 text-2xl font-medium tracking-tighter">
                hey, i'm Anya
            </h1>
            <p className="prose prose-neutral dark:prose-invert">
                {`I'm an electro-mechanical engineer who spends most of my time looking at the bleeding edge in defense, mobility and alternate energies.`}

                <br/><br/>

                {` I consider myself fortunate to have work at some high velocity organisations. Most recently, this was as employee #4 at `}
                <Badge href="https://neros.tech">
                    <img
                        alt="Neros"
                        src={"/images/orgs/neros.jpeg"}
                        className="!mr-1"
                        width="14"
                        height="14"
                    />
                    Neros Technologies
                </Badge>
                {`, a mass-manufacturer of precision strike drones with funding from `}
                <Badge href="https://sequoia.com">
                    <img
                        alt="Sequoia Capital"
                        src="/next-logo.svg"
                        className="!mr-1"
                        width="14"
                        height="14"
                    />
                    Sequoia
                </Badge>
                {` ,`}
                <Badge href="https://cantos.vc/">
                    <img
                        alt="Cantos"
                        src="/next-logo.svg"
                        className="!mr-1"
                        width="14"
                        height="14"
                    />
                    Cantos
                </Badge>
                {` ,`}
                <Badge href="http://www.boxgroup.com/">
                    <img
                        alt="Box Group"
                        src="/next-logo.svg"
                        className="!mr-1"
                        width="14"
                        height="14"
                    />
                    Box Group
                </Badge>
                {` ,`}
                <Badge href="https://foundersfund.com/team/peter-thiel/">
                    <img
                        alt="Peter Thiel"
                        src="/next-logo.svg"
                        className="!mr-1"
                        width="14"
                        height="14"
                    />
                    Peter Thiel
                </Badge>
                {` amongst other world-class investors. `}


                {` Before that, I was also the lead engineer at`}
                <Badge href="https://www.linkedin.com/company/pxlelite/about/">
                    <img
                        alt="PXL"
                        src="/next-logo.svg"
                        className="!mr-1"
                        width="14"
                        height="14"
                    />
                    PXL
                </Badge>
                {` a (now-acquired) wearables company building robust tracking systems for performance athletes. `}
                <br/>
                {/*{` To read more about my adventures building hardware, check out my `}*/}
                {/*<Link href="/work">work</Link>*/}
            </p>
            {/*<div className="grid grid-cols-2 grid-rows-4 sm:grid-rows-3 sm:grid-cols-3 gap-4 my-8">*/}
            {/*    <div className="relative h-40">*/}
            {/*        <Image*/}
            {/*            alt="Me speaking on stage at React Summit about the future of Next.js"*/}
            {/*            src={nyc}*/}
            {/*            fill*/}
            {/*            sizes="(max-width: 768px) 213px, 33vw"*/}
            {/*            priority*/}
            {/*            className="rounded-lg object-cover"*/}
            {/*        />*/}
            {/*    </div>*/}
            {/*    <div className="relative sm:row-span-2 row-span-1">*/}
            {/*        <Image*/}
            {/*            alt="Me standing on stage at Reactathon delivering the keynote"*/}
            {/*            src={collision}*/}
            {/*            fill*/}
            {/*            sizes="(max-width: 768px) 213px, 33vw"*/}
            {/*            priority*/}
            {/*            className="rounded-lg object-cover object-top sm:object-center"*/}
            {/*        />*/}
            {/*    </div>*/}
            {/*    <div className="relative">*/}
            {/*        <Image*/}
            {/*            alt="Me and Guillermo Rauch on stage for Vercel Ship, answering questions from the Next.js community"*/}
            {/*            src={beach}*/}
            {/*            fill*/}
            {/*            sizes="(max-width: 768px) 213px, 33vw"*/}
            {/*            priority*/}
            {/*            className="rounded-lg object-cover"*/}
            {/*        />*/}
            {/*    </div>*/}
            {/*    <div className="relative row-span-2">*/}
            {/*        <Image*/}
            {/*            alt="Me, Lydia, and Delba filming the Next.js Conf keynote"*/}
            {/*            src={drone}*/}
            {/*            fill*/}
            {/*            sizes="(max-width: 768px) 213px, 33vw"*/}
            {/*            priority*/}
            {/*            className="rounded-lg object-cover sm:object-center"*/}
            {/*        />*/}
            {/*    </div>*/}
            {/*    <div className="relative row-span-2">*/}
            {/*        <Image*/}
            {/*            alt="My badge on top of a pile of badges from a Vercel meetup we held"*/}
            {/*            src={conf}*/}
            {/*            fill*/}
            {/*            sizes="(max-width: 768px) 213px, 33vw"*/}
            {/*            priority*/}
            {/*            className="rounded-lg object-cover"*/}
            {/*        />*/}
            {/*    </div>*/}
            {/*    <div className="relative h-40">*/}
            {/*        <Image*/}
            {/*            alt="Me standing on stage at SmashingConf giving a talk about my optimism for the web"*/}
            {/*            src={sbs}*/}
            {/*            fill*/}
            {/*            sizes="(max-width: 768px) 213px, 33vw"*/}
            {/*            priority*/}
            {/*            className="rounded-lg object-cover"*/}
            {/*        />*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div className="prose prose-neutral dark:prose-invert">
            <p>
            {` I've also had a few other adventures I've been fortunate enough to embark on:  `}
            <br/>
            {`→ Served as a member of the Canadian National Chess team`} <br/>
            {`→ Used machine learning models to formulate new types of batteries `} <br/>
            {`→ Analyzed satellite telemetry data @ JPL`} <br/>
            {`→ Researched xyz for Purdue and EF `} <br/>
            {`→ Built climate resilient housing for droughts in Kenya `} <br/>
            {`→ Worked on a project to reduce the cost of solar panels by 50% `} <br/>
            </p>
            {/*<div className="my-8 flex w-full flex-col space-x-0 space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">*/}
            {/*    <ChannelLink*/}
            {/*        img={avatar}*/}
            {/*        name="@leerob"*/}
            {/*        link="https://www.youtube.com/@leerob"*/}
            {/*    />*/}
            {/*    <ChannelLink*/}
            {/*        img={vercel}*/}
            {/*        name="@vercel"*/}
            {/*        link="https://www.youtube.com/@vercelhq"*/}
            {/*    />*/}
            </div>
            <div className="prose prose-neutral dark:prose-invert">
                <p>
                    Over the past decade, I've written content on my blog and newsletter.
                    I try to keep things simple. You'll find writing about technologies
                    I'm interested in at the time, or how I'm learning and growing in my
                    career, sharing knowledge along the way.
                </p>
            </div>
            <div className="my-8 flex w-full flex-col space-y-4">
                <BlogLink
                    name="What Makes A Great Developer Experience?"
                    slug="developer-experience"
                />
                <BlogLink name="What is Developer Relations?" slug="devrel" />
                <BlogLink name="The Story of Heroku" slug="heroku" />
            </div>
            {/*<div className="prose prose-neutral dark:prose-invert">*/}
            {/*    <p>*/}
            {/*        I invest small angel checks into early stage startups building tools*/}
            {/*        for developers.*/}
            {/*    </p>*/}
            {/*</div>*/}
            {/*<div className="my-8 flex h-14 w-full flex-row space-x-2 overflow-x-auto">*/}
            {/*    <div className="flex items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800">*/}
            {/*        <a href="https://linear.app">*/}
            {/*            <svg width="78" height="20" role="img" aria-label="Linear logo">*/}
            {/*                <use href="/sprite.svg#linear" />*/}
            {/*            </svg>*/}
            {/*        </a>*/}
            {/*    </div>*/}
            {/*    <div className="flex items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800">*/}
            {/*        <a href="https://supabase.com">*/}
            {/*            <svg width="100" height="19" role="img" aria-label="Supabase logo">*/}
            {/*                <use href="/sprite.svg#supabase" />*/}
            {/*            </svg>*/}
            {/*        </a>*/}
            {/*    </div>*/}
            {/*    <div className="flex items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800">*/}
            {/*        <a href="https://www.makeswift.com/blog/makeswift-is-joining-bigcommerce">*/}
            {/*            <svg width="96" height="19" role="img" aria-label="Makeswift logo">*/}
            {/*                <use href="/sprite.svg#makeswift" />*/}
            {/*            </svg>*/}
            {/*        </a>*/}
            {/*    </div>*/}
            {/*    <div className="flex items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800">*/}
            {/*        <a href="https://resend.com">*/}
            {/*            <svg width="70" height="17" role="img" aria-label="Resend logo">*/}
            {/*                <use href="/sprite.svg#resend" />*/}
            {/*            </svg>*/}
            {/*        </a>*/}
            {/*    </div>*/}
            {/*    <div className="flex items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800">*/}
            {/*        <a href="https://bun.sh">*/}
            {/*            <svg width="35" height="27" role="img" aria-label="Bun logo">*/}
            {/*                <use href="/sprite.svg#bun" />*/}
            {/*            </svg>*/}
            {/*        </a>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className="prose prose-neutral dark:prose-invert">*/}
            {/*    <p>*/}
            {/*        I've worked with and advised companies on{' '}*/}
            {/*        <Link href="/blog/developer-marketing">developer marketing</Link>,{' '}*/}
            {/*        <Link href="/blog/devrel">developer relations</Link>, building*/}
            {/*        open-source communities, product-led growth, and more.*/}
            {/*    </p>*/}
            {/*</div>*/}
            <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
                <li>
                    <a
                        className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://www.linkedin.com/in/anya-singh/"
                    >
                        <ArrowIcon/>
                        <p className="ml-2 h-7">linkedin</p>
                    </a>
                </li>
                <li>
                    <a
                        className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://twitter.com/_anyasingh"
                    >
                        <ArrowIcon/>
                        <p className="ml-2 h-7">twitter</p>
                    </a>
                </li>
            </ul>
        </section>
    );
}