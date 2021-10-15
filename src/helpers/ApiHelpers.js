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

export const checkedIfSavedTracks = async (token, ids) => {
    let fetchString = "https://api.spotify.com/v1/me/tracks/contains?ids=" + ids

    try {
        const response = await fetch(fetchString, {
          headers: {
            "Authorization": "Bearer " + token
          }
        })
        if (response.ok) {
          const decoded = await response.json()
          // console.log("decoded favorite is: ", decoded, typeof(decoded))
          return decoded
        }
      } catch (error) {
        console.error(error)
    }
}

export const addSavedTrack = async (token, ids) => {
    let fetchString = "https://api.spotify.com/v1/me/tracks?ids=" + ids

    try {
        const response = await fetch(fetchString, {
            method: 'PUT',
            headers: {
                "Authorization": "Bearer " + token
            }
        })
        if (response.ok) {
            console.log(response)
            return response

            // const decoded = await response.json()
            // console.log("decoded saved is: ", decoded, typeof(decoded))
            // return decoded
        }
      } catch (error) {
        console.error(error)
    }
}

export const deleteSavedTrack = async (token, ids) => {
    let fetchString = "https://api.spotify.com/v1/me/tracks?ids=" + ids

    try {
        const response = await fetch(fetchString, {
            method: 'DELETE',
            headers: {
                "Authorization": "Bearer " + token
            }
        })
        if (response.ok) {
            console.log(response)
            return response

            // const decoded = await response.json()
            // console.log("decoded saved is: ", decoded, typeof(decoded))
            // return decoded
        }
      } catch (error) {
        console.error(error)
    }
}