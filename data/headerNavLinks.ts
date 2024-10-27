interface NavLink {
  href: string;
  title: string;
}

const headerNavLinks: NavLink[] = [
  { href: '/', title: 'Home' },
  { href: '/blog', title: 'Blog' },
  { href: '/projects', title: 'Projects' },

]

export default headerNavLinks
