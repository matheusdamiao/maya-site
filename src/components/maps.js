import React from "react"

const Maps = () => {
  return (
    <div className="w-full px-6 py-10 lg:py-0 max-w-[500px] flex items-center justify-center">
      <iframe
        className="w-[300px] h-[250px] lg:w-[400px] lg:h-[350px]"
        src="https://maps.google.com/maps?q=Rua%20Dr.%20Carlos%20Maximiano,%20169,%20Fonseca,%20Niter%C3%B3i-RJ&t=&z=17&ie=UTF8&iwloc=&output=embed"
      ></iframe>
    </div>
  )
}

export default Maps
