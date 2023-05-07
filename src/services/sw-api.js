const baseUrl = 'https://swapi.dev/api/starships'

export const getAllStarships = async () => {
  let starships = []
  let page = 1
  let lastResult = []

  do {
    try {
      const res = await fetch(`${baseUrl}/?page=${page}`)
      const data = await res.json()
      lastResult = data
      starships = [...starships, ...data.results]

      page++
    } catch (error) {
      console.log(error)
    }
  } while (lastResult.next)
  return starships
}

export const getStarship = async (starshipId) => {
  const res = await fetch(`${baseUrl}/${starshipId}`)
  const starship = await res.json()
  const pilots = starship.pilots.length ? await getPilots(starship.pilots): []
  return {starship, pilots}
}

export const getPilots = async (urls) => {
  const promises = urls.map(url => fetch(url).then(res => res.json()))
  const pilotObjects = await Promise.all(promises)
  return pilotObjects
}

