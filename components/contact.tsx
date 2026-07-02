import React from "react";

export default function Contact() {
  return (
    <div>
      <h5 className="font-mono font-medium">Contact</h5>
      <div className="mt-4">
        <p className="text-sm text-muted-foreground text-pretty">
          I&apos;m always open to discussing new projects, creative ideas or
          opportunities to be part of your visions. Feel free to reach out to me
          via email or connect with me on LinkedIn.
        </p>
        <div className="flex flex-col sm:flex-row gap-2 mt-4">
          <a
            href="mailto:bolgarfelipe@gmail.com"
            className="text-xs text-pretty underline underline-offset-4"
          >
            bolgarfelipe@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/felipebolgar/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-pretty underline underline-offset-4 "
          >
            LinkedIn Profile
          </a>
        </div>
      </div>
    </div>
  );
}
