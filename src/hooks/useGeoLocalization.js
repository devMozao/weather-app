function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(
      (position) => {
        console.log('success')
      },
      (error) => {
        if (error.code === error.PERMISSION_DENIED) console.log('Access Denied')
      }
    )
    navigator.geolocation.getCurrentPosition(showPosition)
  } else {
    console.log('erro ao pegar latlong')
  }
}

function showPosition(position) {
  console.log('lat', position.coords.latitude)
  console.log('long', position.coords.longitude)
}
getLocation()
