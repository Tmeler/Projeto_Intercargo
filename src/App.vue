<template>
  <div>
    <div class="bg-gray-900">
      <header class="absolute inset-x-0 top-0 z-50">
        <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div class="flex lg:flex-1">
            <a href="#" class="-m-1.5 p-1.5">
              <img class="h-12 w-auto" src="/logo.png" alt="logo" />
            </a>
          </div>
          <div class="flex lg:hidden">
            <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
              @click="mobileMenuOpen = true">
              <Bars3Icon class="h-6 w-6 stroke-black" aria-hidden="true" />
            </button>
          </div>
          <div class="hidden lg:flex lg:gap-x-10">
            <a v-for="item in navigation" :key="item.name" href="#" @click="goTo(item.href)"
              class="text-lg font-semibold leading-6 text-white p-2 rounded-3xl hover:bg-gray-50/10">{{ item.name }}</a>
          </div>
          <div class="hidden lg:flex lg:flex-1 lg:justify-end ">
            <div class="hover:bg-gray-500/10 p-2 rounded-3xl">
              <a href="https://ssw.inf.br/2/rastreamento?" target="_blank"
                class="text-lg font-semibold leading-6 text-white">Rastrear encomenda <span
                  aria-hidden="true">&rarr;</span></a>
            </div>
          </div>
        </nav>
        <Dialog class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
          <div class="fixed inset-0 z-50" />
          <DialogPanel
            class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gradient-to-r from-orange-400 to-red-400 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
            <div class="flex items-center justify-between">
              <a href="#" class="-m-1.5 p-1.5">
                <img class="h-12 w-auto" src="/logo.png" alt="" />
              </a>
              <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-400" @click="mobileMenuOpen = false">
                <XMarkIcon class="h-6 w-6 stroke-black" aria-hidden="true" />
              </button>
            </div>
            <div class="mt-6 flow-root">
              <div class="-my-6 divide-y divide-gray-500/25">
                <div class="space-y-2 py-6">
                  <a v-for="item in navigation" :key="item.name" @click="goTo(item.href)"
                    class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50/20">{{
                      item.name }}</a>
                </div>
                <div class="py-6">
                  <a href="#"
                    class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-50/20">Log
                    in</a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
        <!-- Meta tags básicas -->
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Intercargo Transportes - Transporte de cargas</title>
        <meta name="description"
          content="Transporte de cargas entre São Paulo e Joinville, com eficiência e pontualidade. Serviços de coleta e entrega para todo o Brasil." />
        <meta name="keywords"
          content="transporte, cargas, logística, coleta, entrega, transportadora, São Paulo, Joinville" />
        <meta name="author" content="Intercargo Transportes" />
        <meta name="robots" content="index, follow" />

        <!-- Open Graph (para compartilhamento em redes sociais) -->
        <meta property="og:title" content="Intercargo Transportes - Transporte de cargas" />
        <meta property="og:description"
          content="Serviço de transporte de cargas com agilidade e eficiência, operando em todo o Brasil." />
        <meta property="og:image" content="https://intercargo.com/imagem-de-compartilhamento.jpg" />
        <meta property="og:url" content="https://intercargo.com" />
        <meta property="og:type" content="website" />

        <!-- Twitter Cards -->
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Intercargo Transportes - Transporte de cargas" />
        <meta name="twitter:description"
          content="Transporte de cargas com excelência, cobrindo São Paulo, Joinville e muito mais." />
        <meta name="twitter:image" content="https://intercargo.com/imagem-de-compartilhamento.jpg" />

        <!-- Favicon -->
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </header>

      <div class="relative isolate overflow-hidden pt-14 pb-12" id="home">
        <img src="/hero-background.jpeg" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover" />
        <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div class="text-center">
            <h1 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">Entregando confiança a cada quilômetro
            </h1>
            <p class="mt-6 text-lg leading-8 text-gray-300">Nosso compromisso com a excelência e a confiança impulsiona
              a cada entrega. Descubra como podemos transformar suas expectativas em realidade.</p>
            <div class="mt-10 flex items-center justify-center gap-x-6 ">
              <div
                class="flex flex-row gap-1 rounded-full hover:bg-white/10 px-9 py-6 text-xl leading-6 animate-bounce-low "
                @click="goTo('#about')">
                <a href="#" class="text-sm font-semibold leading-6 text-white">Saiba mais</a>
                <p class="text-white">↓</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-white">
      <div class="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div
          class="relative isolate overflow-hidden bg-[url(/delivery-boy.png)] ring-1 ring-white/10 px-6 pt-16 shadow-2xl rounded-3xl mx-5 sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0 ">
          <div class="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">Procurando sua encomenda?</h2>
            <p class="mt-6 text-lg leading-8 text-white">Clique no link abaixo para ser redirecionado para a página de
              rastreio da sua encomenda.</p>
            <div class="mt-10 flex items-center justify-center gap-x-6 lg:justify-start p-4">
              <a href="https://ssw.inf.br/2/rastreamento?" target="_blank"
                class="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Rastrear
                encomenda</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="overflow-hidden bg-white py-32" id="about">
      <div class="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
        <div
          class="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
          <div class="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
            <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Sobre nós</h2>
            <p class="mt-6 text-base leading-8 text-gray-600 text-justify">A Intercargo tem uma história sólida no setor
              logístico, estabelecida em 1980 para fornecer serviços de transporte para os produtos da Ciser. Desde
              então, evoluiu para atender uma ampla gama de clientes em diversos segmentos. <br><br>Especializada em
              operações fracionadas, a Intercargo facilita o transporte de mercadorias entre Joinville e São Paulo,
              atendendo não apenas a capital, mas também sua região metropolitana.</p>
          </div>
          <div class="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
            <div class="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
              <img src="/delivery-man.jpg" alt=""
                class="aspect-[16/8] w-[48rem] max-w-none rounded-2xl bg-gray-50 object-cover block ml-8" />
            </div>
            <div
              class="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8 mr-8">
              <div class="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                <img src="/delivery-truck.jpg" alt=""
                  class="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover" />
              </div>
              <div class="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                <img src="/warehouse-2.jpg" alt=""
                  class="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover" />
              </div>
              <div class="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                <img src="/warehouse.jpg" alt=""
                  class="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-white sm:py-24">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center mb-8">Uma empresa do Grupo
          HCS</h2>
        <div class="flex justify-center">
          <h2 class="text-center text-lg leading-8 text-gray-900 max-w-5xl">A Intercargo Transportes Ltda é parte do
            Grupo HCS, com uma história desde 1881. Inicialmente um pequeno negócio que comercializava produtos
            importados e exportava produtos nativos, o grupo cresceu ao longo dos anos.</h2>
        </div>
        <div
          class="mx-auto mt-16 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-8 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-8">
          <img v-for="(logo, index) in logos" :key="index" :src="logo.src" :alt="logo.alt"
            class="col-span-2 max-h-32 w-full object-contain lg:col-span-1" />
        </div>
        <div class="mt-10 border-b-2 border-gray-900/10"></div>
      </div>
    </div>

    <div class="overflow-hidden bg-white py-24 sm:py-32" id="services">
      <div class="mx-auto max-w-7xl md:px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
          <div class="px-6 lg:px-0 lg:pr-4 lg:pt-4">
            <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
              <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Como podemos te ajudar</p>
              <p class="mt-6 text-lg leading-8 text-gray-600 text-justify">Sua parceira logística confiável quando o
                assunto é velocidade e segurança. Atuamos em todo o estado de Santa Catarina e São Paulo. Com uma frota
                diversificada e modernos centros de distribuição em Joinville e Guarulhos, oferecemos soluções
                abrangentes para atender às diversas necessidades de transporte.</p>
              <dl class="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                <div v-for="feature in features" :key="feature.name" class="relative pl-9">
                  <dt class="inline font-semibold text-gray-900">
                    <CheckIcon class="absolute left-1 top-1 h-5 w-5 text-red-500" aria-hidden="true" />
                    {{ feature.name }}
                  </dt>
                  {{ ' ' }}
                  <dd class="inline">{{ feature.description }}</dd>
                </div>

              </dl>
            </div>
          </div>
          <div class="sm:px-6 pt-14 lg:px-0">
            <div
              class="relative isolate overflow-hidden px-6 py-24 sm:mx-auto sm:max-w-2xl sm:rounded-3xl lg:mx-0 lg:max-w-none shadow-2xl">
              <img src="/map.png" alt="map">
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="testimonials" class="bg-white py-24">
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center mb-8">O que falam sobre nós
      </h2>
      <div class="mx-auto max-w-7xl px-6 lg:px-8 pt-10">
        <div class="mx-auto grid max-w-2xl grid-cols-1 lg:max-w-none lg:grid-cols-2 gap-16">
          <div v-for="(testimonial, index) in testimonials" :key="index" class="flex flex-col"
            :class="{ 'lg:pr-8 xl:pr-20': index === 0, 'lg:pl-8 xl:pl-20': index === 1 }">
            <img class="h-15 w-max mb-10" :src="testimonial.logo" :alt="testimonial.alt" />
            <figure class="flex flex-col justify-between">
              <blockquote class="text-lg leading-8 text-gray-900 text-justify" :class="{ 'text-justify': index === 0 }">
                {{ testimonial.quote }}
              </blockquote>
              <figcaption class="mt-10 flex items-center gap-x-6">
                <div>
                  <div class="font-semibold text-gray-900">{{ testimonial.name }}</div>
                  <div class="text-gray-500">{{ testimonial.position }}</div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>

    <div id="contact" class="relative isolate bg-white">
      <div class="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2 mt-28">
        <div class="relative px-6 pt-24 lg:static lg:px-8">
          <div class="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <div
              class="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-white border-r border-gray-900/10 lg:w-1/2">
            </div>
            <h2 class="text-3xl font-bold tracking-tight text-gray-900">Fale com um especialista</h2>
            <p class="mt-6 text-lg leading-8 text-justify text-gray-600">Precisa de orientação personalizada para seus
              envios? Nossa equipe está aqui para ajudar. Entre em contato para discutir suas necessidades de transporte
              e encontrar soluções sob medida. Com especialistas altamente qualificados, estamos prontos para oferecer
              conselhos especializados para otimizar sua logística. Estamos comprometidos em fornecer a você a
              assistência necessária para alcançar seus objetivos de transporte. Entre em contato hoje mesmo e deixe-nos
              ajudá-lo a simplificar sua cadeia de suprimentos.</p>

            <dl class="mt-10 space-y-4 text-base leading-7 text-gray-600">
              <div class="flex gap-x-4">
                <dt class="flex-none">
                  <BuildingOfficeIcon class="h-7 w-6 text-gray-400" aria-hidden="true" />
                </dt>
                <dd>Rua Carlos Frederico Adolfo Schneider, 67 - Bairro: Saguaçu Joinville/SC CEP: 89.221-002</dd>
              </div>
              <div class="flex gap-x-4">
                <dt class="flex-none">
                  <PhoneIcon class="h-7 w-6 text-gray-400" aria-hidden="true" />
                </dt>
                <dd><a class="hover:text-gray-900" href="tel:+1 (555) 234-5678">Telefone: (47) 3441-3755 / (47)
                    3441-3818</a></dd>
              </div>
            </dl>
            <dl class="mt-10 space-y-4 text-base leading-7 text-gray-600">
              <div class="flex gap-x-4">
                <dt class="flex-none">
                  <BuildingOfficeIcon class="h-7 w-6 text-gray-400" aria-hidden="true" />
                </dt>
                <dd>Avenida Justino de Maio, n° 630 - Galpão 3 - Fundos (Bairro: Cidade Industrial Satélite -
                  Guarulhos/SP) / CEP: 07222-000</dd>
              </div>
              <div class="flex gap-x-4">
                <dt class="flex-none">
                  <PhoneIcon class="h-7 w-6 text-gray-400" aria-hidden="true" />
                </dt>
                <dd><a class="hover:text-gray-900" href="tel:+1 (555) 234-5678">Telefone: (11) 96649-0000 / (11)
                    91336-2472</a></dd>
              </div>
            </dl>
          </div>
        </div>

        <form action="#" method="POST" class="px-6 sm:pb-32 lg:px-8 pt-28" id="contact-form">
          <div class="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">

              <!-- Nome -->
              <div class="sm:col-span-2">
                <label for="first-name" class="block text-sm font-semibold leading-6 text-gray-900">Nome</label>
                <div class="mt-2.5">
                  <input type="text" name="first-name" id="first-name" autocomplete="given-name"
                    class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6" />
                </div>
              </div>

              <!-- Email -->
              <div>
                <label for="email" class="block text-sm font-semibold leading-6 text-gray-900">Email</label>
                <div class="mt-2.5">
                  <input type="email" name="email" id="email" autocomplete="email"
                    class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6" />
                </div>
              </div>

              <!-- Telefone -->
              <div>
                <label for="phone-number" class="block text-sm font-semibold leading-6 text-gray-900">Telefone</label>
                <div class="mt-2.5">
                  <input type="tel" name="phone-number" id="phone-number" autocomplete="tel"
                    class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6" />
                </div>
              </div>

              <!-- Assunto -->
              <div class="sm:col-span-2">
                <label for="subject" class="block text-sm font-semibold leading-6 text-gray-900">Assunto</label>
                <div class="mt-2.5">
                  <select name="subject" id="subject" @change="toggleQuotationFields"
                    class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6">
                    <option value="Financeiro">Financeiro</option>
                    <option value="Coleta São Paulo">Coleta São Paulo</option>
                    <option value="Coleta Joinville">Coleta Joinville</option>
                    <option value="SAC Joinville">SAC Joinville</option>
                    <option value="SAC São Paulo">SAC São Paulo</option>
                    <option value="Ouvidoria">Ouvidoria</option>
                    <option value="Cotação">Cotação</option>
                  </select>
                </div>
              </div>

              <!-- Campos adicionais para Cotação -->
              <div id="quotation-fields" v-if="isQuotationVisible" class="sm:col-span-2">
                <label for="transport-type" class="block text-sm font-semibold leading-6 text-gray-900">Tipo de
                  transporte</label>
                <div class="mt-2.5">
                  <select name="transport-type" id="transport-type"
                    class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6">
                    <option value="Fracionado">Carga Fracionada</option>
                    <option value="Fechada">Carga Fechada</option>
                  </select>
                </div>

                <label for="origin-city" class="block text-sm font-semibold leading-6 text-gray-900 mt-4">Cidade
                  Origem</label>
                <div class="mt-2.5">
                  <input type="text" name="origin-city" id="origin-city"
                    class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6" />
                </div>

                <label for="destination-city" class="block text-sm font-semibold leading-6 text-gray-900 mt-4">Cidade
                  Destino</label>
                <div class="mt-2.5">
                  <input type="text" name="destination-city" id="destination-city"
                    class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6" />
                </div>

                <label for="invoice-value" class="block text-sm font-semibold leading-6 text-gray-900 mt-4">Valor da
                  Nota Fiscal</label>
                <div class="mt-2.5">
                  <input type="number" name="invoice-value" id="invoice-value"
                    class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6" />
                </div>

                <label for="weight" class="block text-sm font-semibold leading-6 text-gray-900 mt-4">Peso (KG)</label>
                <div class="mt-2.5">
                  <input type="number" name="weight" id="weight"
                    class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6" />
                </div>

                <label for="quantity"
                  class="block text-sm font-semibold leading-6 text-gray-900 mt-4">Quantidade</label>
                <div class="mt-2.5">
                  <input type="number" name="quantity" id="quantity"
                    class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6" />
                </div>
              </div>

              <!-- Mensagem -->
              <div class="sm:col-span-2">
                <label for="message" class="block text-sm font-semibold leading-6 text-gray-900">Mensagem</label>
                <div class="mt-2.5">
                  <textarea name="message" id="message" rows="4"
                    class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6"></textarea>
                </div>
              </div>
            </div>

            <!-- Botão Enviar -->
            <div class="mt-8 flex justify-end">
              <button type="submit" id="submit-btn"
                class="rounded-md bg-red-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500">Enviar</button>
            </div>
          </div>
        </form>
      </div>
    </div>
    <footer class="bg-white">
      <div
        class="mx-auto max-w-7xl px-6 py-8 mt-12 md:flex md:items-center md:justify-between lg:px-8 border-t border-900/20">
        <div class="mt-8 md:order-1 md:mt-0 w-full flex justify-between items-center">
          <p class="text-left text-sm leading-6 text-gray-500">&copy; {{ year }} Intercargo Transportes. Todos os
            direitos reservados.</p>
          <p class="text-right text-sm leading-6 text-gray-500">
            <a href="https://ciser614474.app.privacycenter.cloud/" class="nav-title" target="_blank">Centro de
              Privacidade</a>
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Dialog, DialogPanel } from '@headlessui/vue';
import { Bars3Icon, XMarkIcon, CheckIcon, BuildingOfficeIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/vue/24/outline';
import VueScrollTo from "vue-scrollto";

export default defineComponent({
  name: 'App',
  components: {
    DialogPanel, XMarkIcon, Dialog, Bars3Icon, CheckIcon,
    BuildingOfficeIcon, PhoneIcon, EnvelopeIcon
  },
  data() {
    return {
      mobileMenuOpen: false,
      year: new Date().getFullYear(),
      isQuotationVisible: false,
      formData: {
        name: '',
        email: '',
        subject: '',
        message: '',
      },
      navigation: [
        { name: 'Início', href: '#home' },
        { name: 'Sobre nós', href: '#about' },
        { name: 'Nossos serviços', href: '#services' },
        { name: 'Depoimentos', href: '#testimonials' },
        { name: 'Contato', href: '#contact' },
      ],
      features: [
        {
          name: 'Frota variada:',
          description: 'Com uma frota variada e equipamentos modernos, estamos preparados para atender a uma ampla gama de necessidades de transporte com eficiência e segurança.',
        },
        {
          name: 'Operação Fracionada:',
          description: 'Oferecemos serviços de transporte fracionado entre Joinville e São Paulo, garantindo entregas rápidas e eficientes para cargas menores, mantendo a qualidade e a pontualidade em cada envio.',
        },
        {
          name: 'Operação de Carga Fechada:',
          description: 'Cobrimos toda a região Sul e Sudeste com nossos serviços de carga fechada, fornecendo soluções abrangentes para envios maiores, com garantia de qualidade e pontualidade em todas as entregas.',
        },
      ],
      logos: [
        { src: "/logos/ciser.png", alt: "Ciser" },
        { src: "/logos/ciser-automotive.png", alt: "Ciser Automotive" },
        { src: "/logos/fcf.png", alt: "FCF" },
        { src: "/logos/hacasa.png", alt: "Hacasa" },
        { src: "/logos/intercargo-transportes.png", alt: "Intercargo Transportes" },
        { src: "/logos/rbe.png", alt: "RBE" },
        { src: "/logos/agropecuaria-parati.png", alt: "Agropecuaria Parati" },
        { src: "/logos/hcs.png", alt: "HCS" }
      ],
      testimonials: [
        {
          logo: "/logos/ciser.png",
          alt: "Ciser",
          quote: "“Quando pensamos em qualidade de serviço de transporte, temos a Intercargo como referência, isso contempla: prazos de entregas acima do padrão de mercado, eficiência de entrega, sac e atendimento com agilidade, satisfação de clientes, qualidade ao manuseio de mercadorias, rastreamento de mercadorias, sistemas integrados, ótima equipe operacional e administrativa, boa estrutura, de fácil negociação comercial e cumprimento de procedimentos exigidos e acordados com o cliente. Para nós da Ciser, é um prazer ter a Intercargo como um parceiro de transportes, possuem uma grande representatividade conosco, sempre com alta qualidade no serviço executado e acima da performance exigida. Aproveito a oportunidade para lhes parabenizar pela excelência dos serviços prestados. O sucesso da empresa tem muito a ver com o atendimento dos parceiros escolhidos com qualidade igual ao da Intercargo, pois cliente satisfeito com sua entrega é o que buscamos sempre, e isso pode ter certeza de que temos com a Intercargo Transportes.",
          name: "Nathane Lorencetti",
          position: "Especialista de Transportes/Decisora de frete"
        },
        {
          logo: "/logos/intercargo-transportes.png",
          alt: "Intercargo Transportes",
          quote: "“Nosso diferencial está na flexibilidade para atender as necessidades dos clientes, com processos ágeis e descomplicados. Oferecemos a agilidade de uma grande transportadora, mas com a confiança e proximidade de uma empresa menor. Esse compromisso com soluções eficientes e personalizadas é algo que nossos clientes sempre elogiam.",
          name: "André Morbis",
          position: "Supervisor de Transportes"
        }
      ],
      addresses: [
        {
          line1: "Rua Carlos Frederico Adolfo Schneider, 67 - Bairro: Saguaçu",
          city: "Joinville",
          state: "SC",
          cep: "89.221-002",
          phone: "(47) 3441-3755 / (47) 3441-3818"
        },
        {
          line1: "Avenida Justino de Maio, n° 630 - Galpão 3 - Fundos",
          line2: "Bairro: Cidade Industrial Satélite",
          city: "Guarulhos",
          state: "SP",
          cep: "07222-000",
          phone: "(11) 96649-0000 / (11) 91336-2472"
        }
      ]
    };
  },
  methods: {
    goTo(element: string) {
      this.mobileMenuOpen = false;
      VueScrollTo.scrollTo(element, 300, { offset: -100 });
    },
    toggleQuotationFields(event: Event) {
      const target = event.target as HTMLSelectElement;
      this.isQuotationVisible = target.value === 'Cotação';
    },
    submitForm() {
      // Enviar dados para o back-end
      fetch('http://localhost:993/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.formData),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Erro ao enviar o formulário');
          }
          return response.text();
        })
        .then((data) => {
          alert('E-mail enviado com sucesso!');
        })
        .catch((error) => {
          alert('Ocorreu um erro: ' + error.message);
        });
    },
  },
});
</script>
<style>
.cc-window {
  z-index: 99999;
}
</style>