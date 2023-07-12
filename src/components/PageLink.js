import { pageLinks } from '../data'

const PageLink = ({ parentLink, childLink }) => {
  return (
    <ul className={parentLink} id={parentLink}>
      {pageLinks.map((link) => {
        return (
          <li key={link.id}>
            <a href={link.href} className={childLink}>
              {link.text}
            </a>
          </li>
        )
      })}
    </ul>
  )
}
export default PageLink
