import React, { Component } from 'react';
import {
  FileText,
  CheckCircle2,
  ArrowDown,
  AlertTriangle,
  Monitor,
  Smartphone,
  QrCode,
  Video,
  ClipboardList } from
'lucide-react';
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
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 flex flex-col items-center text-center w-64">
        <QrCode className="w-20 h-20 text-gray-400 mb-3" />
        <span className="text-base font-bold text-gray-800 mb-1">
          🎬 Видео-инструкция
        </span>
        <span className="text-sm text-gray-500">
          Отсканируйте QR-код, чтобы посмотреть видео процесса создания точки на
          ТСД
        </span>
      </div>
    </div>

    <div className="border-l-4 border-amber-500 bg-amber-50 p-3 rounded-r-lg flex items-start">
      <AlertTriangle className="w-5 h-5 text-amber-500 mr-3 shrink-0 mt-0.5" />
      <div>
        <h4 className="font-bold text-amber-900 mb-0.5 text-sm">Важно</h4>
        <p className="text-amber-800 text-sm">
          При создании точки на ТСД и на кассе{' '}
          <strong className="font-bold">должен быть интернет</strong>.
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
      начала прайса, второй с конца. Двигаясь навстречу друг другу, вы
      гарантированно охватите все позиции.
    </p>

    {/* Добавить одну позицию */}
    <div className="mb-8 mt-2">
      <h3 className="text-xl font-bold text-blue-700 mb-3 flex items-center">
        <div className="w-2 h-6 bg-blue-700 mr-3 rounded-sm"></div>
        Как добавить одну позицию
      </h3>
      <p className="text-sm text-gray-600 mb-3">
        Идёте по прайсу в ТСД и добавляете каждую позицию, которая есть на
        витрине. Одно нажатие — одна штука.
      </p>
      <div className="flex gap-5 justify-center">
        {/* Шаг 1 — реальный скриншот */}
        <div className="flex flex-col items-center flex-1 max-w-[160px]">
          <div className="bg-gray-100 border-2 border-gray-200 rounded-xl flex flex-col items-center justify-center w-full overflow-hidden mb-2 aspect-[9/16]">
            <img
            src="/IMG_5106.jpg"
            alt="Найдите позицию в прайсе"
            className="w-full h-full object-cover" />
          
          </div>
          <span className="text-xs text-gray-500 text-center leading-snug">
            Найдите позицию в прайсе
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
            alt="Найдите позицию в прайсе"
            className="w-full h-full object-cover" />
          
          </div>
          <span className="text-xs text-gray-500 text-center leading-snug">
            Найдите позицию в прайсе
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

    {/* Обновить прайс */}
    <div className="mb-8">
      <h3 className="text-xl font-bold text-blue-700 mb-3 flex items-center">
        <div className="w-2 h-6 bg-blue-700 mr-3 rounded-sm"></div>
        Как обновить прайс
      </h3>
      <p className="text-sm text-gray-600 mb-3">
        После добавления позиций они не сразу видны в списке — это нормально.
        Обновите прайс, чтобы проверить себя.
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
            Позиция добавлена, но ещё не отображается в списке
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
            Проверьте внесённые позиции
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
    <div className="flex justify-center mt-auto">
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 flex flex-col items-center text-center w-60">
        <QrCode className="w-14 h-14 text-gray-400 mb-2" />
        <span className="text-base font-bold text-gray-800 mb-1">
          🎬 Видео-инструкция
        </span>
        <span className="text-sm text-gray-500">
          Отсканируйте QR-код, чтобы посмотреть видео процесса написания витрины
        </span>
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

    <div className="grid grid-cols-1 gap-4 mb-5">
      {/* На компьютере */}
      <div className="bg-white border border-gray-200 rounded-lg p-5">
        <div className="flex items-center mb-4">
          <Monitor className="w-5 h-5 text-blue-700 mr-2" />
          <h3 className="text-xl font-bold text-gray-900">На компьютере:</h3>
        </div>
        <ol className="space-y-4 text-lg">
          <li className="flex">
            <span className="font-bold text-blue-700 w-6 shrink-0">1.</span>
            <span className="text-gray-800">
              Снимаем <strong className="font-semibold">Х-отчёт</strong>
            </span>
          </li>
          <li className="flex">
            <span className="font-bold text-blue-700 w-6 shrink-0">2.</span>
            <span className="text-gray-800">Закрываем смену</span>
          </li>
        </ol>
      </div>

      {/* Пересчёт денег + ТСД */}
      <div className="bg-white border border-gray-200 rounded-lg p-5">
        <div className="flex items-center mb-4">
          <Smartphone className="w-5 h-5 text-blue-700 mr-2" />
          <h3 className="text-xl font-bold text-gray-900">
            Пересчёт денег + ТСД:
          </h3>
        </div>
        <ol className="space-y-4 text-lg">
          <li className="flex">
            <span className="font-bold text-blue-700 w-6 shrink-0">3.</span>
            <span className="text-gray-800">
              Пересчитываем деньги по купюрам и сразу вносим сумму в ТСД
            </span>
          </li>
        </ol>
      </div>

      {/* На компьютере — внесение/изъятие */}
      <div className="bg-white border border-gray-200 rounded-lg p-5">
        <div className="flex items-center mb-4">
          <Monitor className="w-5 h-5 text-blue-700 mr-2" />
          <h3 className="text-xl font-bold text-gray-900">На компьютере:</h3>
        </div>
        <ol className="space-y-4 text-lg">
          <li className="flex flex-col">
            <div className="flex">
              <span className="font-bold text-blue-700 w-6 shrink-0">4.</span>
              <span className="text-gray-800">
                Делаем внесение или изъятие:
              </span>
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

    <div className="border-l-4 border-amber-500 bg-amber-50 p-4 rounded-r-lg flex items-start mb-5">
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

    {/* QR-код видео */}
    <div className="flex justify-center mt-auto">
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 flex flex-col items-center text-center w-60">
        <QrCode className="w-14 h-14 text-gray-400 mb-2" />
        <span className="text-base font-bold text-gray-800 mb-1">
          🎬 Видео-инструкция
        </span>
        <span className="text-sm text-gray-500">
          Отсканируйте QR-код, чтобы посмотреть видео процесса закрытия смены
        </span>
      </div>
    </div>
  </Page>;

// --- Page 10: Внесение всех остатков ---
const AllRemainders = () =>
<Page pageNumber={10}>
    <h2 className="text-3xl font-bold text-gray-900 mb-5 border-b pb-4">
      5. Внесение всех остатков
    </h2>

    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
      Нужно внести в ТСД весь товар, который есть на торговой точке.
    </p>

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
        <div className="mb-5 flex gap-4 items-start">
          <div className="flex-shrink-0">
            <div className="bg-gray-100 border-2 border-gray-200 rounded-xl overflow-hidden w-[120px] aspect-[9/16]">
              <img
              src="/IMG_5159.jpg"
              alt="Перейти в режим сканирования"
              className="w-full h-full object-cover" />
            
            </div>
          </div>
          <div className="flex-1 pt-1">
            <div className="flex items-start mb-1">
              <span className="bg-blue-700 text-white text-sm font-bold rounded-full w-7 h-7 flex items-center justify-center shrink-0 mr-2">
                1
              </span>
              <p className="text-base text-gray-800 pt-0.5 font-semibold">
                Перейдите в режим сканирования
              </p>
            </div>
            <p className="text-sm text-gray-600 ml-9">
              Нажмите на иконку <strong>QR-кода</strong> в правом верхнем углу.
            </p>
          </div>
        </div>

        {/* Шаг 2: Выбор режима — ползунок */}
        <div>
          <div className="flex items-start mb-3">
            <span className="bg-blue-700 text-white text-sm font-bold rounded-full w-7 h-7 flex items-center justify-center shrink-0 mr-2">
              2
            </span>
            <p className="text-base text-gray-800 pt-0.5 font-semibold">
              Переключите ползунок в нужное положение
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {/* Зелёный — много */}
            <div className="flex flex-col">
              <div className="bg-gray-50 border-2 border-green-300 rounded-lg overflow-hidden w-full aspect-[4/3] mb-2 flex items-center justify-center">
                <img
                src="/IMG_5161.jpg"
                alt="Зелёный — режим большого количества"
                className="w-full h-full object-contain" />
              
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-2">
                <div className="flex items-center mb-1">
                  <span className="inline-block bg-green-500 w-3 h-3 rounded-full mr-2"></span>
                  <span className="text-sm font-bold text-green-900">
                    Зелёный — много за раз
                  </span>
                </div>
                <p className="text-xs text-gray-700 leading-snug">
                  Можно сразу указать <strong>нужное количество</strong>.
                </p>
              </div>
            </div>
            {/* Серый — по одной */}
            <div className="flex flex-col">
              <div className="bg-gray-50 border-2 border-gray-300 rounded-lg overflow-hidden w-full aspect-[4/3] mb-2 flex items-center justify-center">
                <img
                src="/IMG_5160.jpg"
                alt="Серый — режим по одной"
                className="w-full h-full object-contain" />
              
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-2">
                <div className="flex items-center mb-1">
                  <span className="inline-block bg-gray-400 w-3 h-3 rounded-full mr-2"></span>
                  <span className="text-sm font-bold text-gray-900">
                    Серый — по одной
                  </span>
                </div>
                <p className="text-xs text-gray-700 leading-snug">
                  Каждое сканирование добавляет <strong>+1 шт.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Page>;

// --- Page 10b: Внесение всех остатков — вручную ---
const AllRemaindersManual = () =>
<Page>
    <h2 className="text-2xl font-bold text-gray-900 mb-5 border-b pb-3">
      5. Внесение всех остатков{' '}
      <span className="text-gray-500 font-medium">— вручную</span>
    </h2>

    {/* Вручную */}
    <div className="bg-white border border-gray-200 rounded-lg p-5">
      <div className="flex items-center mb-4">
        <FileText className="w-5 h-5 text-blue-700 mr-2" />
        <h3 className="text-xl font-bold text-gray-900">
          Вносим вручную то, что не сканируется:
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
        <QrCode className="w-14 h-14 text-gray-400 mb-2" />
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
        Идёте по прайсу в ТСД и смотрите на позиции товара. Ошибки подсвечены
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
        <QrCode className="w-14 h-14 text-gray-400 mb-2" />
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
          <QrCode className="w-14 h-14 text-gray-400 mb-2" />
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
          <QrCode className="w-14 h-14 text-gray-400 mb-2" />
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
        <AllRemainders />
        <AllRemaindersManual />
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