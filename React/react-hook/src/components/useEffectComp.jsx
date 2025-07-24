import React, { useEffect } from 'react'

const useEffectComp = () => {
    useEffect(()=>{
        document.title="hello bro"
    },[])
  return (
    <div>
      
    </div>
  )
}

export default useEffectComp
