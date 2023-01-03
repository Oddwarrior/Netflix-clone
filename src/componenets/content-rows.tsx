import React, { useEffect, useState } from "react";
import { fetchRequest, MovieResponse, MovieResult } from "../common/api";
import { ENDPOINT } from "../common/endpoints";

type RowProp = {
  endpoint: string;
  title: string;
};

//row component
export default function ContentRow({ title, endpoint }: RowProp) {
  const [rowData, setRowData] = useState<MovieResult[]>([]);
  //fetch row
  async function fetchROwData() {
    const response = await fetchRequest<MovieResponse<MovieResult[]>>(endpoint);
    setRowData(response.results);
    console.log(response);
  }

  function createImageUrl(path: String) {
    return `${import.meta.env.VITE_BASE_IMAGE_URI}/${path}`;
  }

  //call only once
  useEffect(() => {
    fetchROwData();
  }, []);

  return (
    <section>
      <h2 className="mb-2">{title}</h2>
      <section className=" flex flex-nowrap  gap-2 overflow-x-auto">
        {rowData?.map((row) => {
          const { id, title, poster_path } = row;
          return (
            <section key={id} className="h-[200px] w-[200px] flex-none">
              <img
                className=" h-full w-full object-contain"
                src={createImageUrl(poster_path)}
                alt="title"
              />
            </section>
          );
        })}
      </section>
    </section>
  );
}
