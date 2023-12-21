import * as React from "react"
import { Link, navigate } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import bgImage from "./../images/bg-image-sky.png"
import maya from "./../images/maya-central.png"
import sol from "./../images/sol.png"
import data from "./../images/data.png"
import planeta1 from "./../images/planeta1.png"
import planeta2 from "./../images/planeta2.png"
import planeta3 from "./../images/planeta3.png"
import terra from "./../images/terra.png"
import cometa from "./../images/cometa.png"
import star from "./../images/Star.png"
import heart from "./../images/heart.svg"
import planeta5 from "./../images/planeta5.png"

import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import Maps from "../components/maps"

const IndexPage = () => {
  const [inputs, setInputs] = React.useState({
    nome: "",
    adultos: "",
    crianças: "",
  })
  const [isSent, setIsSent] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false)

  function encode(data) {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const handleFormRequest = async event => {
    event.preventDefault()

    setIsLoading(true)

    const form = event.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...inputs,
      }),
    })
      .then(() =>
        setTimeout(() => {
          setIsSent(true)
          setIsLoading(false)
          setInputs({ nome: "", phone: "", email: "" })
          navigate("/obrigado")
          setTimeout(() => {
            setIsSent(false)
          }, 2000)
        }, 2000)
      )
      .catch(error => alert(error))
  }

  const handleFormChange = event => {
    let nome = event.target.name
    let value = event.target.value
    setInputs({
      ...inputs,
      [nome]: value,
    })
  }

  React.useEffect(() => {
    console.log(inputs)
  }, [inputs])

  return (
    <div>
      <img
        src={bgImage}
        alt=""
        className="fixed w-full h-full object-cover z-10"
      />
      <div className="relative w-full h-full flex-col flex items-start justify-center  bg-black ">
        {/* planetas */}
        <img
          src={sol}
          alt="sol"
          className="absolute right-0 w-10 lg:w-28 top-20 lg:top-4 z-10"
        />
        <img
          src={planeta1}
          alt="planeta"
          className="absolute w-[40px] lg:w-20 left-3 lg:left-72 top-36 z-10 "
        />
        <img
          src={planeta2}
          alt="planeta"
          className="absolute top-[80svh] left-11 lg:left-52 lg:top-[500px] z-10"
        />
        <img
          src={planeta3}
          alt="planeta"
          className="absolute w-20 lg:w-36 top-[90svh] right-24 lg:right-32 lg:top-[400px] z-10"
        />
        <img
          src={terra}
          alt="terra"
          className="absolute right-10 lg:right-72 top-[150px] w-[40px] lg:w-[100px] z-10"
        />
        <img
          src={cometa}
          alt="cometa"
          className="absolute left-10 top-16 lg:left-14 lg:top-[150px] z-10 w-[50px] lg:w-[100px]"
        />

        {/* texto */}

        <div className="z-50 absolute top-0 flex w-full justify-center lg:flex-nowrap flex-wrap lg:flex-row flex-col items-center mt-7 lg:mt-10 lg:gap-[100px]">
          <div className="flex items-center gap-3 ">
            <img
              src={star}
              alt="star icon"
              className="flex-0 w-[15px] lg:w-[25px] flex-grow-0 flex-shrink-0"
            />
            <a
              href="#onde"
              className="text-sm lg:text-xl text-white hover:underline"
            >
              Onde vai ser
            </a>
          </div>
          <div className="flex items-center gap-3 ">
            <img
              src={star}
              alt="star icon"
              className="flex-0 flex-grow-0 w-[15px] lg:w-[25px] flex-shrink-0"
            />
            <a
              href="#confirmar"
              className="text-sm lg:text-xl text-white hover:underline"
            >
              Já confirmou sua presença?
            </a>
          </div>
        </div>
        <section className="z-40 w-full h-svh pb-20 px-6 flex flex-col items-center justify-center ">
          <div>
            <img
              src={maya}
              alt=""
              className="z-40 m-auto w-[202px] lg:max-w-[300px] lg:w-full pt-10 lg:pt-16"
            />
          </div>
          <div>
            <h2 className="text-lg lg:text-[30px] text-white text-center">
              Venha comemorar com a{" "}
            </h2>
            <h1 className="text-[40px] lg:text-[60px] text-white text-center drop-shadow-[0_1.2px_1.2px_rgba(165,97,149,0.8)]">
              MAYA
            </h1>
            <h3 className="text-lg lg:text-[30px] text-white text-center">
              Em sua primeira volta ao sol!{" "}
            </h3>
            <img
              src={data}
              alt=""
              className="m-auto px-8 pt-10 w-full max-w-[400px]"
            />
          </div>
        </section>

        <section
          className="h-full lg:h-svh pt-20 pb-16 lg:pt-32 z-[99] bg-transparent w-full max-w-7xl m-auto relative"
          id="onde"
        >
          <div className="flex items-center gap-3  px-6 max-w-4xl m-auto">
            <img
              src={star}
              alt="star icon"
              className="flex-0 w-5 flex-grow-0 flex-shrink-0"
            />
            <h4 className="text-lg  lg:text-3xl text-white">Onde vai ser</h4>
          </div>

          <div className="flex w-full flex-wrap items-center lg:flex-nowrap lg:items-start justify-center pt-12 lg:pt-10 max-w-4xl m-auto">
            <div className="flex flex-col justify-center px-6 gap-6 lg:gap-12 w-full max-w-[400px]">
              <div className="flex flex-col gap-3">
                <h3 className="text-[#C5C5C5] text-sm lg:text-base">
                  Salão de Festas{" "}
                </h3>
                <p className="text-white text-base lg:text-2xl">
                  L&M Espaço para festas
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <h3 className="text-[#C5C5C5] text-sm lg:text-base">
                  Endereço
                </h3>
                <p className="text-white text-base lg:text-2xl w-full">
                  Rua Dr. Carlos Maximiano, 169, Fonseca, Niterói-RJ
                </p>
              </div>
            </div>

            <Maps />
          </div>

          <img
            src={planeta5}
            alt="planeta"
            className="absolute w-[80px] lg:w-[100px] lg:bottom-0 left-8 lg:left-30  z-10"
          />
          <img
            src={planeta1}
            alt="planeta"
            className="absolute w-[40px]  lg:w-20 left-[150px] bottom-[-20px] lg:left-[200px]  lg:bottom-10  z-10 "
          />
          <img
            src={cometa}
            alt="cometa"
            className="absolute right-[50px] bottom-[-50px] lg:right-40 lg:bottom-[-100px]  z-10 w-[50px] lg:w-[100px]"
          />
        </section>

        <section
          className="h-[90svh] mb-14 lg:mb-4 pt-10 lg:pt-0  z-[99] bg-transparent w-full max-w-7xl m-auto  flex flex-col justify-center"
          id="confirmar"
        >
          <div>
            <div className="flex flex-0 flex-grow-0  items-center  gap-3 px-6 max-w-4xl lg:m-auto lg:my-0 top-5">
              <img
                src={star}
                alt="star icon"
                className="flex-0 w-5 flex-grow-0 flex-shrink-0"
              />
              <h4 className="text-lg lg:text-3xl text-white">
                Já confirmou sua presença?
              </h4>
            </div>

            <form
              // action="https://fabform.io/f/ktxGzZs"
              netlify
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={e => handleFormRequest(e)}
              name="contact"
              method="post"
              className="flex flex-col items-center justify-center gap-14 lg:gap-20 pt-10 lg:pt-10 relative lg:mt-0 max-w-4xl lg:m-auto"
            >
              <div className="flex gap-5 w-full lg:flex-nowrap flex-wrap justify-center px-6 items-center">
                <div className="flex flex-col w-full  max-w-[280px]">
                  <label htmlFor="name" className="text-white text-xs pb-1">
                    {" "}
                    Nome Completo
                  </label>
                  <input
                    name="nome"
                    className=" rounded-[35px] h-[40px] pl-3"
                    type="text"
                    id="name"
                    value={inputs.nome}
                    onChange={e => handleFormChange(e)}
                    autoComplete="true"
                    required
                  />
                </div>

                <div className="flex flex-col w-full  max-w-[280px]">
                  <label className="text-white text-xs pb-1" htmlFor="adultos ">
                    Quantos adultos?
                  </label>
                  <input
                    name="adultos"
                    id="adultos"
                    type="text"
                    value={inputs.adultos}
                    onChange={e => handleFormChange(e)}
                    required
                    className="rounded-[35px] h-[40px] pl-3 "
                  />
                </div>
                <div className="flex flex-col w-full max-w-[280px]">
                  <label className="text-white text-xs pb-1" htmlFor="crianças">
                    Quantas crianças?
                  </label>
                  <input
                    name="crianças"
                    id="crianças"
                    type="text"
                    value={inputs.crianças}
                    onChange={e => handleFormChange(e)}
                    required
                    className="rounded-[35px] h-[40px] pl-3 "
                  />
                </div>
              </div>
              <button
                className="max-w-[280px] flex items-center justify-center  lg:max-w-[350px]  w-full bg-[#A56195] py-3 lg:py-2 px-6 rounded-[35px] text-white text-base lg:text-xl"
                type="submit"
              >
                {isLoading && (
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#FFFFF"
                      d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z"
                    >
                      <animateTransform
                        attributeName="transform"
                        type="rotate"
                        dur="0.75s"
                        values="0 12 12;360 12 12"
                        repeatCount="indefinite"
                      />
                    </path>
                  </svg>
                )}
                {isSent
                  ? "Mensagem enviada!"
                  : isLoading
                  ? ""
                  : "Confirmar presença"}
              </button>

              <div className="absolute bottom-[-100px] right-7 flex items-center">
                <p className="text-white">Te vejo lá!</p>
                <img
                  src={maya}
                  alt=""
                  className="z-40  m-auto w-[115px] lg:max-w-[150px] lg:w-full"
                />
              </div>
            </form>
          </div>
        </section>

        <small className="z-[88] w-full bg-black text-white flex items-center justify-center text-xs h-11">
          Designed with &nbsp; <img src={heart} alt="" className="inline" />{" "}
          &nbsp; by Luana Antunes
        </small>
      </div>
    </div>
  )
}
/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="" />

export default IndexPage
