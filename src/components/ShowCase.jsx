import Img8 from "../images/img8.jpg";
import { ButtonReturn } from "./ButtonReturn";

export const ShowCase = () => {
  return (
    <section className="w-[1218px] h-[808px] relative m-auto">
      <div className="w-[1008px] h-[595px] left-0 top-0 absolute bg-purple-800 bg-opacity-30" />
      <span className="left-[69px] top-[122px] absolute text-black text-opacity-70 text-[23px] font-normal font-['Rosarivo']">Lingerie Shop</span>
      <h2 className="left-[69px] top-[171px] absolute text-black text-[27px] font-normal font-['Rosarivo']">Lorem ipsum dolor sit amet</h2>
      <p className="w-[350px] left-[72px] top-[229px] absolute text-black text-base font-normal font-['Rosarivo']">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, turpis suspendisse ut semper ipsum enim.</p>
      <img className="w-[594px] h-[718px] left-[624px] top-[90px] absolute" src={Img8.src} />
      <div className="px-[70px] py-2.5 top-[398px] absolute justify-center items-center gap-2.5 inline-flex">
        <ButtonReturn name="Get Now" />
      </div>
    </section>
  )
}
