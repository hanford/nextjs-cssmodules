import Head from './head'
import Link from 'next/link'
import style from './style.css'

const links = [
  { href: 'https://github.com/segmentio/create-next-app', label: 'Github' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link prefetch href="/">
          <a className={style.anchor}>Home</a>
        </Link>
      </li>
      <ul>
        {links.map(
          ({ key, href, label }) => (
            <li key={key}>
              <Link href={href}>
                <a className={style.anchor}>{label}</a>
              </Link>
            </li>
          )
        )}
      </ul>
    </ul>
  </nav>
)

export default Nav
