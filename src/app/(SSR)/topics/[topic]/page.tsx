import { UnsplashImage } from "@/models/unsplash-image";
import Image from "next/image";
import styles from "./TopicPage.module.css";
import { Alert } from "react-bootstrap";
import { Metadata } from "next";
import { title } from "process";

interface PageProps {
  params: {
    topic: string;
  };
  // searchParams: { [key: string]: string | string[] | undefined s};
}

/**
 * This tells Nextjs to only allow access to this page with
 * the three topics defined in 'generateStaticParams'
 */
export const dynamicParams = false;

/**
 * This allows our page to pre-fetch data for
 * those three topics during build time
 */
export function generateStaticParams() {
  return ["heatlh", "fitness", "coding"].map((topic) => ({ topic }));
}

export function generateMetadata({ params: { topic } }: PageProps): Metadata {
  return {
    title: topic + " - NextJS Image Gallery"
  }
}

export default async function Page({ params: { topic } }: PageProps) {
  const resp = await fetch(
    `https://api.unsplash.com/photos/random?query=${topic}&count=30&client_id=${process.env.UNSPLASH_ACCESS_KEY}`
  );
  const images: UnsplashImage[] = await resp.json();

  return (
    <div>
      <Alert>
        This page uses <strong>generateStaticParams</strong>. to fetch and cache
        images from unsplash based on the topic parameter provided in the url.
      </Alert>
      <h1>{topic}</h1>
      {images.map((image) => (
        <Image
          src={image.urls.raw}
          width={250}
          height={250}
          alt={image.description}
          key={image.urls.raw}
          className={styles.image}
        />
      ))}
    </div>
  );
}
