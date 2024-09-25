import Units from './units/page';

export default async function Homepage() {
  let data = await fetch('https://api.vercel.app/blog')
  let posts = await data.json()
  return (
    <div>
      <div className="">
        {/* <h2>{posts[0]?.title}</h2> */}
      </div>
      <Units />
    </div>
  )
}