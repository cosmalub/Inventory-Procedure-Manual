import React, { Component } from 'react';
import {
  FileText,
  CheckCircle2,
  ArrowDown,
  AlertTriangle,
  Monitor,
  Smartphone,
  ClipboardList } from
'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
// --- Wrapper Component for A4 Pages ---
const Page = ({
  children,
  pageNumber



}: {children: React.ReactNode;pageNumber?: number;}) => {
  return (
    <div className="a4-page flex flex-col pt-[25mm] pb-[25mm] px-[20mm]">
      <div className="flex-grow flex flex-col">{children}</div>
      {pageNumber &&
      <div className="absolute bottom-[15mm] left-0 right-0 text-center text-sm text-gray-400 font-medium">
          {pageNumber}
        </div>
      }
    </div>);

};
// --- Page 1: Title Page ---
const TitlePage = () =>
<Page>
    <div className="flex-grow flex flex-col items-center justify-center text-center px-10">
      <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center mb-8">
        <ClipboardList className="w-10 h-10 text-blue-700" />
      </div>
      <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-6 tracking-tight">
        Инструкция по проведению
        <br />
        инвентаризации на торговой точке
      </h1>
      <div className="w-16 h-1 bg-blue-700 mb-6"></div>
      <p className="text-xl text-gray-600 font-medium">
        Пошаговое руководство для продавцов
      </p>
    </div>
  </Page>;

// --- Page 2: Table of Contents ---
const TOCItem = ({
  number,
  title,
  page




}: {number: string;title: string;page: string;}) =>
<div className="flex items-end mb-4">
    <span className="font-semibold text-blue-700 w-6">{number}</span>
    <span className="font-medium text-gray-800 text-lg">{title}</span>
    <div className="flex-grow border-b-2 border-dotted border-gray-300 mx-3 mb-1.5"></div>
    <span className="text-gray-500 font-medium">{page}</span>
  </div>;

const TableOfContents = () =>
<Page pageNumber={2}>
    <h2 className="text-3xl font-bold text-gray-900 mb-10 border-b pb-4">
      Содержание
    </h2>
    <div className="flex flex-col gap-2 mt-4">
      <TOCItem number="1" title="Общие положения" page="3" />
      <TOCItem number="2" title="Создание точки на ТСД" page="5" />
      <TOCItem number="3" title="Написание витрины" page="6" />
      <TOCItem number="4" title="Закрытие смены и пересчёт денег" page="9" />
      <TOCItem number="5" title="Внесение всех остатков" page="8" />
      <TOCItem number="6" title="Синхронизация сканеров" page="9" />
      <TOCItem number="7" title="Сверка — пересчёт расхождений" page="10" />
      <TOCItem
      number="8"
      title="Выгрузка данных, закрытие инвентаризации и заполнение актов"
      page="11" />
    
    </div>
  </Page>;

// --- Page 3: General Provisions ---
const GeneralProvisions = () =>
<Page pageNumber={3}>
    <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b pb-4">
      1. Общие положения
    </h2>

    <div className="prose prose-blue max-w-none">
      <p className="text-lg text-gray-700 mb-8 leading-relaxed">
        Настоящая инструкция описывает порядок самостоятельного проведения
        инвентаризации (переучёта) товаров на торговой точке. Инструкция
        предназначена для сотрудников магазина и содержит все необходимые шаги
        для успешного проведения инвентаризации без участия
        инспектора-товароведа.
      </p>

      <div className="mb-8">
        <h3 className="text-xl font-bold text-blue-700 mb-3 flex items-center">
          <div className="w-2 h-6 bg-blue-700 mr-3 rounded-sm"></div>
          Цель инвентаризации
        </h3>
        <p className="text-gray-700 leading-relaxed pl-5 border-l-2 border-gray-100">
          Внести в ТСД все материальные ценности торговой точки — товар на
          витрине, на складе, тару, расходники и деньги в кассе. На основании
          этих данных формируется итоговый акт инвентаризации.
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-bold text-blue-700 mb-3 flex items-center">
          <div className="w-2 h-6 bg-blue-700 mr-3 rounded-sm"></div>
          Кто проводит инвентаризацию
        </h3>
        <p className="text-gray-700 leading-relaxed pl-5 border-l-2 border-gray-100">
          Инвентаризацию проводят продавцы торговой точки. Количество участников
          определяется куратором перед началом переучёта (сдающая смена,
          принимающая смена или обе сразу).
        </p>
      </div>

      <div className="mb-8 bg-gray-50 p-6 rounded-xl border border-gray-200">
        <h3 className="text-xl font-bold text-gray-900 mb-4">
          Что нужно для инвентаризации
        </h3>
        <ul className="space-y-4">
          <li className="flex items-start">
            <CheckCircle2 className="w-6 h-6 text-blue-600 mr-3 shrink-0" />
            <span className="text-gray-800 font-medium pt-0.5">
              ТСД (терминал сбора данных)
            </span>
          </li>
          <li className="flex items-start">
            <CheckCircle2 className="w-6 h-6 text-blue-600 mr-3 shrink-0" />
            <span className="text-gray-800 font-medium pt-0.5">
              Бланк акта инвентаризации
            </span>
          </li>
          <li className="flex items-start">
            <CheckCircle2 className="w-6 h-6 text-blue-600 mr-3 shrink-0" />
            <span className="text-gray-800 font-medium pt-0.5">
              Бланк акта для кофейного аппарата{' '}
              <span className="text-gray-500 font-normal">
                (если на точке есть кофемашина)
              </span>
            </span>
          </li>
        </ul>
      </div>
    </div>
  </Page>;

// --- Page 4: Flowchart ---
const FlowArrow = () =>
<div className="flex flex-col items-center py-1">
    <div className="w-0.5 h-4 bg-gray-300"></div>
    <ArrowDown className="text-gray-400 w-5 h-5 -mt-1" />
  </div>;

const SecondaryStep = ({
  text,
  first = false



}: {text: string;first?: boolean;}) =>
<div className="flex flex-col items-center">
    {!first && <FlowArrow />}
    <div className="flex items-center justify-center py-2 text-gray-400 italic text-base">
      <span>{text}</span>
    </div>
    <FlowArrow />
  </div>;

const MainBlock = ({ title, desc }: {title: string;desc?: string;}) =>
<div className="w-full border-[3px] border-gray-900 px-10 py-6 text-center">
    <h3 className="text-xl font-black text-gray-900 uppercase tracking-wide mb-1">
      {title}
    </h3>
    {desc && <p className="text-gray-500 text-base">{desc}</p>}
  </div>;

const ProcessFlowchart = () =>
<Page pageNumber={4}>
    <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
      Общая схема процесса
    </h2>

    <div className="flex flex-col items-center flex-grow justify-center">
      <SecondaryStep text="Создание точки на ТСД" first />
      <MainBlock
      title="Написание витрины"
      desc="вносим весь товар, который выставлен на витрине" />
    
      <SecondaryStep text="Закрытие смены и пересчёт денег" />
      <MainBlock
      title="Внесение всех остатков"
      desc="сканируем · вносим вручную то, что не сканируется" />
    
      <SecondaryStep text="Синхронизация сканеров" />
      <MainBlock title="Сверка" desc="пересчёт расхождений" />
      <div className="flex flex-col items-center">
        <FlowArrow />
        <div className="flex items-center justify-center py-2 text-gray-400 italic text-base">
          <span className="mr-2">✔</span>
          <span>
            Заполнение актов · выгрузка данных и закрытие инвентаризации
          </span>
        </div>
      </div>
    </div>
  </Page>;

// --- Page 5: Step 1 Detail ---
const Step1Detail = () =>
<Page pageNumber={5}>
    <h2 className="text-3xl font-bold text-gray-900 mb-5 border-b pb-4">
      2. Создание точки на ТСД
    </h2>

    <p className="text-lg text-gray-600 mb-5 leading-relaxed">
      Перед началом переучёта нужно создать инвентаризационную ведомость — в ней
      будет проводиться вся инвентаризация.
    </p>

    <div className="grid grid-cols-1 gap-5 mb-5">
      {/* PC Section */}
      <div className="bg-white border border-gray-200 rounded-lg p-5">
        <div className="flex items-center mb-4">
          <Monitor className="w-5 h-5 text-blue-700 mr-2" />
          <h3 className="text-xl font-bold text-gray-900">
            На компьютере (кассе):
          </h3>
        </div>
        <ol className="space-y-4 text-lg">
          <li className="flex">
            <span className="font-bold text-blue-700 w-6 shrink-0">1.</span>
            <span className="text-gray-800">
              Нажмите клавишу{' '}
              <kbd className="px-1.5 py-0.5 bg-gray-100 border border-gray-300 rounded text-sm font-mono font-bold text-gray-700">
                F8
              </kbd>
            </span>
          </li>
          <li>
            <div className="mt-2 mb-3 rounded-lg overflow-hidden border border-gray-200 max-w-[420px] mx-auto">
              <img
              src="/IMG_4963.jpg"
              alt="Нажмите F8 — Документы"
              className="w-full h-auto object-contain" />
            
            </div>
          </li>
        </ol>
      </div>
    </div>
  </Page>;

// --- Page 5.5: Создание точки — продолжение (шаги 2-6) ---
const Step1DetailCont = () =>
<Page>
    <div className="bg-white border border-gray-200 rounded-lg p-5">
      <div className="flex items-center mb-4">
        <Monitor className="w-5 h-5 text-blue-700 mr-2" />
        <h3 className="text-xl font-bold text-gray-900">
          На компьютере (кассе) — продолжение:
        </h3>
      </div>
      <ol className="space-y-4 text-lg">
        <li className="flex">
          <span className="font-bold text-blue-700 w-6 shrink-0">2.</span>
          <span className="text-gray-800">
            Нажмите <strong className="font-semibold">Доп. функции</strong>
          </span>
        </li>
        <li>
          <div className="mt-2 mb-3 rounded-lg overflow-hidden border border-gray-200 max-w-[420px] mx-auto">
            <img
            src="/IMG_4964.jpg"
            alt="Доп. функции"
            className="w-full h-auto object-contain" />
          
          </div>
        </li>
      </ol>
    </div>
  </Page>;

// --- Page 5.6: Создание точки — шаги 3-7 ---
const Step1DetailCont2 = () =>
<Page>
    <div className="bg-white border border-gray-200 rounded-lg p-5">
      <div className="flex items-center mb-4">
        <Monitor className="w-5 h-5 text-blue-700 mr-2" />
        <h3 className="text-xl font-bold text-gray-900">
          На компьютере (кассе) — продолжение:
        </h3>
      </div>
      <ol className="space-y-4 text-lg">
        <li className="flex">
          <span className="font-bold text-blue-700 w-6 shrink-0">3.</span>
          <span className="text-gray-800">
            Нажмите <strong className="font-semibold">Инвентаризация</strong>
          </span>
        </li>
        <li>
          <div className="mt-2 mb-3 rounded-lg overflow-hidden border border-gray-200 max-w-[420px] mx-auto">
            <img
            src="/IMG_4965.jpg"
            alt="Нажмите Инвентаризация"
            className="w-full h-auto object-contain" />
          
          </div>
        </li>
      </ol>
    </div>
  </Page>;

// --- Page 5.7: Создание точки — шаги 5-7 ---
const Step1DetailCont2b = () =>
<Page>
    <div className="bg-white border border-gray-200 rounded-lg p-5">
      <div className="flex items-center mb-4">
        <Monitor className="w-5 h-5 text-blue-700 mr-2" />
        <h3 className="text-xl font-bold text-gray-900">
          На компьютере (кассе) — продолжение:
        </h3>
      </div>
      <ol className="space-y-4 text-lg">
        <li className="flex">
          <span className="font-bold text-blue-700 w-6 shrink-0">4.</span>
          <span className="text-gray-800">
            Введите пароль:{' '}
            <strong className="font-semibold text-blue-700">4459</strong> —
            после ввода пароля нажмите на кнопку{' '}
            <strong className="font-semibold">«Ввести»</strong>
          </span>
        </li>
        <li>
          <div className="mt-2 mb-3 rounded-lg overflow-hidden border border-gray-200 max-w-[420px] mx-auto">
            <img
            src="/IMG_4966_2.jpg"
            alt="Введите пароль 4459 и нажмите Ввести"
            className="w-full h-auto object-contain" />
          
          </div>
        </li>
      </ol>
    </div>
  </Page>;

// --- Page 5.8: Создание точки — шаги 5-7 ---
const Step1DetailCont3 = () =>
<Page>
    <div className="bg-white border border-gray-200 rounded-lg p-5">
      <div className="flex items-center mb-4">
        <Monitor className="w-5 h-5 text-blue-700 mr-2" />
        <h3 className="text-xl font-bold text-gray-900">
          На компьютере (кассе) — продолжение:
        </h3>
      </div>
      <ol className="space-y-4 text-lg">
        <li className="flex">
          <span className="font-bold text-blue-700 w-6 shrink-0">5.</span>
          <span className="text-gray-800">
            Выберите сегодняшнюю дату переучёта
          </span>
        </li>
        <li>
          <div className="mt-2 mb-3 rounded-lg overflow-hidden border border-gray-200 max-w-[420px] mx-auto">
            <img
            src="/IMG_4967_2.jpg"
            alt="Выберите дату переучёта"
            className="w-full h-auto object-contain" />
          
          </div>
        </li>
      </ol>
    </div>
  </Page>;

// --- Page 5.9: Создание точки — шаги 5-7 ---
const Step1DetailCont3b = () =>
<Page>
    <div className="bg-white border border-gray-200 rounded-lg p-5">
      <div className="flex items-center mb-4">
        <Monitor className="w-5 h-5 text-blue-700 mr-2" />
        <h3 className="text-xl font-bold text-gray-900">
          На компьютере (кассе) — продолжение:
        </h3>
      </div>
      <ol className="space-y-4 text-lg">
        <li className="flex">
          <span className="font-bold text-blue-700 w-6 shrink-0">6.</span>
          <span className="text-gray-800">
            В другой вкладке выберите склад вашей точки
          </span>
        </li>
        <li>
          <div className="mt-2 mb-3 rounded-lg overflow-hidden border border-gray-200 max-w-[420px] mx-auto">
            <img
            src="/IMG_4968.jpg"
            alt="Выберите склад вашей точки"
            className="w-full h-auto object-contain" />
          
          </div>
        </li>
      </ol>
    </div>
  </Page>;

// --- Page 6: Создание точки — шаг 7 + сканер ---
const Step1Detail2 = () =>
<Page>
    <div className="bg-white border border-gray-200 rounded-lg p-5">
      <div className="flex items-center mb-4">
        <Monitor className="w-5 h-5 text-blue-700 mr-2" />
        <h3 className="text-xl font-bold text-gray-900">
          На компьютере (кассе) — продолжение:
        </h3>
      </div>
      <ol className="space-y-4 text-lg">
        <li className="flex">
          <span className="font-bold text-blue-700 w-6 shrink-0">7.</span>
          <span className="text-gray-800">
            Нажмите{' '}
            <strong className="font-semibold">«Выгрузить для ТСД»</strong>
          </span>
        </li>
        <li>
          <div className="mt-2 mb-3 rounded-lg overflow-hidden border border-gray-200 max-w-[420px] mx-auto">
            <img
            src="/IMG_4969.jpg"
            alt="Выгрузить для ТСД"
            className="w-full h-auto object-contain" />
          
          </div>
        </li>
      </ol>
    </div>
  </Page>;

// --- Page 6.5: Создание точки — сканер + QR + важно ---
const Step1Detail2a = () =>
<Page>
    <div className="bg-white border border-gray-200 rounded-lg p-5">
      <div className="flex items-center mb-4">
        <Monitor className="w-5 h-5 text-blue-700 mr-2" />
        <h3 className="text-xl font-bold text-gray-900">
          На компьютере (кассе) — продолжение:
        </h3>
      </div>
      <ol className="space-y-4 text-lg">
        <li className="flex">
          <span className="font-bold text-blue-700 w-6 shrink-0">8.</span>
          <span className="text-gray-800">
            Появится надпись{' '}
            <strong className="font-semibold">«Выгрузка выполнена»</strong> —
            нажмите <strong className="font-semibold">«ОК»</strong>
          </span>
        </li>
        <li>
          <div className="mt-2 mb-3 rounded-lg overflow-hidden border border-gray-200 max-w-[420px] mx-auto">
            <img
            src="/IMG_4970.jpg"
            alt="Выгрузка выполнена — нажмите ОК"
            className="w-full h-auto object-contain" />
          
          </div>
        </li>
      </ol>
    </div>
  </Page>;

// --- Page 6.55: Создание точки — шаг 9 BT код ---
const Step1Detail2b = () =>
<Page>
    {/* Шаг 9 — BT код */}
    <div className="bg-white border border-gray-200 rounded-lg p-5 mb-5">
      <div className="flex items-center mb-4">
        <Monitor className="w-5 h-5 text-blue-700 mr-2" />
        <h3 className="text-xl font-bold text-gray-900">
          На компьютере (кассе) — продолжение:
        </h3>
      </div>
      <ol className="space-y-4 text-lg">
        <li className="flex">
          <span className="font-bold text-blue-700 w-6 shrink-0">9.</span>
          <span className="text-gray-800">
            Появился <strong className="font-semibold">BT-код</strong> — его
            нужно будет загрузить в сканер
          </span>
        </li>
        <li>
          <div className="mt-2 mb-3 rounded-lg overflow-hidden border border-gray-200 max-w-[420px] mx-auto">
            <img
            src="/IMG_4971.jpg"
            alt="BT-код для загрузки в сканер"
            className="w-full h-auto object-contain" />
          
          </div>
        </li>
      </ol>
    </div>
  </Page>;

// --- Page 6.6: Создание точки — сканер + QR + важно ---
const Step1Detail2c = () =>
<Page>
    {/* Scanner Section */}
    <div className="bg-white border border-gray-200 rounded-lg p-5 mb-5">
      <div className="flex items-center mb-4">
        <Smartphone className="w-5 h-5 text-blue-700 mr-2" />
        <h3 className="text-xl font-bold text-gray-900">На сканере (ТСД):</h3>
      </div>
      <ol className="space-y-4 text-lg">
        <li className="flex">
          <span className="font-bold text-blue-700 w-6 shrink-0">1.</span>
          <span className="text-gray-800">
            Нажмите <strong className="font-semibold">«Загрузить»</strong> на
            сканере и введите BT-код, который появился на шаге 9
          </span>
        </li>
        <li>
          <div className="mt-2 mb-3 rounded-lg overflow-hidden border border-gray-200 max-w-[420px] mx-auto">
            <img
            src="/IMG_4973.jpg"
            alt="Нажмите Загрузить на сканере"
            className="w-full h-auto object-contain" />
          
          </div>
        </li>
      </ol>
    </div>
  </Page>;

// --- Page 6.65: Сканер — шаг 2 ---
const Step1Detail2c2 = () =>
<Page>
    <div className="bg-white border border-gray-200 rounded-lg p-5 mb-5">
      <div className="flex items-center mb-4">
        <Smartphone className="w-5 h-5 text-blue-700 mr-2" />
        <h3 className="text-xl font-bold text-gray-900">
          На сканере (ТСД) — продолжение:
        </h3>
      </div>
      <ol className="space-y-4 text-lg">
        <li className="flex">
          <span className="font-bold text-blue-700 w-6 shrink-0">2.</span>
          <span className="text-gray-800">
            Нажмите <strong className="font-semibold">«Выбрать»</strong>
          </span>
        </li>
        <li>
          <div className="mt-2 mb-3 rounded-lg overflow-hidden border border-gray-200 max-w-[420px] mx-auto">
            <img
            src="/IMG_4974_2.jpg"
            alt="Нажмите Выбрать"
            className="w-full h-auto object-contain" />
          
          </div>
        </li>
      </ol>
    </div>
  </Page>;

// --- Page 6.66: Сканер — шаг 3 ---
const Step1Detail2c3 = () =>
<Page>
    <div className="bg-white border border-gray-200 rounded-lg p-5 mb-5">
      <div className="flex items-center mb-4">
        <Smartphone className="w-5 h-5 text-blue-700 mr-2" />
        <h3 className="text-xl font-bold text-gray-900">
          На сканере (ТСД) — продолжение:
        </h3>
      </div>
      <ol className="space-y-4 text-lg">
        <li className="flex">
          <span className="font-bold text-blue-700 w-6 shrink-0">3.</span>
          <span className="text-gray-800">
            Введите в верхнюю строку{' '}
            <strong className="font-semibold">BT-код</strong>, который появился
            на компьютере (шаг 9), и нажмите{' '}
            <strong className="font-semibold">«ОК»</strong>
          </span>
        </li>
        <li>
          <div className="mt-2 mb-3 rounded-lg overflow-hidden border border-gray-200 max-w-[420px] mx-auto">
            <img
            src="/IMG_4979.jpg"
            alt="Введите BT-код в верхнюю строку"
            className="w-full h-auto object-contain" />
          
          </div>
        </li>
      </ol>
    </div>
  </Page>;

// --- Page 6.67: Сканер — шаг 4 ---
const Step1Detail2c4 = () =>
<Page>
    <div className="bg-white border border-gray-200 rounded-lg p-5 mb-5">
      <div className="flex items-center mb-4">
        <Smartphone className="w-5 h-5 text-blue-700 mr-2" />
        <h3 className="text-xl font-bold text-gray-900">
          На сканере (ТСД) — продолжение:
        </h3>
      </div>
      <ol className="space-y-4 text-lg">
        <li className="flex">
          <span className="font-bold text-blue-700 w-6 shrink-0">4.</span>
          <span className="text-gray-800">
            Дождитесь надписи{' '}
            <strong className="font-semibold">«Скачивание завершено»</strong> —
            нажмите <strong className="font-semibold">«Ок»</strong> и дождитесь
            полной загрузки
          </span>
        </li>
        <li>
          <div className="mt-2 mb-3 rounded-lg overflow-hidden border border-gray-200 max-w-[420px] mx-auto">
            <img
            src="/IMG_4981.jpg"
            alt="Скачивание завершено — нажмите Ок"
            className="w-full h-auto object-contain" />
          
          </div>
        </li>
      </ol>
    </div>
  </Page>;

// --- Page 6.68: Сканер — шаг 5 ---
const Step1Detail2c5 = () =>
<Page>
    <div className="bg-white border border-gray-200 rounded-lg p-5 mb-5">
      <div className="flex items-center mb-4">
        <Smartphone className="w-5 h-5 text-blue-700 mr-2" />
        <h3 className="text-xl font-bold text-gray-900">
          На сканере (ТСД) — продолжение:
        </h3>
      </div>
      <ol className="space-y-4 text-lg">
        <li className="flex">
          <span className="font-bold text-blue-700 w-6 shrink-0">5.</span>
          <span className="text-gray-800">
            После загрузки появится надпись{' '}
            <strong className="font-semibold">«Загрузка окончена»</strong> —
            нажмите <strong className="font-semibold">«ОК»</strong>
          </span>
        </li>
        <li>
          <div className="mt-2 mb-3 rounded-lg overflow-hidden border border-gray-200 max-w-[420px] mx-auto">
            <img
            src="/IMG_4983.jpg"
            alt="Загрузка окончена — нажмите ОК"
            className="w-full h-auto object-contain" />
          
          </div>
        </li>
      </ol>
    </div>
  </Page>;

// --- Page 6.69: Сканер — шаг 6 ---
const Step1Detail2c6 = () =>
<Page>
    <div className="bg-white border border-gray-200 rounded-lg p-5 mb-5">
      <div className="flex items-center mb-4">
        <Smartphone className="w-5 h-5 text-blue-700 mr-2" />
        <h3 className="text-xl font-bold text-gray-900">
          На сканере (ТСД) — продолжение:
        </h3>
      </div>
      <ol className="space-y-4 text-lg">
        <li className="flex">
          <span className="font-bold text-blue-700 w-6 shrink-0">6.</span>
          <span className="text-gray-800">
            Нажмите на <strong className="font-semibold">3 точки</strong> в
            правом верхнем углу, затем нажмите{' '}
            <strong className="font-semibold">«Обновить»</strong>
          </span>
        </li>
      </ol>
      <div className="flex gap-4 justify-center mt-4">
        {/* Скриншот 1 — 3 точки */}
        <div className="flex flex-col items-center flex-1 max-w-[200px]">
          <div className="rounded-lg overflow-hidden border border-gray-200 w-full mb-2 aspect-[9/16]">
            <img
            src="/IMG_4973_2.jpg"
            alt="Нажмите на 3 точки"
            className="w-full h-full object-cover" />
          
          </div>
          <span className="text-xs text-gray-500 text-center">
            Нажмите на 3 точки
          </span>
        </div>
        {/* Скриншот 2 — Обновить */}
        <div className="flex flex-col items-center flex-1 max-w-[200px]">
          <div className="rounded-lg overflow-hidden border border-gray-200 w-full mb-2 aspect-[9/16]">
            <img
            src="/IMG_4984.jpg"
            alt="Нажмите Обновить"
            className="w-full h-full object-cover" />
          
          </div>
          <span className="text-xs text-gray-500 text-center">
            Нажмите «Обновить»
          </span>
        </div>
      </div>
    </div>

    {/* Разделитель */}
    <div className="border-t border-gray-200 my-4"></div>

    <div className="flex justify-center mb-4">
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex items-center gap-4 w-full">
        <div className="shrink-0 bg-white rounded-lg p-2 shadow-sm">
          <QRCodeSVG value="https://youtube.com/shorts/JRpDnTPmkgY?feature=share" size={130} level="M" />
        </div>
        <div className="flex flex-col">
          <span className="text-base font-bold text-blue-900 mb-1">
            🎬 Видео-инструкция
          </span>
          <span className="text-sm text-blue-700 leading-snug">
            Отсканируйте QR-код, чтобы посмотреть видео
            процесса создания точки на ТСД
          </span>
        </div>
      </div>
    </div>

    <div className="border-l-4 border-amber-500 bg-amber-50 p-3 rounded-r-lg flex items-start">
      <AlertTriangle className="w-5 h-5 text-amber-500 mr-3 shrink-0 mt-0.5" />
      <div>
        <h4 className="font-bold text-amber-900 mb-0.5 text-sm">Важно</h4>
        <p className="text-amber-800 text-sm">
          Для создания точки включите{' '}
          <strong className="font-bold">интернет</strong>{' '}
          (выключите режим полёта). После создания сразу включите режим полёта обратно — это бережёт заряд сканера.
        </p>
      </div>
    </div>
  </Page>;

// --- Screenshot placeholder ---
const ScreenshotStep = ({
  step,
  label,
  square = false




}: {step: string;label: string;square?: boolean;}) =>
<div
  className={`flex flex-col items-center flex-1 ${square ? 'max-w-[180px]' : 'max-w-[160px]'}`}>
  
    <div
    className={`bg-gray-100 border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center w-full px-3 text-center mb-2 ${square ? 'aspect-square' : 'aspect-[9/16]'}`}>
    
      <Smartphone className="w-8 h-8 text-gray-400 mb-1" />
      <span className="text-xs text-gray-400">{step}</span>
    </div>
    <span className="text-xs text-gray-500 text-center leading-snug">
      {label}
    </span>
  </div>;

const ScreenshotSteps = ({
  steps,
  square = false






}: {steps: {step: string;label: string;}[];square?: boolean;}) =>
<div className="flex gap-5 justify-center">
    {steps.map((s, i) =>
  <ScreenshotStep key={i} step={s.step} label={s.label} square={square} />
  )}
  </div>;

// --- Page 6: Написание витрины (intro) ---
const WritingShowcase = () =>
<Page pageNumber={6}>
    <h2 className="text-3xl font-bold text-gray-900 mb-5 border-b pb-4">
      3. Написание витрины
    </h2>

    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
      Витрина пишется до закрытия магазина. Задача — внести в ТСД все позиции,
      которые выставлены на витрине.
    </p>

    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
      Если витрину пишут на двух ТСД одновременно — один сотрудник начинает с
      начала «кодника», второй с конца. Двигаясь навстречу друг другу, вы
      гарантированно охватите все позиции.
    </p>

    {/* Добавить одну позицию */}
    <div className="mb-8 mt-2">
      <h3 className="text-xl font-bold text-blue-700 mb-3 flex items-center">
        <div className="w-2 h-6 bg-blue-700 mr-3 rounded-sm"></div>
        Как добавить одну позицию
      </h3>
      <p className="text-sm text-gray-600 mb-3">
        Идёте по «коднику» в ТСД и добавляете каждую позицию, которая есть на
        витрине. Одно нажатие — одна штука.
      </p>
      <div className="flex gap-5 justify-center">
        {/* Шаг 1 — реальный скриншот */}
        <div className="flex flex-col items-center flex-1 max-w-[160px]">
          <div className="bg-gray-100 border-2 border-gray-200 rounded-xl flex flex-col items-center justify-center w-full overflow-hidden mb-2 aspect-[9/16]">
            <img
            src="/IMG_5106.jpg"
            alt="Найдите позицию в «коднике»"
            className="w-full h-full object-cover" />
          
          </div>
          <span className="text-xs text-gray-500 text-center leading-snug">
            Найдите позицию в «коднике»
          </span>
        </div>
        {/* Шаг 2 — реальный скриншот */}
        <div className="flex flex-col items-center flex-1 max-w-[160px]">
          <div className="bg-gray-100 border-2 border-gray-200 rounded-xl flex flex-col items-center justify-center w-full overflow-hidden mb-2 aspect-[9/16]">
            <img
            src="/IMG_5107.jpg"
            alt="Свайп влево на позиции"
            className="w-full h-full object-cover" />
          
          </div>
          <span className="text-xs text-gray-500 text-center leading-snug">
            Свайп влево на позиции
          </span>
        </div>
        {/* Шаг 3 — реальный скриншот */}
        <div className="flex flex-col items-center flex-1 max-w-[160px]">
          <div className="bg-gray-100 border-2 border-gray-200 rounded-xl flex flex-col items-center justify-center w-full overflow-hidden mb-2 aspect-[9/16]">
            <img
            src="/IMG_5107-1.jpg"
            alt="Нажмите +1шт."
            className="w-full h-full object-cover" />
          
          </div>
          <span className="text-xs text-gray-500 text-center leading-snug">
            Нажмите +1шт.
          </span>
        </div>
      </div>
    </div>
  </Page>;

// --- Page 7: Написание витрины (продолжение) ---
const WritingShowcase2 = () =>
<Page pageNumber={7}>
    {/* Добавить несколько позиций */}
    <div className="mb-8">
      <h3 className="text-xl font-bold text-blue-700 mb-3 flex items-center">
        <div className="w-2 h-6 bg-blue-700 mr-3 rounded-sm"></div>
        Как добавить несколько штук одной позиции
      </h3>
      <p className="text-sm text-gray-600 mb-3">
        Если на витрине несколько штук одного товара — добавьте позицию и
        укажите нужное количество.
      </p>
      <div className="flex gap-5 justify-center">
        {/* Шаг 1 */}
        <div className="flex flex-col items-center flex-1 max-w-[160px]">
          <div className="bg-gray-100 border-2 border-gray-200 rounded-xl flex flex-col items-center justify-center w-full overflow-hidden mb-2 aspect-[9/16]">
            <img
            src="/IMG_5110.jpg"
            alt="Найдите позицию в «коднике»"
            className="w-full h-full object-cover" />
          
          </div>
          <span className="text-xs text-gray-500 text-center leading-snug">
            Найдите позицию в «коднике» и нажмите на неё
          </span>
        </div>
        {/* Шаг 2 */}
        <div className="flex flex-col items-center flex-1 max-w-[160px]">
          <div className="bg-gray-100 border-2 border-gray-200 rounded-xl flex flex-col items-center justify-center w-full overflow-hidden mb-2 aspect-[9/16]">
            <img
            src="/IMG_5113.jpg"
            alt="Введите количество"
            className="w-full h-full object-cover" />
          
          </div>
          <span className="text-xs text-gray-500 text-center leading-snug">
            Введите нужное количество
          </span>
        </div>
        {/* Шаг 3 */}
        <div className="flex flex-col items-center flex-1 max-w-[160px]">
          <div className="bg-gray-100 border-2 border-gray-200 rounded-xl flex flex-col items-center justify-center w-full overflow-hidden mb-2 aspect-[9/16]">
            <img
            src="/IMG_5114.jpg"
            alt="Нажмите Записать"
            className="w-full h-full object-cover" />
          
          </div>
          <span className="text-xs text-gray-500 text-center leading-snug">
            Нажмите «Записать»
          </span>
        </div>
      </div>
    </div>

    {/* Обновить кодник */}
    <div className="mb-8">
      <h3 className="text-xl font-bold text-blue-700 mb-3 flex items-center">
        <div className="w-2 h-6 bg-blue-700 mr-3 rounded-sm"></div>
        Как обновить «кодник»
      </h3>
      <p className="text-sm text-gray-600 mb-3">
        После добавления позиций они не сразу видны в списке — это нормально.
        Обновите «кодник», чтобы проверить себя.
      </p>
      <div className="flex gap-5 justify-center">
        {/* Шаг 1 */}
        <div className="flex flex-col items-center flex-1 max-w-[160px]">
          <div className="bg-gray-100 border-2 border-gray-200 rounded-xl flex flex-col items-center justify-center w-full overflow-hidden mb-2 aspect-[9/16]">
            <img
            src="/IMG_5127.jpg"
            alt="Позиция добавлена"
            className="w-full h-full object-cover" />
          
          </div>
          <span className="text-xs text-gray-500 text-center leading-snug">
            Сделайте свайп справа налево на любой позиции
          </span>
        </div>
        {/* Шаг 2 */}
        <div className="flex flex-col items-center flex-1 max-w-[160px]">
          <div className="bg-gray-100 border-2 border-gray-200 rounded-xl flex flex-col items-center justify-center w-full overflow-hidden mb-2 aspect-[9/16]">
            <img
            src="/IMG_5127-1.jpg"
            alt="Нажмите Обновить"
            className="w-full h-full object-cover" />
          
          </div>
          <span className="text-xs text-gray-500 text-center leading-snug">
            Нажмите «Обновить»
          </span>
        </div>
        {/* Шаг 3 */}
        <div className="flex flex-col items-center flex-1 max-w-[160px]">
          <div className="bg-gray-100 border-2 border-gray-200 rounded-xl flex flex-col items-center justify-center w-full overflow-hidden mb-2 aspect-[9/16]">
            <img
            src="/IMG_5128.jpg"
            alt="Проверьте внесённые позиции"
            className="w-full h-full object-cover" />
          
          </div>
          <span className="text-xs text-gray-500 text-center leading-snug">
            После обновления появятся все добавленные вами позиции
          </span>
        </div>
      </div>
    </div>

  </Page>;

// --- Page 8: Написание витрины (удаление + видео) ---
const WritingShowcase3 = () =>
<Page pageNumber={8}>
    {/* Удалить позицию */}
    <div className="mb-8">
      <h3 className="text-xl font-bold text-blue-700 mb-3 flex items-center">
        <div className="w-2 h-6 bg-blue-700 mr-3 rounded-sm"></div>
        Как удалить позицию
      </h3>
      <p className="text-sm text-gray-600 mb-3">
        Если позиция добавлена случайно — найдите её в списке и удалите.
      </p>
      <div className="flex gap-5 justify-center">
        {/* Шаг 1 */}
        <div className="flex flex-col items-center flex-1 max-w-[160px]">
          <div className="bg-gray-100 border-2 border-gray-200 rounded-xl flex flex-col items-center justify-center w-full overflow-hidden mb-2 aspect-[9/16]">
            <img
            src="/IMG_5152.jpg"
            alt="Найдите позицию в списке"
            className="w-full h-full object-cover" />
          
          </div>
          <span className="text-xs text-gray-500 text-center leading-snug">
            Найдите позицию в списке и нажмите на неё
          </span>
        </div>
        {/* Шаг 2 */}
        <div className="flex flex-col items-center flex-1 max-w-[160px]">
          <div className="bg-gray-100 border-2 border-gray-200 rounded-xl flex flex-col items-center justify-center w-full overflow-hidden mb-2 aspect-[9/16]">
            <img
            src="/IMG_5153.jpg"
            alt="Установите количество 0"
            className="w-full h-full object-cover" />
          
          </div>
          <span className="text-xs text-gray-500 text-center leading-snug">
            Установите количество <strong>0</strong>
          </span>
        </div>
        {/* Шаг 3 */}
        <div className="flex flex-col items-center flex-1 max-w-[160px]">
          <div className="bg-gray-100 border-2 border-gray-200 rounded-xl flex flex-col items-center justify-center w-full overflow-hidden mb-2 aspect-[9/16]">
            <img
            src="/IMG_5154.jpg"
            alt="Нажмите Записать 2 раза"
            className="w-full h-full object-cover" />
          
          </div>
          <span className="text-xs text-gray-500 text-center leading-snug">
            Нажмите <strong>«Записать» 2 раза</strong>
          </span>
        </div>
      </div>
    </div>

    {/* QR-код видео */}
    <div className="mt-auto border-t border-gray-200 pt-4">
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex items-center gap-4 w-full">
        <div className="shrink-0 bg-white rounded-lg p-2 shadow-sm">
          <QRCodeSVG value="https://youtube.com/shorts/TjFd1rIwZp8" size={130} level="M" />
        </div>
        <div className="flex flex-col">
          <span className="text-base font-bold text-blue-900 mb-1">
            🎬 Видео-инструкция
          </span>
          <span className="text-sm text-blue-700 leading-snug">
            Отсканируйте QR-код, чтобы посмотреть видео
            процесса написания витрины
          </span>
        </div>
      </div>
    </div>
  </Page>;

// --- Page 9: Закрытие смены и пересчёт денег ---
const ShiftClosing = () =>
<Page pageNumber={9}>
    <h2 className="text-3xl font-bold text-gray-900 mb-5 border-b pb-4">
      4. Закрытие смены и пересчёт денег
    </h2>

    <p className="text-lg text-gray-700 mb-5 leading-relaxed">
      Закрываем магазин. После этого нужно снять отчёт, закрыть смену,
      пересчитать деньги и внести результат в ТСД.
    </p>

    <div className="bg-white border border-gray-200 rounded-lg p-5">
      <div className="flex items-center mb-4">
        <Monitor className="w-5 h-5 text-blue-700 mr-2" />
        <h3 className="text-xl font-bold text-gray-900">На компьютере:</h3>
      </div>
      <ol className="space-y-5 text-lg">
        <li className="flex flex-col">
          <div className="flex">
            <span className="font-bold text-blue-700 w-6 shrink-0">1.</span>
            <span className="text-gray-800">
              Снимаем <strong className="font-semibold">Х-отчёт</strong>: Нажмите <strong>F8</strong> (или просто <strong>«Документы»</strong>) → выберите <strong>«Х-Отчет»</strong>
            </span>
          </div>
          <div className="mt-3">
            <div className="mt-1 mb-1 rounded-lg overflow-hidden border border-gray-200 max-w-[420px] mx-auto">
              <img
              src="/IMG_xr_1.jpg"
              alt="Нажмите F8 — выбрать Х-Отчет"
              className="w-full h-auto object-contain" />
            </div>
          </div>
        </li>
      </ol>
    </div>
  </Page>;

// --- Page 9.5: Закрытие смены — Х-отчёт (продолжение) ---
const ShiftClosing1b = () =>
<Page>
    <div className="bg-white border border-gray-200 rounded-lg p-5">
      <div className="flex items-center mb-4">
        <Monitor className="w-5 h-5 text-blue-700 mr-2" />
        <h3 className="text-xl font-bold text-gray-900">На компьютере — продолжение:</h3>
      </div>
      <ol className="space-y-5 text-lg">
        <li className="flex flex-col">
          <div className="flex">
            <span className="font-bold text-blue-700 w-6 shrink-0">2.</span>
            <span className="text-gray-800">
              Выберите <strong className="font-semibold">«Нефискальный»</strong>
            </span>
          </div>
          <div className="mt-3">
            <div className="mt-1 mb-1 rounded-lg overflow-hidden border border-gray-200 max-w-[420px] mx-auto">
              <img
              src="/IMG_xr_2.jpg"
              alt="Выберите Нефискальный"
              className="w-full h-auto object-contain" />
            </div>
          </div>
        </li>
      </ol>
    </div>
  </Page>;

// --- Page 9.6: Закрытие смены — Х-отчёт (шаг 3) ---
const ShiftClosing1c = () =>
<Page>
    <div className="bg-white border border-gray-200 rounded-lg p-5">
      <div className="flex items-center mb-4">
        <Monitor className="w-5 h-5 text-blue-700 mr-2" />
        <h3 className="text-xl font-bold text-gray-900">На компьютере — продолжение:</h3>
      </div>
      <ol className="space-y-5 text-lg">
        <li className="flex flex-col">
          <div className="flex">
            <span className="font-bold text-blue-700 w-6 shrink-0">3.</span>
            <span className="text-gray-800">
              Нажмите <strong className="font-semibold">«Да»</strong>
            </span>
          </div>
          <div className="mt-3">
            <div className="mt-1 mb-1 rounded-lg overflow-hidden border border-gray-200 max-w-[420px] mx-auto">
              <img
              src="/IMG_xr_3.jpg"
              alt="Нажмите Да"
              className="w-full h-auto object-contain" />
            </div>
          </div>
        </li>
      </ol>
    </div>
  </Page>;

// --- Page 9b: Закрытие смены — продолжение ---
const ShiftClosing2 = () =>
<Page>
    <div className="bg-white border border-gray-200 rounded-lg p-5 mb-5">
      <div className="flex items-center mb-4">
        <Monitor className="w-5 h-5 text-blue-700 mr-2" />
        <h3 className="text-xl font-bold text-gray-900">На компьютере — продолжение:</h3>
      </div>
      <ol className="space-y-5 text-lg">
        <li className="flex flex-col">
          <div className="flex">
            <span className="font-bold text-blue-700 w-6 shrink-0">4.</span>
            <span className="text-gray-800">Закрываем смену</span>
          </div>
          <div className="mt-3">
            <div className="mt-1 mb-3 rounded-lg overflow-hidden border border-gray-200 max-w-[420px] mx-auto">
              <img
              src="/IMG_xr_4.jpg"
              alt="Закрытие смены (F11)"
              className="w-full h-auto object-contain" />
            </div>
          </div>
          <div className="ml-6 mt-2 bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm text-gray-700">
            <p>→ Нажмите <kbd className="px-1.5 py-0.5 bg-gray-100 border border-gray-300 rounded text-sm font-mono font-bold text-gray-700">F11</kbd> или кнопку <strong>«Закрытие смены»</strong> внизу экрана
            </p>
          </div>
        </li>
      </ol>
    </div>
  </Page>;

// --- Page 9.65: Закрытие смены — подтверждение ---
const ShiftClosing2b = () =>
<Page>
    <div className="bg-white border border-gray-200 rounded-lg p-5 mb-5">
      <div className="flex items-center mb-4">
        <Monitor className="w-5 h-5 text-blue-700 mr-2" />
        <h3 className="text-xl font-bold text-gray-900">На компьютере — продолжение:</h3>
      </div>
      <ol className="space-y-5 text-lg">
        <li className="flex flex-col">
          <div className="flex">
            <span className="font-bold text-blue-700 w-6 shrink-0">5.</span>
            <span className="text-gray-800">
              Нажмите <strong className="font-semibold">«Да»</strong> на вопрос «Вы уверены, что хотите закрыть смену?»
            </span>
          </div>
          <div className="mt-3">
            <div className="mt-1 mb-3 rounded-lg overflow-hidden border border-gray-200 max-w-[280px] mx-auto">
              <img
              src="/IMG_xr_5.jpg"
              alt="Вы уверены, что хотите закрыть смену? Да"
              className="w-full h-auto object-contain" />
            </div>
          </div>
        </li>
      </ol>
    </div>

    {/* QR-код видео */}
    <div className="border-t border-gray-200 pt-4 mb-5">
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex items-center gap-4 w-full">
        <div className="shrink-0 bg-white rounded-lg p-2 shadow-sm">
          <QRCodeSVG value="https://youtube.com/shorts/SJgaxvKNVNg" size={130} level="M" />
        </div>
        <div className="flex flex-col">
          <span className="text-base font-bold text-blue-900 mb-1">
            🎬 Видео-инструкция
          </span>
          <span className="text-sm text-blue-700 leading-snug">
            Отсканируйте QR-код, чтобы посмотреть видео
            процесса закрытия смены
          </span>
        </div>
      </div>
    </div>

    <div className="border-l-4 border-amber-500 bg-amber-50 p-4 rounded-r-lg flex items-start mt-auto">
      <AlertTriangle className="w-5 h-5 text-amber-500 mr-3 shrink-0 mt-0.5" />
      <div>
        <h4 className="font-bold text-amber-900 mb-0.5">
          Если на точке две кассы
        </h4>
        <p className="text-amber-800 text-base">
          Сначала на второстепенной — Х-отчёт и закрытие смены. Затем то же
          самое на главной.
        </p>
      </div>
    </div>
  </Page>;

// --- Page 9.7: Закрытие смены — пересчёт денег ---
const ShiftClosing3 = () =>
<Page>
    <div className="grid grid-cols-1 gap-4 mb-5">
      {/* Пересчёт денег + ТСД */}
      <div className="bg-white border border-gray-200 rounded-lg p-5">
        <div className="flex items-center mb-4">
          <Smartphone className="w-5 h-5 text-blue-700 mr-2" />
          <h3 className="text-xl font-bold text-gray-900">
            Пересчёт денег + ТСД:
          </h3>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-5 rounded-r-lg">
          <p className="text-blue-900 text-base leading-relaxed">
            Теперь необходимо пересчитать все наличные в кассе. <strong>Важно:</strong> деньги считаются покупюрно. В ТСД мы вносим не общую сумму, а именно <strong>количество купюр</strong> каждого номинала. ТСД сам рассчитает итог!
          </p>
        </div>

        <ol className="space-y-5 text-lg">
          <li className="flex flex-col">
            <div className="flex">
              <span className="font-bold text-blue-700 w-6 shrink-0">6.</span>
              <span className="text-gray-800">
                Сначала откройте вкладку <strong className="font-semibold">«Деньги»</strong> на ТСД
              </span>
            </div>
            <div className="mt-3">
              <div className="mt-1 mb-3 rounded-lg overflow-hidden border border-gray-200 max-w-[200px] mx-auto">
                <img
                src="/IMG_xr_6.jpg"
                alt="Вкладка Деньги"
                className="w-full h-auto object-contain" />
              </div>
            </div>
          </li>
          <li className="flex flex-col">
            <div className="flex">
              <span className="font-bold text-blue-700 w-6 shrink-0">7.</span>
              <span className="text-gray-800">
                Пересчитываем деньги по купюрам и нажимаем на нужный номинал в ТСД
              </span>
            </div>
            <div className="mt-3">
              <div className="mt-1 mb-3 rounded-lg overflow-hidden border border-gray-200 max-w-[200px] mx-auto">
                <img
                src="/IMG_xr_7.jpg"
                alt="Выбор купюры"
                className="w-full h-auto object-contain" />
              </div>
            </div>
          </li>
        </ol>
      </div>
    </div>
  </Page>;

// --- Page 9.75: Закрытие смены — ввод количества купюр ---
const ShiftClosing3b = () =>
<Page>
    <div className="bg-white border border-gray-200 rounded-lg p-5 mb-5">
      <div className="flex items-center mb-4">
        <Smartphone className="w-5 h-5 text-blue-700 mr-2" />
        <h3 className="text-xl font-bold text-gray-900">
          Пересчёт денег + ТСД (продолжение):
        </h3>
      </div>
      <ol className="space-y-5 text-lg">
        <li className="flex flex-col">
          <div className="flex">
            <span className="font-bold text-blue-700 w-6 shrink-0">8.</span>
            <span className="text-gray-800">
              Напишите вместо «0» количество купюр, которое вы насчитали
            </span>
          </div>
          <div className="mt-3">
            <div className="mt-1 mb-3 rounded-lg overflow-hidden border border-gray-200 max-w-[200px] mx-auto">
              <img
              src="/IMG_xr_8.jpg"
              alt="Ввод количества купюр"
              className="w-full h-auto object-contain" />
            </div>
          </div>
        </li>
        <li className="flex flex-col">
          <div className="flex">
            <span className="font-bold text-blue-700 w-6 shrink-0">9.</span>
            <span className="text-gray-800">
              Нажмите плюсик два раза, чтобы записать
            </span>
          </div>
          <div className="mt-3">
            <div className="mt-1 mb-3 rounded-lg overflow-hidden border border-gray-200 max-w-[200px] mx-auto">
              <img
              src="/IMG_xr_9.jpg"
              alt="Нажать плюс два раза"
              className="w-full h-auto object-contain" />
            </div>
          </div>
        </li>
      </ol>
    </div>
  </Page>;

// --- Page 9.77: Закрытие смены — удаление количества купюр ---
const ShiftClosing3c = () =>
<Page>
    <div className="bg-white border border-gray-200 rounded-lg p-5 mb-5">
      <div className="flex items-center mb-4">
        <Smartphone className="w-5 h-5 text-blue-700 mr-2" />
        <h3 className="text-xl font-bold text-gray-900">
          Пересчёт денег + ТСД (продолжение):
        </h3>
      </div>
      <ol className="space-y-5 text-lg">
        <li className="flex flex-col">
          <div className="flex">
            <span className="font-bold text-blue-700 w-6 shrink-0">10.</span>
            <span className="text-gray-800">
              Если вы неправильно посчитали, нажмите крестик, чтобы удалить количество купюр
            </span>
          </div>
          <div className="mt-3">
            <div className="mt-1 mb-3 rounded-lg overflow-hidden border border-gray-200 max-w-[200px] mx-auto">
              <img
              src="/IMG_xr_10.jpg"
              alt="Удалить количество купюр"
              className="w-full h-auto object-contain" />
            </div>
          </div>
        </li>
      </ol>
    </div>

    {/* QR-код видео */}
    <div className="mt-auto border-t border-gray-200 pt-4">
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex items-center gap-4 w-full">
        <div className="shrink-0 bg-white rounded-lg p-2 shadow-sm">
          <QRCodeSVG value="https://youtube.com/shorts/yLs_n8hrfOM" size={130} level="M" />
        </div>
        <div className="flex flex-col">
          <span className="text-base font-bold text-blue-900 mb-1">
            🎬 Видео-инструкция
          </span>
          <span className="text-sm text-blue-700 leading-snug">
            Отсканируйте QR-код, чтобы посмотреть видео,
            как пересчитывать деньги и вносить в ТСД
          </span>
        </div>
      </div>
    </div>
  </Page>;

// --- Page 9.8: Закрытие смены — внесение/изъятие ---
const ShiftClosing4 = () =>
<Page>
    <div className="grid grid-cols-1 gap-4 mb-5">
      {/* На компьютере — внесение/изъятие */}
      <div className="bg-white border border-gray-200 rounded-lg p-5">
        <div className="flex items-center mb-4">
          <Monitor className="w-5 h-5 text-blue-700 mr-2" />
          <h3 className="text-xl font-bold text-gray-900">На компьютере:</h3>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-5 rounded-r-lg">
          <p className="text-blue-900 text-base leading-relaxed">
            После того, как мы пересчитали деньги в кассе, нужно сравнить получившуюся сумму с суммой по Х-отчёту.<br/>
            Если реальных денег в кассе <strong>больше</strong>, чем в отчёте — делаем <strong>внесение</strong>.<br/>
            Если денег <strong>меньше</strong> — делаем <strong>изъятие</strong>.
          </p>
        </div>

        <ol className="space-y-5 text-lg">
          <li className="flex flex-col">
            <div className="flex">
              <span className="font-bold text-blue-700 w-6 shrink-0">11.</span>
              <span className="text-gray-800">
                Нажмите <strong className="font-semibold">F8</strong> (или кнопку <strong>«Документы»</strong>)
              </span>
            </div>
            <div className="mt-3">
              <div className="mt-1 mb-3 rounded-lg overflow-hidden border border-gray-200 max-w-[420px] mx-auto">
                <img
                src="/IMG_xr_11.jpg"
                alt="Документы (F8)"
                className="w-full h-auto object-contain" />
              </div>
            </div>
          </li>
        </ol>
      </div>
    </div>
  </Page>;

// --- Page 9.85: Закрытие смены — внесение/изъятие (продолжение) ---
const ShiftClosing4b = () =>
<Page>
    <div className="grid grid-cols-1 gap-4 mb-5">
      <div className="bg-white border border-gray-200 rounded-lg p-5">
        <div className="flex items-center mb-4">
          <Monitor className="w-5 h-5 text-blue-700 mr-2" />
          <h3 className="text-xl font-bold text-gray-900">На компьютере (продолжение):</h3>
        </div>
        <ol className="space-y-5 text-lg">
          <li className="flex flex-col">
            <div className="flex">
              <span className="font-bold text-blue-700 w-6 shrink-0">12.</span>
              <span className="text-gray-800">
                Выберите <strong>«Внесение денег»</strong> или <strong>«Изъятие денег»</strong>:
              </span>
            </div>
            <div className="mt-3">
              <div className="mt-1 mb-3 rounded-lg overflow-hidden border border-gray-200 max-w-[420px] mx-auto">
                <img
                src="/IMG_xr_12.jpg"
                alt="Внесение или изъятие денег"
                className="w-full h-auto object-contain" />
              </div>
            </div>
            <div className="ml-6 mt-2 space-y-1.5">
              <div className="flex items-start">
                <span className="text-blue-700 mr-2 font-bold">•</span>
                <span className="text-gray-700">
                  денег больше, чем по Х-отчёту —{' '}
                  <strong className="font-semibold">внесение</strong>
                </span>
              </div>
              <div className="flex items-start">
                <span className="text-blue-700 mr-2 font-bold">•</span>
                <span className="text-gray-700">
                  денег меньше —{' '}
                  <strong className="font-semibold">изъятие</strong>
                </span>
              </div>
            </div>
          </li>
        </ol>
      </div>
    </div>
  </Page>;

// --- Page 9.87: Закрытие смены — не фискальный ---
const ShiftClosing4c = () =>
<Page>
    <div className="grid grid-cols-1 gap-4 mb-5">
      <div className="bg-white border border-gray-200 rounded-lg p-5">
        <div className="flex items-center mb-4">
          <Monitor className="w-5 h-5 text-blue-700 mr-2" />
          <h3 className="text-xl font-bold text-gray-900">На компьютере (продолжение):</h3>
        </div>
        <ol className="space-y-5 text-lg">
          <li className="flex flex-col">
            <div className="flex">
              <span className="font-bold text-blue-700 w-6 shrink-0">13.</span>
              <span className="text-gray-800">
                Затем выберите <strong className="font-semibold">«Не фискальный»</strong>
              </span>
            </div>
            <div className="mt-3">
              <div className="mt-1 mb-3 rounded-lg overflow-hidden border border-gray-200 max-w-[420px] mx-auto">
                <img
                src="/IMG_xr_13.jpg"
                alt="Не фискальный"
                className="w-full h-auto object-contain" />
              </div>
            </div>
          </li>
        </ol>
      </div>
    </div>
  </Page>;

// --- Page 9.88: Закрытие смены — ввод суммы ---
const ShiftClosing4d = () =>
<Page>
    <div className="grid grid-cols-1 gap-4 mb-5">
      <div className="bg-white border border-gray-200 rounded-lg p-5">
        <div className="flex items-center mb-4">
          <Monitor className="w-5 h-5 text-blue-700 mr-2" />
          <h3 className="text-xl font-bold text-gray-900">На компьютере (продолжение):</h3>
        </div>
        <ol className="space-y-5 text-lg">
          <li className="flex flex-col">
            <div className="flex">
              <span className="font-bold text-blue-700 w-6 shrink-0">14.</span>
              <span className="text-gray-800">
                Введите нужную сумму внесения (или изъятия) и нажмите <strong>«ОК»</strong>
              </span>
            </div>
            <div className="mt-3">
              <div className="mt-1 mb-3 rounded-lg overflow-hidden border border-gray-200 max-w-[420px] mx-auto">
                <img
                src="/IMG_xr_14.jpg"
                alt="Ввод суммы"
                className="w-full h-auto object-contain" />
              </div>
            </div>
          </li>
        </ol>
      </div>
    </div>
  </Page>;

// --- Page 9.89: Закрытие смены — прочее внесение ---
const ShiftClosing4e = () =>
<Page>
    <div className="grid grid-cols-1 gap-4 mb-5">
      <div className="bg-white border border-gray-200 rounded-lg p-5">
        <div className="flex items-center mb-4">
          <Monitor className="w-5 h-5 text-blue-700 mr-2" />
          <h3 className="text-xl font-bold text-gray-900">На компьютере (продолжение):</h3>
        </div>
        <ol className="space-y-5 text-lg">
          <li className="flex flex-col">
            <div className="flex">
              <span className="font-bold text-blue-700 w-6 shrink-0">15.</span>
              <span className="text-gray-800">
                Выберите строку <strong className="font-semibold">«Прочее внесение денежных средств»</strong> (или изъятие)
              </span>
            </div>
            <div className="mt-3">
              <div className="mt-1 mb-3 rounded-lg overflow-hidden border border-gray-200 max-w-[420px] mx-auto">
                <img
                src="/IMG_xr_15.jpg"
                alt="Прочее внесение денежных средств"
                className="w-full h-auto object-contain" />
              </div>
            </div>
          </li>
        </ol>
      </div>
    </div>

    {/* QR-код видео */}
    <div className="mt-auto border-t border-gray-200 pt-4">
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex items-center gap-4 w-full">
        <div className="shrink-0 bg-white rounded-lg p-2 shadow-sm">
          <QRCodeSVG value="https://youtube.com/shorts/cPKRZWYlgZ0" size={130} level="M" />
        </div>
        <div className="flex flex-col">
          <span className="text-base font-bold text-blue-900 mb-1">
            🎬 Видео-инструкция
          </span>
          <span className="text-sm text-blue-700 leading-snug">
            Отсканируйте QR-код, чтобы посмотреть видео о том,
            как выровнять фактическую сумму с документальной
          </span>
        </div>
      </div>
    </div>
  </Page>;

// --- Page 10: Внесение всех остатков ---
const AllRemainders = () =>
<Page pageNumber={10}>
    <h2 className="text-3xl font-bold text-gray-900 mb-5 border-b pb-4">
      5. Внесение всех остатков
    </h2>

    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 rounded-r-lg">
      <p className="text-blue-900 text-lg leading-relaxed">
        После того как мы переписали витрину, необходимо внести <strong>весь остальной товар</strong> на торговой точке.
        <br/><br/>
        Остатки делятся на две категории:
      </p>
      <ul className="list-disc ml-6 mt-2 text-blue-900 text-lg space-y-1">
        <li><strong>Товар, который сканируется</strong> — его мы просто сканируем.</li>
        <li><strong>Товар, который не сканируется</strong> (тара, расходники, весовой товар) — его мы вносим вручную.</li>
      </ul>
    </div>

    <div className="grid grid-cols-1 gap-4">
      {/* Сканирование */}
      <div className="bg-white border border-gray-200 rounded-lg p-5">
        <div className="flex items-center mb-3">
          <Smartphone className="w-5 h-5 text-blue-700 mr-2" />
          <h3 className="text-xl font-bold text-gray-900">Сканируем:</h3>
        </div>
        <p className="text-sm text-gray-700 leading-relaxed mb-4">
          Сканируем весь товар на торговой точке.
        </p>

        {/* Шаг 1: Перейти в режим сканирования */}
        <ol className="space-y-5 text-lg">
          <li className="flex flex-col">
            <div className="flex items-start">
              <span className="bg-blue-700 text-white text-sm font-bold rounded-full w-7 h-7 flex items-center justify-center shrink-0 mr-3 mt-0.5">
                1
              </span>
              <div>
                <p className="text-gray-800 font-semibold mb-1">
                  Перейдите в режим сканирования
                </p>
                <p className="text-base text-gray-600 leading-snug">
                  Нажмите на иконку <strong>сканера</strong> в правом верхнем углу.
                </p>
              </div>
            </div>
            <div className="mt-4">
              <div className="rounded-lg overflow-hidden border border-gray-200 max-w-[240px] mx-auto">
                <img
                src="/IMG_5159.jpg"
                alt="Перейти в режим сканирования"
                className="w-full h-auto object-contain" />
              </div>
            </div>
          </li>
        </ol>
      </div>

    </div>
  </Page>;

// --- Page 10a: Внесение всех остатков — шаг 2 ---
const AllRemainders2 = () =>
<Page>
    <div className="grid grid-cols-1 gap-4 mb-5">
      <div className="bg-white border border-gray-200 rounded-lg p-5">
        <div className="flex items-center mb-3">
          <Smartphone className="w-5 h-5 text-blue-700 mr-2" />
          <h3 className="text-xl font-bold text-gray-900">Сканируем (продолжение):</h3>
        </div>
        {/* Шаг 2: Выбор режима — ползунок */}
        <div>
          <div className="flex items-start mb-4">
            <span className="bg-blue-700 text-white text-sm font-bold rounded-full w-7 h-7 flex items-center justify-center shrink-0 mr-3 mt-0.5">
              2
            </span>
            <p className="text-lg text-gray-800 font-semibold">
              Переключите ползунок в нужное положение
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {/* Серый — по одной */}
            <div className="flex flex-col">
              <div className="bg-gray-50 border-2 border-gray-300 rounded-lg overflow-hidden w-full aspect-[4/3] mb-3 flex items-center justify-center">
                <img
                src="/IMG_5160.jpg"
                alt="Серый — режим по одной"
                className="w-full h-full object-contain" />
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                <div className="flex items-center mb-2">
                  <span className="inline-block bg-gray-400 w-3 h-3 rounded-full mr-2 shrink-0"></span>
                  <span className="text-sm font-bold text-gray-900 leading-tight">
                    Серый — по одной
                  </span>
                </div>
                <p className="text-sm text-gray-700 leading-snug">
                  Каждое сканирование добавляет <strong>+1 шт.</strong>
                </p>
              </div>
            </div>
            {/* Зелёный — много */}
            <div className="flex flex-col">
              <div className="bg-gray-50 border-2 border-green-300 rounded-lg overflow-hidden w-full aspect-[4/3] mb-3 flex items-center justify-center">
                <img
                src="/IMG_5161.jpg"
                alt="Зелёный — режим большого количества"
                className="w-full h-full object-contain" />
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                <div className="flex items-center mb-2">
                  <span className="inline-block bg-green-500 w-3 h-3 rounded-full mr-2 shrink-0"></span>
                  <span className="text-sm font-bold text-green-900 leading-tight">
                    Зелёный — много за раз
                  </span>
                </div>
                <p className="text-sm text-gray-700 leading-snug">
                  Можно сразу указать <strong>нужное количество</strong>.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-5 bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
            <p className="text-blue-900 text-base leading-relaxed">
              <strong>Обратите внимание:</strong> когда вы начнёте сканировать штрихкоды, ТСД будет либо добавлять по 1 шт. автоматически, либо каждый раз запрашивать у вас точное количество — это напрямую зависит от того, какой из этих режимов вы выбрали.
            </p>
          </div>
        </div>
      </div>

      {/* Вручную */}
      <div className="bg-white border border-gray-200 rounded-lg p-5">
        <div className="flex items-center mb-4">
          <FileText className="w-5 h-5 text-blue-700 mr-2" />
          <h3 className="text-xl font-bold text-gray-900">
            Как вносить товары вручную (те, что не сканируются):
          </h3>
        </div>
        <ul className="space-y-3 text-base">
          <li className="flex items-start flex-col">
            <div className="flex items-start">
              <span className="text-blue-700 mr-2 font-bold">•</span>
              <span className="text-gray-800 font-semibold">
                Расходный материал:
              </span>
            </div>
            <ul className="ml-6 mt-1.5 space-y-1.5 text-sm text-gray-700">
              <li>Кассовая лента — считаем поштучно</li>
              <li>Майка в рулоне и фасовка в рулоне — считаем поштучно на вес</li>
              <li>Стрейч-плёнка — коэффициент от полной (0.5, 0.25 и т.д.)</li>
              <li>Стрічка клейка — так же, как стрейч</li>
            </ul>
          </li>
          <li className="flex items-start flex-col">
            <div className="flex items-start">
              <span className="text-blue-700 mr-2 font-bold">•</span>
              <span className="text-gray-800 font-semibold">Тара:</span>
            </div>
            <ul className="ml-6 mt-1.5 space-y-1.5 text-sm text-gray-700">
              <li>Банановый ящик</li>
              <li>Бочка</li>
              <li>Яичный ящик</li>
              <li>Яичный лоток</li>
              <li>Пивные ящики</li>
              <li>Кеги (если есть разливное пиво)</li>
            </ul>
          </li>
          <li className="flex items-start">
            <span className="text-blue-700 mr-2 font-bold">•</span>
            <span className="text-gray-800">
              <span className="font-semibold">Весовой товар</span> — если есть
              (колбаса, рыба и т.д.)
            </span>
          </li>
          <li className="flex items-start flex-col">
            <div className="flex items-start">
              <span className="text-blue-700 mr-2 font-bold">•</span>
              <span className="text-gray-800 font-semibold">
                Кофейник (если есть на точке):
              </span>
            </div>
            <ul className="ml-6 mt-1.5 space-y-1.5 text-sm text-gray-700">
              <li>Взвешиваем все ингредиенты</li>
              <li>Считаем стаканы, крышки, воду</li>
              <li>Вносим в сканер и дублируем на акт по кофейнику</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </Page>;

// --- Page 11: Синхронизация сканеров ---
const SyncScanners = () =>
<Page pageNumber={11}>
    <h2 className="text-3xl font-bold text-gray-900 mb-5 border-b pb-4">
      6. Синхронизация сканеров
    </h2>

    <p className="text-lg text-gray-700 mb-5 leading-relaxed">
      Перед сверкой нужно синхронизировать данные всех ТСД — передать данные с
      одного в другого и наоборот, а также подтянуть продажи, которые были во
      время написания витрины.
    </p>

    <div className="grid grid-cols-1 gap-4 mb-5">
      {/* На ТСД — выгрузка */}
      <div className="bg-white border border-gray-200 rounded-lg p-5">
        <div className="flex items-center mb-4">
          <Smartphone className="w-5 h-5 text-blue-700 mr-2" />
          <h3 className="text-xl font-bold text-gray-900">На ТСД:</h3>
        </div>
        <ol className="space-y-4 text-lg">
          <li className="flex">
            <span className="font-bold text-blue-700 w-6 shrink-0">1.</span>
            <span className="text-gray-800">
              Нажмите <strong className="font-semibold">«Выгрузить»</strong> —
              сначала на одном ТСД, потом на другом
            </span>
          </li>
        </ol>
      </div>

      {/* На компьютере */}
      <div className="bg-white border border-gray-200 rounded-lg p-5">
        <div className="flex items-center mb-4">
          <Monitor className="w-5 h-5 text-blue-700 mr-2" />
          <h3 className="text-xl font-bold text-gray-900">На компьютере:</h3>
        </div>
        <ol className="space-y-4 text-lg">
          <li className="flex">
            <span className="font-bold text-blue-700 w-6 shrink-0">3.</span>
            <span className="text-gray-800">
              Нажмите{' '}
              <kbd className="px-1.5 py-0.5 bg-gray-100 border border-gray-300 rounded text-sm font-mono font-bold text-gray-700">
                F8
              </kbd>
            </span>
          </li>
          <li className="flex">
            <span className="font-bold text-blue-700 w-6 shrink-0">3.</span>
            <span className="text-gray-800">
              Выберите{' '}
              <strong className="font-semibold">
                Доп. функции → Инвентаризация
              </strong>
            </span>
          </li>
          <li className="flex">
            <span className="font-bold text-blue-700 w-6 shrink-0">4.</span>
            <span className="text-gray-800">
              Введите пароль:{' '}
              <strong className="font-semibold text-blue-700">4459</strong>
            </span>
          </li>
          <li className="flex">
            <span className="font-bold text-blue-700 w-6 shrink-0">5.</span>
            <span className="text-gray-800">
              Выберите сегодняшнюю дату переучёта
            </span>
          </li>
          <li className="flex">
            <span className="font-bold text-blue-700 w-6 shrink-0">6.</span>
            <span className="text-gray-800">
              В другой вкладке выберите склад вашей точки
            </span>
          </li>
          <li className="flex">
            <span className="font-bold text-blue-700 w-6 shrink-0">7.</span>
            <span className="text-gray-800">
              Нажмите{' '}
              <strong className="font-semibold">«Загрузить с ТСД»</strong>
            </span>
          </li>
          <li className="flex">
            <span className="font-bold text-blue-700 w-6 shrink-0">8.</span>
            <span className="text-gray-800">
              Нажмите{' '}
              <strong className="font-semibold">«Выгрузить для ТСД»</strong> —
              появится код БТ
            </span>
          </li>
        </ol>
      </div>
    </div>
  </Page>;

// --- Page 12: Синхронизация (продолжение) ---
const SyncScanners2 = () =>
<Page pageNumber={12}>
    {/* На ТСД — загрузка */}
    <div className="bg-white border border-gray-200 rounded-lg p-5 mb-5">
      <div className="flex items-center mb-4">
        <Smartphone className="w-5 h-5 text-blue-700 mr-2" />
        <h3 className="text-xl font-bold text-gray-900">На ТСД:</h3>
      </div>
      <ol className="space-y-4 text-lg">
        <li className="flex">
          <span className="font-bold text-blue-700 w-6 shrink-0">9.</span>
          <span className="text-gray-800">
            Нажмите <strong className="font-semibold">«Загрузить»</strong> и
            введите код БТ, который появился на шаге 8
          </span>
        </li>
      </ol>
    </div>

    <div className="border-l-4 border-amber-500 bg-amber-50 p-4 rounded-r-lg flex items-start mb-5">
      <AlertTriangle className="w-5 h-5 text-amber-500 mr-3 shrink-0 mt-0.5" />
      <div>
        <h4 className="font-bold text-amber-900 mb-0.5">Важно</h4>
        <p className="text-amber-800 text-base">
          При загрузке и выгрузке с ТСД{' '}
          <strong className="font-bold">должен быть включен интернет</strong>.
        </p>
      </div>
    </div>

    {/* QR-код видео */}
    <div className="flex justify-center">
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 flex flex-col items-center text-center w-60">
        <QRCodeSVG value="https://inv-manual.ru/video/06-sync-scanners" size={56} level="M" className="mb-2" />
        <span className="text-base font-bold text-gray-800 mb-1">
          🎬 Видео-инструкция
        </span>
        <span className="text-sm text-gray-500">
          Отсканируйте QR-код, чтобы посмотреть видео процесса синхронизации
        </span>
      </div>
    </div>
  </Page>;

// --- Page 13: Сверка — пересчёт расхождений ---
const Verification = () =>
<Page pageNumber={13}>
    <h2 className="text-3xl font-bold text-gray-900 mb-5 border-b pb-4">
      7. Сверка — пересчёт расхождений
    </h2>

    <p className="text-lg text-gray-700 mb-5 leading-relaxed">
      В процессе внесения остатков могли быть ошибки — что-то пропустили, где-то
      неправильно указали количество. Сверка даёт возможность перепроверить себя
      и исправить.
    </p>

    <div className="mb-6">
      <h3 className="text-xl font-bold text-blue-700 mb-3 flex items-center">
        <div className="w-2 h-6 bg-blue-700 mr-3 rounded-sm"></div>
        Как проходит сверка
      </h3>
      <p className="text-base text-gray-700 mb-4 leading-relaxed">
        Идёте по «коднику» в ТСД и смотрите на позиции товара. Ошибки подсвечены
        цветами:
      </p>
      <ScreenshotSteps
      square
      steps={[
      {
        step: 'Скриншот',
        label: 'Не хватает'
      },
      {
        step: 'Скриншот',
        label: 'Плюсует'
      },
      {
        step: 'Скриншот',
        label: 'Сошлось'
      }]
      } />
    
      <p className="text-base text-gray-700 leading-relaxed">
        Пересчитываем весь товар с расхождениями и исправляем ошибки.
      </p>
    </div>
  </Page>;

// --- Page 14: Сверка — исправление ошибок ---
const Verification2 = () =>
<Page pageNumber={14}>
    {/* Как исправить если не хватает */}
    <div className="mb-8">
      <h3 className="text-xl font-bold text-blue-700 mb-3 flex items-center">
        <div className="w-2 h-6 bg-blue-700 mr-3 rounded-sm"></div>
        Как исправить, если не хватает (жёлтый)
      </h3>
      <p className="text-sm text-gray-600 mb-3">
        Пересчитайте товар на полке. Если количество верное — оставьте как есть.
        Если ошиблись при внесении — исправьте количество.
      </p>
      <ScreenshotSteps
      steps={[
      {
        step: 'Шаг 1',
        label: 'Найдите жёлтую позицию'
      },
      {
        step: 'Шаг 2',
        label: 'Пересчитайте товар'
      },
      {
        step: 'Шаг 3',
        label: 'Исправьте количество'
      }]
      } />
    
    </div>

    {/* Как исправить если плюсует */}
    <div className="mb-8">
      <h3 className="text-xl font-bold text-blue-700 mb-3 flex items-center">
        <div className="w-2 h-6 bg-blue-700 mr-3 rounded-sm"></div>
        Как исправить, если плюсует (синий)
      </h3>
      <p className="text-sm text-gray-600 mb-3">
        Пересчитайте товар на полке. Если количество верное — оставьте. Если
        внесли лишнее — уменьшите количество.
      </p>
      <ScreenshotSteps
      steps={[
      {
        step: 'Шаг 1',
        label: 'Найдите синюю позицию'
      },
      {
        step: 'Шаг 2',
        label: 'Пересчитайте товар'
      },
      {
        step: 'Шаг 3',
        label: 'Уменьшите количество'
      }]
      } />
    
    </div>
  </Page>;

// --- Page 15: Сверка — важно + видео ---
const Verification3 = () =>
<Page pageNumber={15}>
    <div className="border-l-4 border-amber-500 bg-amber-50 p-5 rounded-r-lg flex items-start mb-6">
      <AlertTriangle className="w-5 h-5 text-amber-500 mr-3 shrink-0 mt-0.5" />
      <div>
        <h4 className="font-bold text-amber-900 mb-1">Очень важно</h4>
        <p className="text-amber-800 text-base leading-relaxed">
          Внимательно проверяйте расходные материалы, весовой товар и кофейник —
          на сверке они почти никогда не сходятся с первого раза. Уделите им
          особое внимание при внесении остатков.
        </p>
      </div>
    </div>

    {/* QR-код видео */}
    <div className="flex justify-center">
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 flex flex-col items-center text-center w-60">
        <QRCodeSVG value="https://inv-manual.ru/video/07-verification" size={56} level="M" className="mb-2" />
        <span className="text-base font-bold text-gray-800 mb-1">
          🎬 Видео-инструкция
        </span>
        <span className="text-sm text-gray-500">
          Отсканируйте QR-код, чтобы посмотреть видео процесса сверки
        </span>
      </div>
    </div>
  </Page>;

// --- Page 16: Выгрузка данных и закрытие инвентаризации ---
const DataExport = () =>
<Page pageNumber={16}>
    <h2 className="text-3xl font-bold text-gray-900 mb-5 border-b pb-4">
      8. Выгрузка данных, закрытие инвентаризации и заполнение актов
    </h2>

    <p className="text-lg text-gray-700 mb-5 leading-relaxed">
      После сверки нужно выгрузить данные с ТСД, проверить отчёт и закрыть
      инвентаризацию.
    </p>

    <div className="grid grid-cols-1 gap-4 mb-5">
      {/* На ТСД */}
      <div className="bg-white border border-gray-200 rounded-lg p-5">
        <div className="flex items-center mb-4">
          <Smartphone className="w-5 h-5 text-blue-700 mr-2" />
          <h3 className="text-xl font-bold text-gray-900">На ТСД:</h3>
        </div>
        <ol className="space-y-4 text-lg">
          <li className="flex">
            <span className="font-bold text-blue-700 w-6 shrink-0">1.</span>
            <span className="text-gray-800">
              На ТСД, где была сверка, нажмите{' '}
              <strong className="font-semibold">«Выгрузить»</strong>
            </span>
          </li>
        </ol>
      </div>

      {/* На компьютере */}
      <div className="bg-white border border-gray-200 rounded-lg p-5">
        <div className="flex items-center mb-4">
          <Monitor className="w-5 h-5 text-blue-700 mr-2" />
          <h3 className="text-xl font-bold text-gray-900">На компьютере:</h3>
        </div>
        <ol className="space-y-4 text-lg">
          <li className="flex">
            <span className="font-bold text-blue-700 w-6 shrink-0">2.</span>
            <span className="text-gray-800">
              Нажмите{' '}
              <kbd className="px-1.5 py-0.5 bg-gray-100 border border-gray-300 rounded text-sm font-mono font-bold text-gray-700">
                F8
              </kbd>
            </span>
          </li>
          <li className="flex">
            <span className="font-bold text-blue-700 w-6 shrink-0">3.</span>
            <span className="text-gray-800">
              Выберите{' '}
              <strong className="font-semibold">
                Доп. функции → Инвентаризация
              </strong>
            </span>
          </li>
          <li className="flex">
            <span className="font-bold text-blue-700 w-6 shrink-0">4.</span>
            <span className="text-gray-800">
              Введите пароль:{' '}
              <strong className="font-semibold text-blue-700">4459</strong>
            </span>
          </li>
          <li className="flex">
            <span className="font-bold text-blue-700 w-6 shrink-0">5.</span>
            <span className="text-gray-800">
              Выберите сегодняшнюю дату переучёта
            </span>
          </li>
          <li className="flex">
            <span className="font-bold text-blue-700 w-6 shrink-0">6.</span>
            <span className="text-gray-800">
              В другой вкладке выберите склад вашей точки
            </span>
          </li>
          <li className="flex">
            <span className="font-bold text-blue-700 w-6 shrink-0">7.</span>
            <span className="text-gray-800">
              Нажмите{' '}
              <strong className="font-semibold">«Загрузить с ТСД»</strong>
            </span>
          </li>
          <li className="flex">
            <span className="font-bold text-blue-700 w-6 shrink-0">8.</span>
            <span className="text-gray-800">
              Зайдите в{' '}
              <strong className="font-semibold">отчёт расхождений</strong> и
              проверьте, что сверка подгрузилась
            </span>
          </li>
          <li className="flex">
            <span className="font-bold text-blue-700 w-6 shrink-0">9.</span>
            <span className="text-gray-800">
              Нажмите{' '}
              <strong className="font-semibold">
                «Закрытие инвентаризации»
              </strong>
            </span>
          </li>
        </ol>
      </div>
    </div>
  </Page>;

// --- Page 17: Заполнение актов ---
const FillActs = () =>
<Page pageNumber={17}>
    <h3 className="text-2xl font-bold text-gray-900 mb-6">Заполнение актов</h3>

    {/* Акт инвентаризации */}
    <div className="mb-8">
      <h3 className="text-xl font-bold text-blue-700 mb-3 flex items-center">
        <div className="w-2 h-6 bg-blue-700 mr-3 rounded-sm"></div>
        Акт инвентаризации
      </h3>
      <p className="text-base text-gray-700 mb-4 leading-relaxed">
        Заполняем бланк акта инвентаризации: пишем название ТТ, дату, купюры
        дублируем с ТСД, указываем кто сдаёт и принимает смену, расписываемся.
      </p>
      <div className="flex justify-center">
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 flex flex-col items-center text-center w-60">
        <QRCodeSVG value="https://inv-manual.ru/video/08-inventory-act" size={56} level="M" className="mb-2" />
          <span className="text-base font-bold text-gray-800 mb-1">
            🎬 Видео-инструкция
          </span>
          <span className="text-sm text-gray-500">
            Как заполнять акт инвентаризации
          </span>
        </div>
      </div>
    </div>

    {/* Акт кофейника */}
    <div className="mb-8">
      <h3 className="text-xl font-bold text-blue-700 mb-3 flex items-center">
        <div className="w-2 h-6 bg-blue-700 mr-3 rounded-sm"></div>
        Акт кофейника (если есть на точке)
      </h3>
      <p className="text-base text-gray-700 mb-4 leading-relaxed">
        Если на точке есть кофемашина — дублируем все остатки по кофейнику в акт
        с ТСД, снимаем показания счётчиков, пишем кто сдаёт и принимает смену,
        расписываемся.
      </p>
      <div className="flex justify-center">
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 flex flex-col items-center text-center w-60">
        <QRCodeSVG value="https://inv-manual.ru/video/08-coffee-act" size={56} level="M" className="mb-2" />
          <span className="text-base font-bold text-gray-800 mb-1">
            🎬 Видео-инструкция
          </span>
          <span className="text-sm text-gray-500">
            Как заполнять акт кофейника
          </span>
        </div>
      </div>
    </div>
  </Page>;

// --- Последняя страница: Контакты ---
const Contacts = () =>
<Page pageNumber={18}>
    <div className="flex flex-col items-center justify-center flex-grow text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">
        Контакты для помощи
      </h2>
      <p className="text-lg text-gray-600 mb-10">
        По вопросам всех процессов переучёта
      </p>
      <div className="space-y-6">
        <div>
          <p className="text-xl font-bold text-gray-900">Артем</p>
          <p className="text-lg text-blue-700 font-medium">063 978 7798</p>
        </div>
        <div>
          <p className="text-xl font-bold text-gray-900">Алексей</p>
          <p className="text-lg text-blue-700 font-medium">073 581 0157</p>
        </div>
      </div>
    </div>
  </Page>;

// --- Main App Component ---
export function App() {
  return (
    <div className="min-h-screen bg-gray-200">
      {/* Print Instructions Banner (Screen Only) */}
      <div className="no-print bg-blue-700 text-white p-4 text-center shadow-md sticky top-0 z-10 flex justify-center items-center gap-3">
        <FileText className="w-5 h-5" />
        <span className="font-medium">
          Предпросмотр документа. Нажмите{' '}
          <kbd className="bg-blue-800 px-2 py-1 rounded text-sm mx-1">
            Ctrl/Cmd + P
          </kbd>{' '}
          для печати в PDF.
        </span>
      </div>

      {/* Document Pages */}
      <div className="document-container">
        <TitlePage />
        <TableOfContents />
        <GeneralProvisions />
        <ProcessFlowchart />
        <Step1Detail />
        <Step1DetailCont />
        <Step1DetailCont2 />
        <Step1DetailCont2b />
        <Step1DetailCont3 />
        <Step1DetailCont3b />
        <Step1Detail2 />
        <Step1Detail2a />
        <Step1Detail2b />
        <Step1Detail2c />
        <Step1Detail2c2 />
        <Step1Detail2c3 />
        <Step1Detail2c4 />
        <Step1Detail2c5 />
        <Step1Detail2c6 />
        <WritingShowcase />
        <WritingShowcase2 />
        <WritingShowcase3 />
        <ShiftClosing />
        <ShiftClosing1b />
        <ShiftClosing1c />
        <ShiftClosing2 />
        <ShiftClosing2b />
        <ShiftClosing3 />
        <ShiftClosing3b />
        <ShiftClosing3c />
        <ShiftClosing4 />
        <ShiftClosing4b />
        <ShiftClosing4c />
        <ShiftClosing4d />
        <ShiftClosing4e />
        <AllRemainders />
        <AllRemainders2 />
        <SyncScanners />
        <SyncScanners2 />
        <Verification />
        <Verification2 />
        <Verification3 />
        <DataExport />
        <FillActs />
        <Contacts />
      </div>
    </div>);

}