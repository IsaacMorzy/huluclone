import Image from "next/image";
import { ThumbUpIcon, ThumbDownIcon } from "@heroicons/react/outline";

function Thumbnail({ result }) {
  console.log(result);
  const BASE_URL = "https://image.tmdb.org/t/p/original/";

  return (
    <div className="p-2 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50 ">
      <Image
        layout="responsive" 
        src={
          `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
          `${BASE_URL}${result.poster_path}`
        }
        height={1080}
        width={1920}
      />
      <div className="p-2">
        <p className="truncate max-w-md">{result.overview}</p>
        <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
          {result.title || result.original_name}
          <p className="flex items-center opacity-0 group-hover:opacity-100">
            {result.media_type && `${result.media_type} .`}
            {""}
            {result.release_date || result.first_air_date} .{""}
            <ThumbUpIcon className="h-5 w-5 text-green-500" />{" "}
            {result.vote_count}
          </p>
        </h2>
      </div>
    </div>
  );
}

export default Thumbnail;
