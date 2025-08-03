"use client";

import Image from "next/image";
import {
  HeartIcon,
  Header,
  Carousel,
  CarouselContent,
  CarouselItem,
  Controller,
} from "@ff-design/react";
import { useEffect, useState } from "react";

const productImages = [
  {
    name: "T-Shirts",
    path: "/img/product-01.png",
    alt: "어두운 회색 티셔츠를 입고 있는 남성이 정면을 바라보고 있는 모습",
  },
  {
    name: "Hoodies",
    path: "/img/product-02.png",
    alt: "파란색 후드티를 입은 마네킹이 서 있는 모습",
  },
  {
    name: "Jackets",
    path: "/img/product-03.png",
    alt: "밝은 베이지색 더블 브레스트 블레이저가 옷걸이에 걸려 있는 모습",
  },
  {
    name: "Shoes",
    path: "/img/product-04.png",
    alt: "파란색, 핑크색, 흰색이 조합된 스포티한 디자인의 운동화 한 켤레",
  },
  {
    name: "Accessories",
    path: "/img/product-05.png",
    alt: "밀짚모자, 검은색 선글라스, 금색 반지, 은색 귀걸이, 검은색 시계 등 다양한 액세서리들이 흰색 배경 위에 놓여 있는 모습",
  },
  {
    name: "Sale",
    path: "/img/product-06.png",
    alt: "빨간색 드레스를 입은 마네킹이 의류 매장 내에 서 있는 모습",
  },
];

export default function Home() {
  const [api, setApi] = useState<any>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());

    api.on("select", () => {
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    });
  }, [api]);

  const scrollPrev = () => {
    api?.scrollPrev();
  };

  const scrollNext = () => {
    api?.scrollNext();
  };

  return (
    <div className="min-h-screen bg-white">
      <Header logo="/img/logo.svg" />

      <section className="relative h-[840px]">
        <Image
          src="/img/hero.png"
          alt="밝고 미니멀한 실내 공간에서 한 남성이 서 있는 모습"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40  "></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-8xl font-extralight mb-4 tracking-tight">
            MEN RECOMMENDATION
          </h1>
          <p className="text-2xl font-extralight">
            New Men&apos;s Products to Look Forward to
          </p>
        </div>
      </section>
      <section className="py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-medium text-gray-900">New Arrival</h2>
          <div className="flex gap-2">
            <Controller
              direction="left"
              size="sm"
              variant="outline"
              onClick={scrollPrev}
              disabled={!canScrollPrev}
            />
            <Controller
              direction="right"
              size="sm"
              variant="fill"
              onClick={scrollNext}
              disabled={!canScrollNext}
            />
          </div>
        </div>

        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: false,
          }}
          className="w-full"
        >
          <CarouselContent>
            {productImages.map((product, index) => (
              <CarouselItem
                key={product.name}
                className={`pl-4 ${index === productImages.length - 1 ? "pr-4" : ""} basis-1/5`}
              >
                <div className="group cursor-pointer">
                  <div className="relative aspect-square overflow-hidden rounded-sm">
                    <Image
                      src={product.path}
                      alt={product.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20"></div>
                    <button className="absolute top-4 right-4 w-6 h-6 rounded-full flex items-center justify-center">
                      <HeartIcon className="w-6 h-6 text-white" />
                    </button>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>

      <section className="py-16 max-w-7xl mx-auto">
        <h2 className="text-2xl font-medium text-gray-900 mb-8">Category</h2>
        <div className="grid grid-cols-6 gap-4">
          {productImages.map((product) => (
            <div key={product.name} className="group cursor-pointer">
              <div className="relative aspect-square overflow-hidden rounded-sm">
                <Image
                  src={product.path}
                  alt={product.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-base font-medium">{product.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-gray-50 border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto py-[24px] px-[48px]">
          <div className="flex flex-row justify-between">
            <div className="flex flex-col gap-4">
              <div className="flex items-center">
                <Image
                  src="/img/logo.svg"
                  alt="Flux Logo"
                  width={72}
                  height={28}
                />
              </div>
              <div className="flex flex-col gap-2 text-sm text-gray-500">
                <p>상호명: (주)플럭스</p>
                <p>사업자소재지: 서울특별시 강남구 플럭스대로 123, 906</p>
                <p>전화번호: (415) 555-1234</p>
                <p>팩스: (415) 555-5678</p>
                <p>이메일: support@flux.com</p>
                <p>대표이사: 김플럭스</p>
                <p>호스팅서비스: AWS (Amazon Web Services)</p>
              </div>
            </div>

            <div className="footer-container flex flex-row gap-[120px]">
              <div className="flex flex-col gap-5">
                <h3 className="font-bold text-lg  text-black">ABOUT US</h3>
                <ul className="space-y-2 text-sm text-black">
                  <li>Flux 소개</li>
                  <li>인재채용</li>
                  <li>할인 혜택</li>
                </ul>
              </div>

              <div className="flex flex-col gap-5">
                <h3 className="font-bold text-lg  text-black">MY ORDER</h3>
                <ul className="space-y-2 text-sm text-black">
                  <li>주문배송</li>
                  <li>취소/교환/반품 내역</li>
                  <li>리뷰 리스트</li>
                </ul>
              </div>

              <div className="flex flex-col gap-5">
                <h3 className="font-bold text-lg  text-black">MY ACCOUNT</h3>
                <ul className="space-y-2 text-sm text-black">
                  <li>회원정보수정</li>
                  <li>회원등급</li>
                  <li>마일리지현황</li>
                  <li>쿠폰</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 flex justify-between items-center">
            <p className="text-sm text-gray-300">
              © 2025 Flux, Inc. All Rights Reserved
            </p>
            <div className="flex gap-4 text-sm text-gray-300">
              <span>Terms of Sale</span>
              <span>Terms of Use</span>
              <span>Flux Privacy Policy</span>
              <span>Do Not Sell My Personal Information</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
