/* eslint-disable @next/next/no-img-element */
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Marquee } from "@/components/ui/marquee"
import { reviews } from "../data/reviews.js"


const firstRow = reviews.slice(0, reviews.length / 2)
const secondRow = reviews.slice(reviews.length / 2)

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure
      className={cn(
        "relative h-full w-72 cursor-pointer overflow-hidden rounded-2xl border p-5 transition-all duration-300",
        "border-white/10 bg-white/3 hover:bg-white/8 hover:border-white/20",
        "backdrop-blur-xl group"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div className="relative h-10 w-10 shrink-0">
          <Image
            className="rounded-full border border-white/20 object-cover"
            alt={name}
            src={img}
            fill
            sizes="40px"
          />
          <div className="absolute inset-0 rounded-full bg-linear-to-tr from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
        </div>
        <div className="flex flex-col">
          <figcaption className="text-sm font-semibold text-white/90">
            {name}
          </figcaption>
          <p className="text-[12px] font-medium text-white/40 tracking-tight">{username}</p>
        </div>
      </div>
      <blockquote className="mt-4 text-white/70 leading-relaxed italic text-xs">
        &ldquo;{body}&rdquo;
      </blockquote>

      {/* Decorative gradient corners */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/5 blur-2xl -z-10 group-hover:bg-blue-500/10 transition-colors" />
      <div className="absolute bottom-0 left-0 w-20 h-20 bg-purple-500/5 blur-2xl -z-10 group-hover:bg-purple-500/10 transition-colors" />
    </figure>
  )
}

export function Testimonials() {
  return (
    <section className="relative w-full flex items-center justify-center flex-col py-20 overflow-hidden" id="testimonials">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full -z-10" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full -z-10" />

      <div className="container mx-auto px-4 mb-10 text-center relative z-10">
        <h2 className="text-2xl md:text-4xl font-black mb-4 tracking-tighter">
          <span className="text-white drop-shadow-2xl">Don&apos;t Take Our Word.</span>
          <br />
          <span className="bg-linear-to-r from-gray-100 via-gray-300 to-gray-500 bg-clip-text text-transparent italic">
            Take Their&apos;s.
          </span>
        </h2>
        <div className="h-0.5 w-14 bg-linear-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-6 shadow-[0_0_20px_rgba(59,130,246,0.3)]" />
        <p className="text-white/50 text-sm md:text-base max-w-lg mx-auto font-medium">
          Hear from the founders and creators who have redefined their digital standard with BRX Labz.
        </p>
      </div>

      <div className="relative flex w-full md:w-3/4 flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:40s] [--gap:2rem] py-4">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:45s] [--gap:2rem] py-4">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>

      </div>

      {/* Subtle bottom line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
    </section>
  )
}
