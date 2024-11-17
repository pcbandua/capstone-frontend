import React from "react"

export function Footer() {
  return (

    <footer className="border bg-gray-100 rounded-xl mx-auto shadow-lg overflow-hidden">
  <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="flex justify-center text-teal-600">
      <img
        src="/src/assets/Logo@3x.png"
        alt="Earn While You Learn Logo"
      />
    </div>

    <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-800">
    Build Skills, Find Purpose, Get Paid.
    </p>

    <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
      {["How It Works", "Apprenticeships", "Get Your Holland Code Results", "Login", "Sign Up"].map((item) => (
        <li key={item}>
          <a className="text-gray-700 transition hover:text-lime-400" href="#">
            {item}
          </a>
        </li>
      ))}
    </ul>

    <ul className=" mt-12 flex justify-center gap-6 md:gap-8">
      {[
        { name: "Linkedin", href: "https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Linkedin2_svg-256.png" },
        { name: "Instagram", href: "https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Instagram_svg-256.png" },
        { name: "Youtube", href: "https://www.iconfinder.com/icons/5282548/play_player_video_youtube_youtuble_logo_icon" },
      ].map((social) => (
        <li key={social.name}>
          <a
            href={social.href}
            rel="noreferrer"
            target="_blank"
            className="text-gray-700 transition hover:text-gray-700/75"
          >
            <span className="sr-only">{social.name}</span>
            <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              {/* SVG path for each icon here */}
            </svg>
          </a>
        </li>
      ))}
    </ul>
  </div>
</footer>
  )
}
