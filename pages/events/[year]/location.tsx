import { useRouter } from 'next/router'

const Post = () => {
  const router = useRouter()
  const { year } = router.query

  return <p>Location of event {year}</p>
}

export default Post