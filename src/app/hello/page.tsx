export default async function HelloPage() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  
  // throw Error();
  return <div>Hello, all!</div>;
}
