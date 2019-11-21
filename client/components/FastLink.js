import React from 'react'

const FastLink = () => {
  const handleFastLinkClick = e => {
    console.log(e.target)
    //Open FastLink
    window.fastlink.open({
      fastLinkURL: '<fastlink-launch-url>',
      jwtToken: 'Bearer <your-jwt-token>',
      params: '<optParams>',
      onSuccess: function(data) {
        console.log(data)
      },
      onError: function(data) {
        console.log(data)
      },
      onExit: function(data) {
        console.log(data)
      },
      onEvent: function(data) {
        console.log(data)
      }
    })
  }
  return (
    <div>
      <input
        type="submit"
        value="Link an Account"
        onClick={handleFastLinkClick}
      />
    </div>
  )
}

export default FastLink
