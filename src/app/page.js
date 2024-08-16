import Image from "next/image";
import Blob from "./components/Blob";
import Main from "./pages/Main";

export default function Home() {
  return (
    <>
      <div className='absolute w-full'>
        <Blob />
      </div>
      <Main/>
    </>
  );
}
