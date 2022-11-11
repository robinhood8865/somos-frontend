import React from "react";
import NavBar from "../../Components/Nav/NavBar";
import "font-awesome/css/font-awesome.min.css";
import { Button } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";

import pattern1 from "../../../src/Assets/Images/pattern1.svg";
import logodesigner1 from "../../../src/Assets/Images/logodesigner1.png";
import logodesigner2 from "../../../src/Assets/Images/logodesigner2.png";
import logodesign from "../../../src/Assets/Images/logodesign.jpg";
import ecommercegirl from "../../../src/Assets/Images/ecommercegirl.png";
import logo from "../../../src/Assets/Images/logo.png";
import youngman from "../../../src/Assets/Images/youngman.png";
import woman1 from "../../../src/Assets/Images/woman1.jpg";
import service1 from "../../../src/Assets/Images/service1.jpg";
import graphic1 from "../../../src/Assets/Images/graphic1.png";
import graphic2 from "../../../src/Assets/Images/graphic2.jpg";
import domain from "../../../src/Assets/Images/domain.png";
import footer from "../../../src/Assets/Images/footer.svg";
import footer1 from "../../../src/Assets/Images/footer1.png";

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="w-screen h-full">
      <div className="w-screen h-full bg-white font-inter flex justify-center">
        <div className="relative  w-full h-full">
          <div className="z-50 top-0 left-0 w-full fixed">
            <NavBar />
          </div>
          <div className="  w-full mt-[70px] py-[100px]  flex justify-center">
            <div className="relative w-[1140px]">
              <img
                className="absolute z-0 bottom-[50px] right-[150px]  w-[400px] h-[400px]"
                src={logo}
                alt=""
              />
              <div className="z-10 text-[40px] font-bold">
                TU TIENDA ONLINE POR
                <br />
                SOLO 50€ AL MES
              </div>
              <div className="text-[18px] font-300">
                Digitaliza tu negocio y comienza a vender
              </div>
              <div className="uppercase mt-[30px] w-[270px] h-[50px] bg-[#fdd43d] text-[16px] font-bold flex items-center justify-center rounded-full rounded-tl-none hover:rounded-tl-full hover:scale-105">
                inicia tu negocio
              </div>

              <div className="ml-[500px] mt-[60px]">
                <div className="text-[24px] font-bold">
                  TU PAGINA WEB POR SOLO 30€ AL MES
                </div>
                <div className="text-[18px] font-300 ">
                  Incluye todo lo necesario para que tu presencia online sea
                  perfecta
                </div>
              </div>
            </div>
          </div>
          <div className="w-full py-[100px] bg-[#f2fcfe] flex justify-center">
            <div className="relative w-[1140px]">
              <div className="rounded-[20px] bg-[#d8f5fb] p-[70px] flex justify-between">
                <div className="w-[750px]">
                  <div className="h-[100px] text-[40px] font-bold">
                    QUIENES SOMOS
                  </div>
                  <div className="text-[24px]">
                    Somos una empresa joven que cuenta con los profesionales
                    idóneos, aptos para brindar soluciones de alta calidad a
                    todos nuestros clientes, tanto particulares, emprendedores y
                    pequeñas y medianas empresas, sin necesidad de asumir un
                    alto costo por un servicio profesional, rápido y efectivo.
                  </div>
                </div>

                <div className="absolute -bottom-4 -right-8 bg-user-dark-blue  rounded-full rounded-bl-none pt-[10px] px-[20px]">
                  <img
                    className="rounded-full rounded-bl-none w-[250px] "
                    src={youngman}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full py-[100px] bg-white flex justify-center">
            <div className="relative w-[1140px]">
              <div className="rounded-[20px] bg-white flex justify-between">
                <div className="w-[500px]">
                  <div className="h-[100px] text-[28px] font-bold">
                    DESARROLLO DE PAGINAS WEB
                  </div>
                  <div className="text-[24px]">
                    Creamos tu pagina web profesional para ti o para tu marca o
                    empresa. Ofrecemos las mejores prestaciones al precio mas
                    bajo del mercado. Consúltanos sin compromiso!
                  </div>
                  <img
                    className="mt-[40px] w-[100px] rounded-full"
                    src={woman1}
                    alt=""
                  />
                  <div className="mt-[20px] ml-[30px] text-[24px]">Lisa</div>
                </div>

                <div className="ml-[50px] mt-[70px]">
                  <img
                    className="rounded-[50px] rounded-bl-none w-[700px] "
                    src={service1}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full py-[40px] bg-white flex justify-center">
            <div className="relative w-[1140px]">
              <div className="rounded-[20px] bg-[#f2fcfe] flex justify-between p-[70px] pb-0">
                <div className="bg-yellow-200 rounded-full rounded-br-none pt-[20px]">
                  <img
                    className="rounded-full rounded-br-none w-[300px] "
                    src={ecommercegirl}
                    alt=""
                  />
                </div>
                <div className="w-[500px]">
                  <div className="h-[100px] text-[28px] font-bold">
                    E-COMMERCE Y TIENDAS ONLINE
                  </div>
                  <div className="text-[24px]">
                    Creamos tu tienda online, con plataforma de pago incluida,
                    junto con todo lo que necesitas para digitalizar tu negocio
                    o emprendimiento.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full py-[100px] bg-[#f2fcfe] flex justify-center">
            <div className="relative w-[1140px]">
              <div className="rounded-[20px]  flex justify-between">
                <div className="w-[750px]">
                  <div className="absolute -top-[100px] left-[250px]">
                    <img src={pattern1} alt="" />
                  </div>
                  <div className="absolute top-[130px] left-[70px] opacity-10 w-[250px] h-[250px] rounded-full rounded-bl-none bg-purple-500 pt-[20px] "></div>
                  <div className="absolute top-[50px] -left-[10px] w-[120px] rounded-full rounded-br-none bg-purple-500 pt-[20px] ">
                    <img
                      className="rounded-full rounded-br-none "
                      src={logodesigner1}
                      alt=""
                    />
                  </div>
                  <div className="absolute top-[250px] left-[200px] w-[200px] rounded-full rounded-br-none">
                    <img
                      className="rounded-full rounded-br-none"
                      src={logodesigner2}
                      alt=""
                    />
                  </div>
                </div>

                <div className="w-[750px]">
                  <div className="h-[100px] text-[28px] font-bold">
                    DISEÑO DE LOGOS Y MARCAS
                  </div>
                  <div className="text-[24px]">
                    La primera impresión también es importante… sorprende a tus
                    clientes con un diseño de marca profesional, un logo
                    increíble y un estilo único. Nosotros nos encargamos de
                    hacerlo realidad.
                  </div>
                  <img
                    className="rounded-[20px] rounded-bl-none w-[400px] mt-[20px] ml-[60px] "
                    src={logodesign}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full py-[100px] bg-[#f2fcfe] flex justify-center">
            <div className="relative w-[1140px]">
              <div className="rounded-[20px]  flex justify-between">
                <div className="w-[400px]">
                  <div className="">
                    <img className="rounded-[20px]" src={graphic2} alt="" />
                  </div>
                </div>
                <div className="w-[750px] ml-[50px]">
                  <div className="mt-[100px] h-[100px] text-[28px] font-bold">
                    DISEÑO GRAFICO PROFESIONAL
                  </div>
                  <div className="text-[24px]">
                    Diseños profesionales para tus redes sociales, publicidad
                    visual de alto impacto y edición de videos para que tu marca
                    esté siempre en la mente de tus clientes.
                  </div>
                </div>
                <div className="w-[550px]">
                  <div className="">
                    <img src={graphic1} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full py-[100px] bg-[#f2fcfe] flex justify-center">
            <div className="relative w-[1140px]">
              <div className="rounded-[20px]  flex justify-between">
                <div className="w-[750px] ml-[200px]">
                  <div className="mt-[100px] h-[100px] text-[28px] font-bold">
                    DOMINIOS, EMAILS, HOSTING Y MAS…!
                  </div>
                  <div className="text-[24px]">
                    Posicionamos tu marca en la web, registramos el dominio que
                    mas te guste, con las cuentas de email que necesites. Nunca
                    dejes de estar online!
                  </div>
                </div>
                <div className="mt-[200px] w-[150px]">
                  <div className="">
                    <img src={domain} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="relative mt-[70px] py-[125px] bg-gray-300">
          <div className="absolute top-[110px] left-[710px] w-[50px] h-[50px] bg-[#fead42] rounded-t-full "></div>
          <div className="absolute top-[120px] left-[600px] w-[145px] h-[253px] bg-[#ffda54] rounded-full rounded-bl-none"></div>
          <img
            className="absolute top-[10px] left-[470px] scale-50 rounded-full rounded-bl-none"
            src={dashleftgirl}
            alt=""
          />
        </div> */}
          <img className="w-full" src={footer} alt="" />

          <div className="w-full py-[100px] bg-[#003e6a] flex justify-center">
            <div className="relative w-[1140px]">
              <img src={footer1} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
