import { profile } from '@/data/portfolio'

export default function Footer() {
  return (
    <footer className="border-t border-border py-8 text-center font-mono text-xs text-muted-foreground">
      © {new Date().getFullYear()} {profile.name} · {profile.location}
    </footer>
  )
}
