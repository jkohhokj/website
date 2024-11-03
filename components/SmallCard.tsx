import Link from './Link'

interface SmallCardProps {
  key: string,
  title: string; 
  description: string;
  href: string;
}

const SmallCard = ({title, description, href}: SmallCardProps) => (
  <div className="md max-w-[544px] p-4 md:w-1/2 cursor-pointer group">
    <div
      className='overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700'
      >
      <div className="p-6">
        <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight group-hover:animate-glitch">
        {href ? (
          <Link className="group-hover" href={href} aria-label={`Link to ${title}`}>
            {title}
          </Link>
        ) : (
              title
          )}
        </h2>
        <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400 whitespace-pre-wrap">
          {href ? (
            <Link className="group-hover" href={href} aria-label={`Link to ${title}`}>
              {description}
            </Link>
          ) : (
                description
            )}
        </p>
      </div>
    </div>
  </div>
)



export default SmallCard
