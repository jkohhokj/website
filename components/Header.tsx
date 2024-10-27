import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Image from 'next/image'

import Link from './Link'

const Header = () => {
  return (
    <header className="flex w-3/5 justify-between py-10 mx-auto">
      <div>
        <Link href="/" aria-label={siteMetadata.title}>
          <div className="flex items-center justify-between">
            <div className="mr-3">
                <Image
                alt={siteMetadata.title}
                src={siteMetadata.logo}
                className="dark:invert object-cover object-center"
                width={150}
                height={20}
                />
            </div>
          </div>
        </Link>
      </div>
      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
        {headerNavLinks
          .filter((link) => link.href !== '/')
          .map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="hidden font-medium text-gray-900 dark:text-gray-100 sm:block"
            >
              {link.title}
            </Link>
          ))}
      </div>
    </header>
  )
}

export default Header
