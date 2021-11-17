import Profill from "../LandingPage/Description"
import Description from "../LandingPage/Profill"
export default function StoreFront() {
  return (
    <div>
      <div className="">

        {/* slider div */}
        <div className="mt-[60px] mx-10 flex space-x-2 ">
          <Description />
          <Profill />
        </div>

      </div>
    </div>
  )
}
