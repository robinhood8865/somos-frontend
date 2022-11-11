import React from "react";
import NavBar from "../../Components/Nav/NavBar";
import "font-awesome/css/font-awesome.min.css";
import { Button } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";

import pattern1 from "../../../src/Assets/Images/pattern1.svg";
import logodesigner1 from "../../../src/Assets/Images/logodesigner1.jpg";
import logodesigner2 from "../../../src/Assets/Images/logodesigner2.jpg";
import logodesign from "../../../src/Assets/Images/logodesign.jpg";
import ecommercegirl from "../../../src/Assets/Images/ecommercegirl.png";
import logo from "../../../src/Assets/Images/logo.png";
import youngman from "../../../src/Assets/Images/youngman.png";
import woman1 from "../../../src/Assets/Images/woman1.jpg";
import service1 from "../../../src/Assets/Images/service1.jpg";

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="w-screen h-full bg-white font-inter flex justify-center">
      <div className="relative  w-full h-full">
        <div className="z-50 top-0 left-0 w-full fixed">
          <NavBar />
        </div>
        <div className=" relative w-full mt-[70px] py-[100px]  flex justify-center">
          <div className="w-[1140px]">
            <img
              className="absolute z-0 top-[50px] left-[900px]  w-[400px] h-[400px]"
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
            <div className="mt-[30px] w-[270px] h-[50px] bg-[#fdd43d] text-[16px] font-bold flex items-center justify-center rounded-full rounded-tl-none hover:rounded-tl-full hover:scale-105">
              START YOUR BUSINESS
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
                  idóneos, aptos para brindar soluciones de alta calidad a todos
                  nuestros clientes, tanto particulares, emprendedores y
                  pequeñas y medianas empresas, sin necesidad de asumir un alto
                  costo por un servicio profesional, rápido y efectivo.
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
                  empresa. Ofrecemos las mejores prestaciones al precio mas bajo
                  del mercado. Consúltanos sin compromiso!
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
                  junto con todo lo que necesitas para digitalizar tu negocio o
                  emprendimiento.
                </div>
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
                  idóneos, aptos para brindar soluciones de alta calidad a todos
                  nuestros clientes, tanto particulares, emprendedores y
                  pequeñas y medianas empresas, sin necesidad de asumir un alto
                  costo por un servicio profesional, rápido y efectivo.
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
        {/* <div className="relative mt-[70px] py-[125px] bg-gray-300">
          <div className="absolute top-[110px] left-[710px] w-[50px] h-[50px] bg-[#fead42] rounded-t-full "></div>
          <div className="absolute top-[120px] left-[600px] w-[145px] h-[253px] bg-[#ffda54] rounded-full rounded-bl-none"></div>
          <img
            className="absolute top-[10px] left-[470px] scale-50 rounded-full rounded-bl-none"
            src={dashleftgirl}
            alt=""
          />
        </div> */}
      </div>
    </div>
  );
};

export default Dashboard;
