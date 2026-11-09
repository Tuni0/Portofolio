import { Reveal, Section } from "@/components/section"
import { Item, ItemContent, ItemDescription, ItemGroup, ItemMedia, ItemTitle } from "@/components/ui/item"
import { profile } from "@/data/profile"

export function About() {
  return (
    <Section
      id="about"
      index="01"
      eyebrow="About"
      title="Building data-driven products end to end"
      description="Analyst by day, full-stack developer by craft – I like owning the whole path from raw data to a polished interface."
    >
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-14">
        <Reveal className="space-y-5 leading-relaxed text-pretty text-muted-foreground lg:col-span-3">
          {profile.about.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-2">
          <ItemGroup className="gap-3">
            {profile.focus.map(({ title, description, icon: Icon }) => (
              <Item key={title} variant="outline" className="items-start bg-card/60 backdrop-blur-sm">
                <ItemMedia className="grid size-10 place-items-center rounded-lg bg-primary/10 text-brand">
                  <Icon className="size-5" aria-hidden="true" />
                </ItemMedia>
                <ItemContent>
                  <ItemTitle className="text-base">{title}</ItemTitle>
                  <ItemDescription className="line-clamp-none">{description}</ItemDescription>
                </ItemContent>
              </Item>
            ))}
          </ItemGroup>
        </Reveal>
      </div>
    </Section>
  )
}
