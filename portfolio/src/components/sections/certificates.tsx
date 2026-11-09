import { BadgeCheckIcon, ClockIcon, ExternalLinkIcon, ZoomInIcon } from "lucide-react"

import { Reveal, Section } from "@/components/section"
import { SmartImage } from "@/components/smart-image"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { certificates } from "@/data/certificates"
import type { Certificate } from "@/data/types"
import { formatMonthYear } from "@/lib/dom"

function VerifyButton({ cert, size = "sm" }: { cert: Certificate; size?: "sm" | "default" }) {
  if (!cert.url) return null
  return (
    <Button variant="outline" size={size} asChild>
      <a href={cert.url} target="_blank" rel="noopener noreferrer">
        <BadgeCheckIcon />
        Verify
        <ExternalLinkIcon className="opacity-60" />
      </a>
    </Button>
  )
}

function CertificateCard({ cert }: { cert: Certificate }) {
  const meta = `${cert.issuer} · ${formatMonthYear(cert.date)}`

  return (
    <Card className="group/cert h-full gap-0 bg-card/75 py-0 backdrop-blur-sm transition-shadow hover:shadow-lg hover:shadow-primary/10">
      <Dialog>
        <DialogTrigger asChild>
          <button
            type="button"
            className="relative block w-full overflow-hidden border-b bg-muted/40 outline-none focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:ring-inset"
            aria-label={`Preview certificate: ${cert.title}`}
          >
            <AspectRatio ratio={16 / 11}>
              <SmartImage
                src={cert.image}
                alt=""
                loading="lazy"
                className="size-full object-contain p-4 transition-transform duration-500 group-hover/cert:scale-[1.03] motion-reduce:transition-none"
              />
            </AspectRatio>
            <span className="absolute top-3 right-3 grid size-8 place-items-center rounded-full bg-background/85 text-foreground opacity-0 shadow-sm backdrop-blur transition-opacity group-hover/cert:opacity-100">
              <ZoomInIcon className="size-4" aria-hidden="true" />
            </span>
          </button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-4xl">
          <DialogHeader className="pr-8">
            <DialogTitle className="text-lg font-semibold">{cert.title}</DialogTitle>
            <DialogDescription>{meta}</DialogDescription>
          </DialogHeader>
          <div className="overflow-hidden rounded-lg border bg-white">
            <img src={cert.image} alt={`Certificate: ${cert.title}`} className="max-h-[65vh] w-full object-contain" />
          </div>
          <DialogFooter className="items-center sm:justify-between">
            {cert.credentialId && (
              <p className="text-xs break-all text-muted-foreground">Credential ID: {cert.credentialId}</p>
            )}
            <VerifyButton cert={cert} size="default" />
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <CardHeader className="pt-5">
        <CardTitle className="leading-snug font-semibold">{cert.title}</CardTitle>
        <CardDescription>{meta}</CardDescription>
      </CardHeader>
      {cert.hours && (
        <CardContent className="pt-3">
          <Badge variant="secondary" className="gap-1 font-normal">
            <ClockIcon aria-hidden="true" />
            {cert.hours} hours
          </Badge>
        </CardContent>
      )}
      <CardFooter className="mt-auto items-center justify-between gap-3 pt-4 pb-5">
        {cert.credentialId ? (
          <span className="min-w-0 truncate text-xs text-muted-foreground" title={cert.credentialId}>
            ID {cert.credentialId}
          </span>
        ) : (
          <span />
        )}
        <VerifyButton cert={cert} />
      </CardFooter>
    </Card>
  )
}

export function Certificates() {
  return (
    <Section
      id="certificates"
      index="05"
      eyebrow="Certificates"
      title="Courses & certificates"
      description="Structured learning outside of university – from web fundamentals to DevOps."
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certificates.map((cert, index) => (
          <Reveal key={cert.credentialId ?? cert.title} delay={(index % 3) * 0.06} className="h-full">
            <CertificateCard cert={cert} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
