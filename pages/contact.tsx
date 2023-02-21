import Head from "next/head"
import { Button, Label, TextInput } from "flowbite-react";
import Header from "../components/header";

export default function Contact() {
  return (
    <div className="m-20">
      <Header/>
      <Head>
        <title>CONTACT</title>
      </Head>
      <div className="m-20">
        <div className="text-center">
          <h1 className="inline-block text-3xl font-bold border-inherit border-solid border-b-2 mb-14">CONTACT</h1>
        </div>
        <form className="flex flex-col gap-4 max-w-screen-sm mx-auto">
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="name1"
                value="お名前"
              />
            </div>
            <TextInput
              id="name1"
              type="text"
              required={true}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="email1"
                value="メールアドレス"
              />
            </div>
            <TextInput
              id="email1"
              type="text"
              placeholder="name@flowbite.com"
              required={true}
            />
          </div>
          <Button type="submit">
            決定
          </Button>
        </form>
      </div>
    </div>
  )
}