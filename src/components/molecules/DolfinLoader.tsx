import dolfin_gaze from "@/assets/dolfin_gaze.svg";

export default function DolfinLoader() {
  return(
    <div className="text-center">
      <div className="relative mx-auto w-24">
        <div className="flex flex-col items-center select-none drop-shadow">
          <span className="mb-12 px-3 py-1 text-xs font-medium rounded-full bg-white/70 backdrop-blur shadow">
                로딩중…
            </span>

            <img className="animate-spin mb-12 w-24 h-24 object-contain
                       animate-[float_3s_ease-in-out_infinite]"
            src={dolfin_gaze}/>

        </div>
      </div>
    </div>
  )
}
