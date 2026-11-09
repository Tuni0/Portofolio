import { useRef } from "react"
import { ArrowUpRightIcon, CheckIcon, CopyIcon, DownloadIcon, MailIcon, SendIcon } from "lucide-react"
import { m, useInView, useReducedMotion } from "motion/react"

import { Reveal, Section } from "@/components/section"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { profile, socialLinks } from "@/data/profile"
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard"

/**
 * Looping avatar video (e.g. generated in Higgsfield). The <video> is only created once the
 * section is near the viewport, so the file isn't downloaded for visitors who never scroll here.
 */
function AvatarVideo({ video }: { video: NonNullable<typeof profile.avatarVideo> }) {
  const ref = useRef<HTMLDivElement>(null)
  const nearViewport = useInView(ref, { once: true, margin: "300px" })
  const poster = video.poster ?? profile.avatar.src

  return (
    <div
      ref={ref}
      className="relative mb-8 aspect-square w-full max-w-[320px] overflow-hidden rounded-2xl border bg-muted shadow-xl shadow-primary/10"
    >
      {nearViewport ? (
        <video
          className="size-full object-cover"
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          aria-label={profile.avatar.alt}
        >
          {video.webm && <source src={video.webm} type="video/webm" />}
          {video.mp4 && <source src={video.mp4} type="video/mp4" />}
        </video>
      ) : (
        <img src={poster} alt={profile.avatar.alt} loading="lazy" className="size-full object-cover" />
      )}
    </div>
  )
}

/** The 3D avatar – a looping video if one is configured in data/profile.ts, otherwise a gently floating image. */
function Avatar3D() {
  const reduceMotion = useReducedMotion()

  if (profile.avatarVideo && !reduceMotion) {
    return <AvatarVideo video={profile.avatarVideo} />
  }

  return (
    <m.img
      src={profile.avatar.src}
      alt={profile.avatar.alt}
      loading="lazy"
      width={800}
      height={800}
      className="relative w-full max-w-[340px] object-contain drop-shadow-2xl"
      animate={reduceMotion ? undefined : { y: [0, -10, 0], rotate: [0, -1.5, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    />
  )
}

export function Contact() {
  const { copied, copy } = useCopyToClipboard()

  return (
    <Section
      id="contact"
      index="06"
      eyebrow="Contact"
      title="Let's build something together"
      description="Have a question, a project idea or an opportunity? My inbox is always open."
    >
      <Reveal>
        <Card className="overflow-hidden bg-card/75 py-0 backdrop-blur-sm">
          <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)]">
            <div className="flex flex-col gap-6 p-6 sm:p-8 lg:p-10">
              <ItemGroup className="gap-3">
                <Item variant="outline" className="bg-background/60">
                  <ItemMedia className="grid size-10 place-items-center rounded-lg bg-primary/10 text-brand">
                    <MailIcon className="size-5" aria-hidden="true" />
                  </ItemMedia>
                  <ItemContent className="min-w-0">
                    <ItemTitle>Email</ItemTitle>
                    <ItemDescription className="truncate">{profile.email}</ItemDescription>
                  </ItemContent>
                  <ItemActions>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon-sm"
                          onClick={() => void copy(profile.email, "Email copied")}
                          aria-label="Copy email address"
                        >
                          {copied ? <CheckIcon className="text-emerald-500" /> : <CopyIcon />}
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>{copied ? "Copied!" : "Copy"}</TooltipContent>
                    </Tooltip>
                  </ItemActions>
                </Item>

                {socialLinks.map(({ id, label, handle, url, icon: Icon }) => (
                  <Item key={id} variant="outline" className="bg-background/60" asChild>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                      <ItemMedia className="grid size-10 place-items-center rounded-lg bg-muted">
                        <Icon className="size-5" aria-hidden="true" />
                      </ItemMedia>
                      <ItemContent className="min-w-0">
                        <ItemTitle>{label}</ItemTitle>
                        <ItemDescription className="truncate">{id === "github" ? `@${handle}` : handle}</ItemDescription>
                      </ItemContent>
                      <ItemActions>
                        <ArrowUpRightIcon className="size-4 text-muted-foreground" aria-hidden="true" />
                      </ItemActions>
                    </a>
                  </Item>
                ))}
              </ItemGroup>

              <div className="flex flex-wrap gap-3">
                <Button size="lg" className="px-4 shadow-lg shadow-primary/25" asChild>
                  <a href={`mailto:${profile.email}`}>
                    <SendIcon />
                    Send me an email
                  </a>
                </Button>
                {profile.cvUrl && (
                  <Button size="lg" variant="outline" className="px-4" asChild>
                    <a href={profile.cvUrl} download>
                      <DownloadIcon />
                      Download CV
                    </a>
                  </Button>
                )}
              </div>
            </div>

            <div className="relative flex items-end justify-center overflow-hidden border-t bg-linear-to-br from-violet-500/15 via-transparent to-indigo-500/15 px-6 pt-8 md:border-t-0 md:border-l">
              <div
                aria-hidden="true"
                className="absolute top-1/2 left-1/2 size-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/25 blur-3xl"
              />
              <Avatar3D />
            </div>
          </div>
        </Card>
      </Reveal>
    </Section>
  )
}
