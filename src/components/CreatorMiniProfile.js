import React from 'react'

function CreatorMiniProfile() {
  return (
    <div className=" d-flex h-[330px] px-[15px] py-[10px] flex-col justify-between items-end flex bg-gradient-to-t from-black to-white rounded-2xl shadow w-[200px]">
    <div className="self-stretch h-6 justify-between items-center gap-2.5 inline-flex">
    <div className="p-1 bg-stone-500 bg-opacity-50 rounded-[10px] backdrop-blur-[10px] justify-start items-center gap-1 flex">
    <div className="w-3 h-3 relative" />
    <div className="opacity-70 text-white text-[10px] font-bold">4.3</div>
    </div>
    <div className="p-1.5 bg-stone-500 bg-opacity-50 rounded-[10px] backdrop-blur-[10px] justify-start items-center gap-1 flex">
    <div className="opacity-70 text-white text-xs font-bold">$459</div>
    </div>
    </div>
    <div className="self-stretch h-[43px] flex-col justify-center items-start gap-0.5 flex">
    <div className="self-stretch justify-start items-center gap-0.5 inline-flex">
    <div className="text-white text-sm font-bold capitalize">Marco D Amore</div>
    <div className="w-3.5 h-3.5 relative" />
    </div>
    <div className="self-stretch text-slate-200 text-[10px] font-medium">Co-Founder of Casper asfgla founding to $500M Investor in</div>
    </div>
    </div>
  )
}

export default CreatorMiniProfile