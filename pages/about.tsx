import Head from "next/head"
import { Button } from "flowbite-react";
import Img from "./public/photo.jpg"
import Header from "../components/header"

export default function About() {

  return (
    <div>
      <Header/>
      <Head>
        <title>ABOUT</title>
      </Head>
      <div className="m-20">
        <div className="text-center">
          {/* ボーダー長め */}
          {/* <h1 className="block text-3xl font-bold border-inherit border-solid border-b-2 mb-14 mx-auto w-32">ABOUT</h1> */}
          <h1 className="inline-block text-3xl font-bold border-inherit border-solid border-b-2 mb-14">ABOUT</h1>
        </div>
        <div className="flex">
          <div className="flex-1">
            <img src={Img.src} alt="img" className="object-cover h-full w-full"/>
          </div>
          <div className="flex-1 text-left bg-teal-300 text-white">
            <div className="p-10 h-full">
              <div className="font-bold pb-5 h-1/5">タイトル</div>
              <div className="pb-5 h-3/5">本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文</div>
              <div className="h-1/5">
                <Button className="h-full ml-auto bg-gradient-to-r from-pink-600 to-pink-50 hover:from-pink-50 hover:to-pink-600 border-none">
                  さらに詳しく
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="flex-1 text-left bg-teal-300 text-white">
            <div className="p-10 h-full">
              <div className="font-bold pb-5 h-1/5">タイトル</div>
              <div className="pb-5 h-3/5">本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文</div>
              <div className="h-1/5">
                <Button className="h-full ml-auto bg-gradient-to-r from-pink-600 to-pink-50 hover:from-pink-50 hover:to-pink-600 border-none">
                  さらに詳しく
                </Button>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <img src={Img.src} alt="img" className="object-fill h-full w-full" />
          </div>
        </div>
        <div className="flex">
          <div className="flex-1">
            <img src={Img.src} alt="img" className="object-contain h-full w-full" />
          </div>
          <div className="flex-1 text-left bg-teal-300 text-white">
            <div className="p-10 h-full">
              <div className="font-bold pb-5 h-1/5">タイトル</div>
              <div className="pb-5 h-3/5">本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文</div>
              <div className="h-1/5">
                <Button className="h-full ml-auto bg-gradient-to-r from-pink-600 to-pink-50 hover:from-pink-50 hover:to-pink-600 border-none">
                  さらに詳しく
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="flex-1 text-left bg-teal-300 text-white">
            <div className="p-10 h-full">
              <div className="font-bold pb-5 h-1/5">タイトル</div>
              <div className="pb-5 h-3/5">本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文</div>
              <div className="h-1/5">
                <Button className="h-full ml-auto bg-gradient-to-r from-pink-600 to-pink-50 hover:from-pink-50 hover:to-pink-600 border-none">
                  さらに詳しく
                </Button>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <img src={Img.src} alt="img" />
          </div>
        </div>
      </div>
    </div>
  )
}
