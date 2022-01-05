import { useRouter } from 'next/router'

const Post = () => {
  const router = useRouter()
  const { year } = router.query

  return <p>Schedule year {year}</p>
}

export default Post