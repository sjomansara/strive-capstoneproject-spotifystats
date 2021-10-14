export const getSavedTracks = async (token) => {
    let fetchString = "https://api.spotify.com/v1/me/tracks?limit=50"

    try {
      const response = await fetch(fetchString, {
        headers: {
          "Authorization": "Bearer " + token
        }
      })
      if (response.ok) {
        const decoded = await response.json()
        // console.log("saved tracks are: ", decoded)
        return decoded
      }
    } catch (error) {
      console.error(error)
    }
}