import type { Meta } from "@storybook/react-vite";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@ff-design/react/components/card";

import { Button } from "@ff-design/react/components/button";
import { Input } from "@ff-design/react/components/input";
import { ArrowLeft, X } from "@ff-design/react";
import { Checkbox } from "@ff-design/react/components/checkbox";
import { Label } from "@ff-design/react/components/label";

const meta = {
  title: "Card",
  component: Card,
  tags: ["autodocs"],
} satisfies Meta<typeof Card>;

export default meta;

export const CardLogin = () => {
  return (
    <Card className="pb-[24px]">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Login</CardTitle>
        <X className="w-4 h-4 cursor-pointer" />
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-[24px]">
          <Input
            id="email"
            type="email"
            placeholder="test@test.com"
            required
            label="Email"
          />
          <div className="flex flex-col">
            <div className="flex gap-2 flex-col"></div>
            <Input
              id="password"
              type="password"
              placeholder="please enter your password"
              required
            />
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex flex-row gap-[4px] items-center cursor-pointer">
              <Checkbox id="remember" />
              <Label className="text-[14px] font-regular text-black">
                비밀번호 기억하기
              </Label>
            </div>
            <a
              href="/forgot-password"
              className="underline text-[14px] font-regular text-gray-500"
            >
              비밀번호가 기억나지 않으세요?
            </a>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex-col gap-[24px]">
        <Button type="submit" className="w-full h-[48px]">
          로그인
        </Button>
        <div className="flex flex-row gap-[8px] items-center w-full">
          <div className="w-full h-[1px] bg-line" />
          <span className="text-[14px] font-regular text-gray-500">or</span>
          <div className="w-full h-[1px] bg-line" />
        </div>
        <Button variant="outline" className="w-full h-[48px]">
          회원가입
        </Button>
      </CardFooter>
    </Card>
  );
};
export const CardSignout = () => {
  return (
    <Card className="pb-[24px]">
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="flex flex-row gap-[8px] items-center">
          <ArrowLeft className="w-5 h-5" />
          <CardTitle>회원가입</CardTitle>
        </div>
        <X className="w-5 h-5 cursor-pointer" />
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-[24px]">
          <Input
            id="email"
            type="email"
            placeholder="test@test.com"
            required
            label="Email"
          />
          <div className="flex flex-col">
            <div className="flex gap-2 flex-col"></div>
            <Input
              id="password"
              type="password"
              placeholder="please enter your password"
              required
            />
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex flex-row gap-[4px] items-center cursor-pointer">
              <Checkbox id="remember" />
              <Label className="text-[14px] font-regular text-black">
                개인정보 수집 및 이용에 동의합니다.
              </Label>
            </div>
            <a
              href="/forgot-password"
              className="underline text-[14px] font-regular text-gray-500"
            >
              더보기
            </a>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex-col gap-[24px]">
        <Button type="submit" className="w-full h-[48px]">
          동의하고 회원가입
        </Button>
      </CardFooter>
    </Card>
  );
};

export const CardIllust = () => {
  return (
    <Card className="pb-[24px]">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>완료</CardTitle>
        <X className="w-5 h-5 cursor-pointer" />
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center">
        <img
          src="/img/img-illust-complete.svg"
          className="w-[200px] h-[200px]"
          alt="illust"
        />
        <div className="flex flex-col items-center justify-center gap-[8px]">
          <span className="text-[24px] font-regular text-black text-center">
            축하합니다!
          </span>
          <span className="text-[14px] font-regular text-black text-center">
            회원가입이 완료되었습니다.
          </span>
        </div>
      </CardContent>
      <CardFooter className="flex-col gap-[24px]">
        <Button type="submit" className="w-full h-[48px]">
          확인
        </Button>
      </CardFooter>
    </Card>
  );
};
