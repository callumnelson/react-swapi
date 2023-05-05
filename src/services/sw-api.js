const baseUrl = 'https://swapi.dev/api/starships/?page='

export const getAllStarships = async () => {
  let starships = []
  let page = 1
  let lastResult = []

  do {
    try {
      const res = await fetch(`${baseUrl}${page}`)
      console.log(res)
      const data = await res.json()
      lastResult = data
      starships = [...starships, ...data.results]

      page++
    } catch (error) {
      console.log(error)
    }
  } while (lastResult.next)
  console.log(starships)
  return starships
}

