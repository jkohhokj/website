interface NavLink {
  href: string;
  title: string;
}

const headerNavLinks: NavLink[] = [
  { href: '/', title: 'Home' },
  { href: 'https://blog.jkoh.dev', title: 'Blog' },
  { href: '/projects', title: 'Projects' },

]

export default headerNavLinks
