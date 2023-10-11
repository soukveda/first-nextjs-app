import { Alert } from "react-bootstrap";

export default function Home() {
  return (
    <div>
      <Alert>
        <p>
          This is my very first tutorial built{" "}
          <strong>NextJS Application</strong>. I have built this application via{" "}
          <strong>
            The Most Efficient Next.JS 13.4 Beginner Tutorial (TypeScript, App
            Router)
          </strong>
          . I am very impressed by how cool NextJS is.
        </p>
        <p>Topics covered in this app:</p>
        <ul>
          <li>Static and dynamic server-side rendering</li>
          <li>Incremental static regeneration</li>
          <li>Client-side rendering</li>
          <li>Route handlers (AKA API endpoints)</li>
          <li>Meta-data API</li>
          <li>and more</li>
        </ul>
        <p className="mb-0">
          Every page uses a different approach to <strong>
            fetch and caching
          </strong>.
        </p>
      </Alert>
      <Alert variant="secondary">
        <p>Note: In order to load the data on this site, you will need to have a 
          Unsplash account.
        </p>
        <p className="mb-0">Unsplash offers the first 50 request for hour for free.</p>
      </Alert>
    </div>
  );
}
