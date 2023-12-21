import * as React from "react"
import { Link } from "gatsby"
import Seo from "../components/seo"
import bgImage from "./../images/bg-image-sky.png"
import terra from "./../images/terra.png"
import planeta1 from "./../images/planeta1.png"
import planeta3 from "./../images/planeta3.png"
import cometa from "./../images/cometa.png"
import maya from "./../images/mayazona.png"
import back from "./../images/back.svg"

const SecondPage = () => (
  <div className="relative h-svh w-full">
    <img
      src={bgImage}
      alt=""
      className="fixed w-full h-full object-cover z-10"
    />
    <img
      src={cometa}
      alt="cometa"
      className="absolute left-10 top-16 lg:left-14 lg:top-[150px] z-10 w-[50px] lg:w-[100px]"
    />
    <img
      src={planeta1}
      alt="planeta"
      className="absolute w-[30px] lg:w-20 right-3 lg:right-72 top-36 z-10 "
    />
    <img
      src={terra}
      alt="terra"
      className="absolute bottom-[80svh] w-10 right-11 lg:left-52 lg:bottom-[500px] z-10"
    />
    <img
      src={planeta3}
      alt="planeta"
      className="absolute w-12 lg:w-36 bottom-[30svh] right-2 lg:right-32 lg:top-[400px] z-10"
    />
    <img
      src={maya}
      alt="maya"
      className="absolute left-0 lg:w-[400px] w-[290px] lg:left-[20vw] bottom-0 z-20"
    />
    <div className="lg:px-0 px-6 flex max-w-xl m-auto justify-center h-[80svh] flex-col gap-8">
      <h2 className="text-2xl text-center lg:text-right lg:text-4xl z-[88] text-white ">
        Sua presença foi confirmada!
      </h2>
      <h3 className="text-white w-[95%] lg:text-right text-base text-center lg:text-lg z-[888]">
        Obrigada! Te vejo lá!
      </h3>
    </div>

    <div className="absolute top-4 left-4 z-[88888888] flex gap-2">
      <img
        src={back}
        alt="back icon"
        className="flex-0 flex-grow-0 flex-shrink-0 w-5"
      />
      <Link to="/" className="text-white">
        Voltar
      </Link>
    </div>
  </div>
)

export const Head = () => <Seo title="Obrigado!" />

export default SecondPage
