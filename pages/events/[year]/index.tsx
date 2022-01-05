import { useRouter } from 'next/router'

import Link from 'next/link'

const Post = () => {
  const router = useRouter()
  const { year } = router.query

  return <div>
    <Link href="/">
        <a>Home</a>
    </Link>
    <Link href={`/events/${year}/location`}>
        <a>Location</a>
    </Link>
    <Link href={`/events/${year}/speakers`}>
        <a>Speakers</a>
    </Link>
    <Link href={`/events/${year}/schedule`}>
        <a>Schedule</a>
    </Link>
    <Link href={`/events/${year}/partnership`}>
        <a>Partnership</a>
    </Link>
  <p>Some information about the event Year {year}</p>
  </div>
}


export default Post