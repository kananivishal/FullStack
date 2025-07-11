import React from 'react'

function Child(props) {
    console.log("child rendering")
  return (
    <>
      <div>
        Hello:{props.username}
      </div>
    </>
  )
}

export default React.memo(Child)
