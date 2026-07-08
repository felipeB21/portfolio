import {
  Sun,
  Moon,
  Cloud,
  CloudSun,
  CloudMoon,
  CloudRain,
  CloudSnow,
  CloudLightning,
  CloudFog,
  type LucideIcon,
} from "lucide-react";

const WEATHER_API = `https://www.meteosource.com/api/v1/free/point?place_id=buenos-aires&sections=current&timezone=UTC&language=en&units=metric&key=${process.env.PUBLIC_NEXT_WEATHER_KEY}`;

interface CurrentWeather {
  icon: string;
  summary: string;
  temperature: number;
}

const ICON_MAP: Record<string, LucideIcon> = {
  rain: CloudRain,
  shower: CloudRain,
  snow: CloudSnow,
  storm: CloudLightning,
  thunder: CloudLightning,
  fog: CloudFog,
  mist: CloudFog,
  clear_day: Sun,
  clear_night: Moon,
  cloud_day: CloudSun,
  cloud_night: CloudMoon,
};

function resolveIconKey(icon: string): string {
  const isNight = icon.includes("night");
  if (icon.includes("rain") || icon.includes("shower")) return "rain";
  if (icon.includes("snow")) return "snow";
  if (icon.includes("storm") || icon.includes("thunder")) return "storm";
  if (icon.includes("fog") || icon.includes("mist")) return "fog";
  if (icon.includes("clear") || icon.includes("sunny"))
    return isNight ? "clear_night" : "clear_day";
  if (icon.includes("cloud") || icon.includes("overcast"))
    return isNight ? "cloud_night" : "cloud_day";
  return "default";
}

function WeatherIcon({ icon }: { icon: string }) {
  const Icon = ICON_MAP[resolveIconKey(icon)] ?? Cloud;
  return <Icon className="size-4" strokeWidth={1.5} />;
}

async function getCurrentWeather(): Promise<CurrentWeather | null> {
  try {
    const res = await fetch(WEATHER_API, { next: { revalidate: 1800 } });
    if (!res.ok) return null;

    const data = await res.json();
    return data.current as CurrentWeather;
  } catch {
    return null;
  }
}

export default async function Weather() {
  const current = await getCurrentWeather();
  if (!current) return null;

  return (
    <div className="flex items-center gap-1.5">
      <WeatherIcon icon={current.icon} />
      <p>{Math.round(current.temperature)}°C</p>
      <p className="font-medium">Buenos Aires, Argentina</p>
    </div>
  );
}
