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
import { Checkbox, CheckboxItem } from "@ff-design/react/components/checkbox";
import { FilterSection, FilterTag } from "@ff-design/react/components/filter";
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

export const CardFilter = () => {
  return (
    <Card className="w-[568px] max-h-[900px] overflow-hidden">
      <CardHeader className="flex flex-row items-center justify-between border-b border-gray-200 px-6 py-4">
        <CardTitle>필터</CardTitle>
        <X className="w-6 h-6 cursor-pointer" />
      </CardHeader>

      <CardContent className="p-6 overflow-y-auto max-h-[800px]">
        <div className="flex flex-col gap-8">
          <FilterSection title="취향">
            <div className="flex flex-wrap gap-2">
              <FilterTag label="Taste" isSelected hasCheck />
              <FilterTag label="Taste" isSelected hasCheck />
              <FilterTag label="Elegant" isSelected hasCheck />
              <FilterTag label="Elegant" isSelected hasCheck />
              <FilterTag label="Taste" isSelected hasCheck />
              <FilterTag label="Taste" isSelected hasCheck />
              <FilterTag label="Taste" />
              <FilterTag label="Taste" />
              <FilterTag label="Taste" />
            </div>
          </FilterSection>

          <div className="w-full h-px bg-gray-200" />

          <FilterSection title="가격">
            <div className="flex flex-col gap-6">
              <CheckboxItem label="카테고리 아이템" checked />
              <CheckboxItem label="카테고리 아이템" />
              <CheckboxItem label="카테고리 아이템" />
              <CheckboxItem label="카테고리 아이템" />
              <CheckboxItem label="카테고리 아이템" />
            </div>
          </FilterSection>

          <div className="w-full h-px bg-gray-200" />

          <FilterSection title="사진 스타일">
            <div className="flex flex-col gap-6">
              <CheckboxItem label="카테고리 아이템" checked />
              <CheckboxItem label="카테고리 아이템" />
              <CheckboxItem label="카테고리 아이템" />
              <CheckboxItem label="카테고리 아이템" />
              <CheckboxItem label="카테고리 아이템" />
            </div>
          </FilterSection>
        </div>
      </CardContent>

      <CardFooter className="flex items-center justify-between border-t border-gray-200 px-6 py-4">
        <button className="text-black text-base font-normal">Clear All</button>
        <Button className="px-6 py-3 h-12 bg-black text-white rounded-lg">
          Apply filters
        </Button>
      </CardFooter>
    </Card>
  );
};

export const CardTerms = () => {
  return (
    <Card className="w-[568px] max-h-[900px] overflow-hidden">
      <CardHeader className="flex flex-row items-center justify-between border-b border-gray-200 px-6 py-4">
        <CardTitle>이용약관</CardTitle>
        <X className="w-6 h-6 cursor-pointer" />
      </CardHeader>

      <CardContent className="p-6 overflow-y-auto max-h-[800px]">
        <div className="text-sm text-black leading-relaxed font-light">
          <p className="mb-4 font-normal">[개인정보 수집 및 이용 동의서]</p>

          <p className="mb-4">
            <strong>1. 개인정보 수집·이용 목적</strong>
            <br />
            ㈜플럭스(이하 "회사")는 아래와 같은 목적으로 개인정보를
            수집·이용합니다.
            <br />
            해당 정보는 서비스 제공을 위한 필수 항목이며, 수집에 동의하지 않을
            경우 서비스 이용이 제한될 수 있습니다.
          </p>

          <p className="mb-4">
            <strong>2. 수집하는 개인정보 항목 및 이용 목적</strong>
            <br />
            <strong>구분</strong> | <strong>수집 항목</strong> |{" "}
            <strong>이용 목적</strong>
            <br />
            회원 가입 및 기본 서비스 이용 | 이름, 생년월일, 휴대폰 번호, 이메일,
            프로필 사진, 본인 인증 정보 | 회원 식별 및 서비스 제공, 예약·호스팅
            서비스 이용
            <br />
            결제 및 정산 | 은행 계좌번호, 결제 수단 정보 | 정산 및 결제 처리
            <br />
            호스팅 서비스 이용 시 | 주소(거주지/숙소) | 숙소 등록 및 서비스 제공
            <br />
            자동 수집 정보 | IP주소, 접속 일시, 디바이스 정보(OS, 브라우저 등),
            이용 기록(검색, 조회, 예약), 쿠키정보, 고유 식별자 | 서비스 이용
            분석, 보안, 부정 이용 방지, 서비스 개선
            <br />
            위치 정보 | GPS 또는 IP 기반 위치 정보(설정에 따라 수집 여부 결정) |
            위치 기반 서비스 제공
          </p>

          <p className="mb-4 text-xs">
            ※ 일부 정보는 서비스 이용 중 자동으로 생성되어 수집됩니다.
          </p>

          <p className="mb-4">
            <strong>3. 개인정보 보유 및 이용 기간</strong>
            <br />
            회사는 원칙적으로, 개인정보 수집·이용 목적이 달성된 후에는 해당
            정보를 지체 없이 파기합니다.
            <br />
            <br />
            단, 다음의 경우에는 관련 법령에 따라 일정 기간 동안 보관할 수
            있습니다.
            <br />
            • 법적 의무 이행을 위한 경우 (예: 전자금융거래법, 세법 등)
            <br />
            • 보안 및 사기 방지 목적 (예: 로그인 기록, 디바이스 정보 등)
            <br />
            • 정산 관련 정보 보존 (예: 계좌정보, 결제수단 정보 등)
            <br />
            <br />
            이 경우, 해당 정보는 목적 달성 후 복구 불가능한 방식으로 안전하게
            삭제됩니다.
            <br />
            • 전자파일 형태: 복원이 불가능하도록 기술적 조치
            <br />• 출력물: 분쇄 또는 소각
          </p>

          <p className="mb-4">
            <strong>4. 동의 거부 권리 및 불이익 안내</strong>
            <br />
            이용자는 개인정보 수집 및 이용에 대한 동의를 거부할 권리가 있습니다.
            <br />
            다만, 서비스 제공에 필요한 최소한의 개인정보 수집에 대한 동의를
            거부할 경우, 회원가입 및 서비스 이용이 제한될 수 있습니다.
          </p>

          <p className="mb-4">
            <strong>5. 관련 법령 근거 (국내·국외 준수 사항)</strong>
            <br />
            • 개인정보보호법(대한민국)
            <br />
            • GDPR 제5조 제1항 (유럽 일반개인정보보호법)
            <br />
            • EU 제5차 자금세탁방지 지침(Directive EU 2018/843)
            <br />• 아일랜드 세법(1997)
          </p>
        </div>
      </CardContent>

      <CardFooter className="flex justify-end border-t border-gray-200 px-6 py-4">
        <Button className="px-6 py-4 h-12 bg-black text-white rounded-lg">
          Confirm
        </Button>
      </CardFooter>
    </Card>
  );
};
