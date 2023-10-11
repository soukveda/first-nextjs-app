import { UnsplashUser } from "@/models/unsplash-user";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { cache } from "react";
import { Alert } from "react-bootstrap";

interface PageProps {
  params: { username: string };
}

async function getUser(username: string): Promise<UnsplashUser> {
  const resp = await fetch(
    `https://api.unsplash.com/users/${username}?client_id=${process.env.UNSPLASH_ACCESS_KEY}`
  );

  if (resp.status === 404) {
    notFound();
  }

  return await resp.json();
}

/**
 * This is necessary to introduce caching in the react nextjs
 * application if we are not using the native fetching library.
 */
// const getUserCached = cache(getUser)

/**
 * Here, we have an example where Nextjs will deduple our fetch calls.
 * Even though we are 'calling' the fetch func with the same URL, the first
 * call is cached...while the second call will be recognized...and therefore,
 * the cached value will be retrieved.
 */

export async function generateMetadata({
  params: { username },
}: PageProps): Promise<Metadata> {
  const user: UnsplashUser = await getUser(username);

  return {
    // title: user.first_name + " " + user.last_name
    title:
      ([user.first_name, user.last_name].filter(Boolean).join(" ") ||
        user.username) + " - NextJS Image Gallery",
  };
}

export default async function Page({ params: { username } }: PageProps) {
  const user: UnsplashUser = await getUser(username);

  return (
    <div>
      <Alert>
        This profile page uses <strong>generateMetadata</strong> to set the{" "}
        <strong>page title</strong> dynamically.
      </Alert>
      <h1>{user.username}</h1>
      <p>First name: {user.first_name}</p>
      <p>First name: {user.last_name}</p>
      <a href={"https://unsplash.com/" + user.username}>Unsplash profile</a>
    </div>
  );
}
