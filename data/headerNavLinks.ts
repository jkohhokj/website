import { authorData } from "./authorData";

interface NavLink {
  href: string;
  title: string;
}

const headerNavLinks: NavLink[] = [
  { href: '/', title: 'Home' },
  { href: '/contact', title: 'Contact' },
  { href: authorData.resume, title: 'Resume' },
  { href: 'https://blog.jkoh.dev', title: 'Blog' },

]

export default headerNavLinks
