"use client";

import Image from "next/image";
import { Skeleton } from "./ui/skeleton";
import { useQuery } from "@tanstack/react-query";

interface WeatherResponse {
  location: {
    name: string;
    country: string;
  };
  current: {
    temp_c: number;
    condition: {
      text: string;
      icon: string;
    };
  };
}

export default function Weather() {
  const WEATHER_API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
  const url = `https://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=Buenos Aires&aqi=no`;

  const { data, isPending, error } = useQuery<WeatherResponse>({
    queryKey: ["weather"],
    queryFn: () => fetch(url).then((res) => res.json()),
  });

  if (isPending)
    return (
      <div className="flex flex-col items-end">
        <Skeleton className="h-4 w-12" />
        <Skeleton className="h-4 w-32 mt-1" />
      </div>
    );
  if (error)
    return (
      <div>{error instanceof Error ? error.message : "An error occurred"}</div>
    );

  return (
    <div className="mb-1">
      <div className="flex flex-col items-end">
        <div className="flex items-center">
          <p className="text-sm dark:text-stone-300 text-stone-700">
            {data?.current.temp_c}°C
          </p>

          {data && (
            <Image
              src={`https:${data.current.condition.icon}`}
              alt={data.current.condition.text}
              width={32}
              height={32}
            />
          )}
        </div>

        <h1>
          {data?.location.name}, {data?.location.country}
        </h1>
      </div>
    </div>
  );
}
