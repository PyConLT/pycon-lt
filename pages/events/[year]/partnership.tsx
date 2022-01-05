import { useRouter } from 'next/router'

const Post = () => {
  const router = useRouter()
  const { year } = router.query

  return <p>Partnership opportunities year {year}</p>
}

export default Post