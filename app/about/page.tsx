import TitleComponent from "@/components/title";
import { Metadata } from "next";

const title = "About";
const description =
  "I’m a web developer passionate about building things on the web. My interest in programming started at a very young age, inspired by exploring my uncle’s Linux computer and experimenting with technology long before I understood how it worked.";

export const metadata: Metadata = {
  title: `${title} - Felipe Bolgar`,
  description,
};

export default function AboutPage() {
  return (
    <div>
      <TitleComponent title="About" />
      <h1 className="text-xl font-semibold">
        I’m a web developer passionate about building things on the web.
      </h1>

      <p className="mt-4">
        My interest in programming started at a very young age. My uncle is a
        programmer, and when I visited him as a kid, I used to explore his
        computer, which ran Linux. At the time, I didn’t understand anything
        about Linux, but I loved it—I clicked everything, experimented without
        fear, and tried to figure things out on my own. I even managed to
        download and run Minecraft on that computer without knowing how Linux
        really worked.
      </p>

      <p className="mt-2">
        That early experience sparked my curiosity and played a big role in
        shaping my future. Years later, it became clear that this fascination
        with computers and problem-solving was what I wanted to pursue
        professionally. I started coding seriously when I was 17 years old, and
        since then I’ve been deeply passionate about web development.
      </p>

      <p className="mt-2">
        I enjoy turning ideas into functional and elegant digital experiences,
        writing clean and maintainable code, and building scalable, user-focused
        applications. Web development is not just my profession—it’s something I
        genuinely enjoy and continue to explore every day.
      </p>
      <p className="mt-2">
        I’m deeply excited about what lies ahead. I believe the web is one of
        the most powerful tools ever created, and I’m driven by the idea of
        building things that matter—products that inspire, solve real problems,
        and leave a lasting impact. I know that one day I will build great
        things on the internet, and I’m committed to learning, creating, and
        pushing boundaries until I get there.
      </p>

      <p className="mt-4 font-semibold">
        Thank you for reading, <br />
        Felipe Bolgar.
      </p>
    </div>
  );
}
