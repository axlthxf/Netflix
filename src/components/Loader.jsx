import React from 'react'

function Loader() {
  return (
    <div class="flex items-center justify-center h-screen bg-black">
    <div class="relative">
        <div class="h-24 w-24 rounded-full  border-t-8 border-b-8 border-red-300"></div>
        <div class="absolute top-0 left-0 h-24 w-24  rounded-full border-t-8 border-b-8 border-red-600 animate-spin">
        </div>
    </div>
</div>
  )
}

export default Loader