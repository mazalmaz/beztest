<template>
 <div>
        <!-- Off-canvas menu for mobile, show/hide based on off-canvas menu state. -->
        <div class="fixed inset-0 flex z-40 md:hidden" role="dialog" aria-modal="true">
            <!--
            Off-canvas menu overlay, show/hide based on off-canvas menu state.
      
            Entering: "transition-opacity ease-linear duration-300"
              From: "opacity-0"
              To: "opacity-100"
            Leaving: "transition-opacity ease-linear duration-300"
              From: "opacity-100"
              To: "opacity-0"
          -->
            <div class="fixed inset-0 bg-gray-600 bg-opacity-75" aria-hidden="true"></div>

            <!--
            Off-canvas menu, show/hide based on off-canvas menu state.
      
            Entering: "transition ease-in-out duration-300 transform"
              From: "-translate-x-full"
              To: "translate-x-0"
            Leaving: "transition ease-in-out duration-300 transform"
              From: "translate-x-0"
              To: "-translate-x-full"
          -->
            <div class="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-indigo-700">
                <!--
              Close button, show/hide based on off-canvas menu state.
      
              Entering: "ease-in-out duration-300"
                From: "opacity-0"
                To: "opacity-100"
              Leaving: "ease-in-out duration-300"
                From: "opacity-100"
                To: "opacity-0"
            -->
                <div class="absolute top-0 right-0 -mr-12 pt-2">
                    <button type="button"
                        class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                        <span class="sr-only">Close sidebar</span>
                        <!-- Heroicon name: outline/x -->
                        <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div class="flex-shrink-0 flex items-center px-4">
                    <img class="h-8 w-auto"
                        src="./assets/img/logo.svg"
                        alt="BezTest">
                </div>
                <div class="mt-5 flex-1 h-0 overflow-y-auto">
                    <nav class="px-2 space-y-1">
                        <!-- Current: "bg-indigo-800 text-white", Default: "text-indigo-100 hover:bg-indigo-600" -->
                        <a href="#"
                            class="bg-indigo-800 text-white group flex items-center px-2 py-2 text-base font-medium rounded-md">
                            <!-- Heroicon name: outline/home -->
                            <svg class="mr-4 flex-shrink-0 h-6 w-6 text-indigo-300" xmlns="http://www.w3.org/2000/svg"
                                fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                            Dashboard
                        </a>

                        <a href="#"
                            class="text-indigo-100 hover:bg-indigo-600 group flex items-center px-2 py-2 text-base font-medium rounded-md">
                            <!-- Heroicon name: outline/users -->
                            <svg class="mr-4 flex-shrink-0 h-6 w-6 text-indigo-300" xmlns="http://www.w3.org/2000/svg"
                                fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                            Team
                        </a>

                        <a href="#"
                            class="text-indigo-100 hover:bg-indigo-600 group flex items-center px-2 py-2 text-base font-medium rounded-md">
                            <!-- Heroicon name: outline/folder -->
                            <svg class="mr-4 flex-shrink-0 h-6 w-6 text-indigo-300" xmlns="http://www.w3.org/2000/svg"
                                fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                            </svg>
                            Projects
                        </a>

                        <a href="#"
                            class="text-indigo-100 hover:bg-indigo-600 group flex items-center px-2 py-2 text-base font-medium rounded-md">
                            <!-- Heroicon name: outline/calendar -->
                            <svg class="mr-4 flex-shrink-0 h-6 w-6 text-indigo-300" xmlns="http://www.w3.org/2000/svg"
                                fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            Calendar
                        </a>

                        <a href="#"
                            class="text-indigo-100 hover:bg-indigo-600 group flex items-center px-2 py-2 text-base font-medium rounded-md">
                            <!-- Heroicon name: outline/inbox -->
                            <svg class="mr-4 flex-shrink-0 h-6 w-6 text-indigo-300" xmlns="http://www.w3.org/2000/svg"
                                fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                            </svg>
                            Documents
                        </a>

                        <a href="#"
                            class="text-indigo-100 hover:bg-indigo-600 group flex items-center px-2 py-2 text-base font-medium rounded-md">
                            <!-- Heroicon name: outline/chart-bar -->
                            <svg class="mr-4 flex-shrink-0 h-6 w-6 text-indigo-300" xmlns="http://www.w3.org/2000/svg"
                                fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                            Reports
                        </a>
                    </nav>
                </div>
            </div>

            <div class="flex-shrink-0 w-14" aria-hidden="true">
                <!-- Dummy element to force sidebar to shrink to fit close icon -->
            </div>
        </div>

        <!-- Static sidebar for desktop -->
        <div class="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
            <!-- Sidebar component, swap this element with another sidebar if you like -->
            <div class="flex flex-col flex-grow pt-5 bg-indigo-700 overflow-y-auto">
                <div class="flex items-center flex-shrink-0 px-4">
                      <img class="h-8 w-auto"
                        src="./assets/img/logo.svg"
                        alt="BezTest">
                </div>
                <div class="mt-5 flex-1 flex flex-col">
                    <nav class="flex-1 px-2 pb-4 space-y-1">
                        <!-- Current: "bg-indigo-800 text-white", Default: "text-indigo-100 hover:bg-indigo-600" -->
                        <a href="#"
                            class="bg-indigo-800 text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                            <!-- Heroicon name: outline/home -->
                            <svg class="mr-3 flex-shrink-0 h-6 w-6 text-indigo-300" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 12.5394L5 10.5394M5 10.5394L12 3.5394L19 10.5394M5 10.5394V20.5394C5 21.0917 5.44772 21.5394 6 21.5394H9M19 10.5394L21 12.5394M19 10.5394V20.5394C19 21.0917 18.5523 21.5394 18 21.5394H15M9 21.5394C9.55228 21.5394 10 21.0917 10 20.5394V16.5394C10 15.9871 10.4477 15.5394 11 15.5394H13C13.5523 15.5394 14 15.9871 14 16.5394V20.5394C14 21.0917 14.4477 21.5394 15 21.5394M9 21.5394H15" stroke="#A5B4FC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                            Главная
                        </a>


                        <a href="#"
                            class="text-indigo-100 hover:bg-indigo-600 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                            <!-- Heroicon name: outline/users -->
                            <svg class="mr-3 flex-shrink-0 h-6 w-6 text-indigo-300" width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19 12.7948C16.2207 13.9199 13.1827 14.5394 10 14.5394C6.8173 14.5394 3.7793 13.9199 1 12.7948M14 5.5394V3.5394C14 2.43483 13.1046 1.5394 12 1.5394H8C6.89543 1.5394 6 2.43483 6 3.5394V5.5394M10 11.5394H10.01M3 19.5394H17C18.1046 19.5394 19 18.644 19 17.5394V7.5394C19 6.43483 18.1046 5.5394 17 5.5394H3C1.89543 5.5394 1 6.43483 1 7.5394V17.5394C1 18.644 1.89543 19.5394 3 19.5394Z" stroke="#A5B4FC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


                            Заказы
                        </a>

                        <a href="#"
                            class="text-indigo-100 hover:bg-indigo-600 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                            <!-- Heroicon name: outline/folder -->
                            <svg class="mr-3 flex-shrink-0 h-6 w-6 text-indigo-300" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 14.5394L15 8.5394M9.50003 9.0394H9.51003M14.5 14.0394H14.51M19 21.5394V5.5394C19 4.43483 18.1046 3.5394 17 3.5394H7C5.89543 3.5394 5 4.43483 5 5.5394V21.5394L8.5 19.5394L12 21.5394L15.5 19.5394L19 21.5394ZM10 9.0394C10 9.31554 9.77614 9.5394 9.5 9.5394C9.22386 9.5394 9 9.31554 9 9.0394C9 8.76326 9.22386 8.5394 9.5 8.5394C9.77614 8.5394 10 8.76326 10 9.0394ZM15 14.0394C15 14.3155 14.7761 14.5394 14.5 14.5394C14.2239 14.5394 14 14.3155 14 14.0394C14 13.7633 14.2239 13.5394 14.5 13.5394C14.7761 13.5394 15 13.7633 15 14.0394Z" stroke="#A5B4FC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                            Скидки
                        </a>

                        <a href="#"
                            class="text-indigo-100 hover:bg-indigo-600 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                            <!-- Heroicon name: outline/calendar -->
                            <svg class="mr-3 flex-shrink-0 h-6 w-6 text-indigo-300" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17 7.5394H19C20.1046 7.5394 21 8.43483 21 9.5394V15.5394C21 16.644 20.1046 17.5394 19 17.5394H17V21.5394L13 17.5394H9C8.44772 17.5394 7.94772 17.3155 7.58579 16.9536M7.58579 16.9536L11 13.5394H15C16.1046 13.5394 17 12.644 17 11.5394V5.5394C17 4.43483 16.1046 3.5394 15 3.5394H5C3.89543 3.5394 3 4.43483 3 5.5394V11.5394C3 12.644 3.89543 13.5394 5 13.5394H7V17.5394L7.58579 16.9536Z" stroke="#A5B4FC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                            Вопросы
                        </a>

                       
                    </nav>
                </div>
            </div>
        </div>
        <div class="md:pl-64 flex flex-col flex-1">
            <div class="sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white shadow">
                <button type="button"
                    class="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden">
                    <span class="sr-only">Open sidebar</span>
                    <!-- Heroicon name: outline/menu-alt-2 -->
                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h7" />
                    </svg>
                </button>
                <div class="flex-1 px-4 flex justify-between">
                    <div class="flex-1 flex">
                       <nav class="flex" aria-label="Breadcrumb">
  <ol role="list" class="flex items-center space-x-4">
    <li>
      <div>
        <a href="#" class="text-gray-400 hover:text-gray-500">
          <!-- Heroicon name: solid/home -->
          <svg class="flex-shrink-0 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
          <span class="sr-only">Главная</span>
        </a>
      </div>
    </li>

    <li>
      <div class="flex items-center">
        <!-- Heroicon name: solid/chevron-right -->
        <svg class="flex-shrink-0 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
        </svg>
        <a href="#" class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">Настройка аккаунта</a>
      </div>
    </li>

    
  </ol>
</nav>
                    </div>
                    <div class="ml-4 flex items-center md:ml-6">
                        <button type="button"
                            class="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            <span class="sr-only">View notifications</span>
                            <!-- Heroicon name: outline/bell -->
                            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                        </button>

                        <!-- Profile dropdown -->
                        <div class="ml-3 relative">
                            <div>
                                <button type="button"
                                    class="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                    <span class="sr-only">Open user menu</span>
                                    <img class="h-8 w-8 rounded-full"
                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                        alt="">
                                </button>
                            </div>

                            <!--
                    Dropdown menu, show/hide based on menu state.
      
                    Entering: "transition ease-out duration-100"
                      From: "transform opacity-0 scale-95"
                      To: "transform opacity-100 scale-100"
                    Leaving: "transition ease-in duration-75"
                      From: "transform opacity-100 scale-100"
                      To: "transform opacity-0 scale-95"
                  -->
                            <div class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                                role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button"
                                tabindex="-1">
                                <!-- Active: "bg-gray-100", Not Active: "" -->
                                <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1"
                                    id="user-menu-item-0">Мой профиль</a>

                                <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1"
                                    id="user-menu-item-1">Настройки</a>

                                <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1"
                                    id="user-menu-item-2">Выйти</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <main>
                <div class="py-6">
                    <!-- <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                        <h1 class="text-2xl font-semibold text-gray-900 mb-6">Dashboard 1</h1>
                    </div> -->
                    <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                        <form action="#" method="POST">
                            <div class="shadow overflow-hidden sm:rounded-md">
                                
                              <div class="px-4 py-5 bg-white sm:p-6">
                                  <h1 class="text-1xl font-bold text-gray-900 mb-6">Настройки РосДистант</h1>
                                <div class="grid grid-cols-6 gap-6">
                                    
                                  <div class="col-span-6 sm:col-span-3">
                                    <label for="first-name" class="block text-sm font-medium text-gray-700">Логин</label>
                                    <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                                  </div>
                    
                                  <div class="col-span-6 sm:col-span-3">
                                    <label for="last-name" class="block text-sm font-medium text-gray-700">Пароль</label>
                                    <input type="password" name="last-name" id="last-name" autocomplete="family-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                                  </div>
              
                                </div>
                              </div>
                              <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                  Сохранить
                                </button>
                              </div>
                            </div>
                          </form>
                    </div>
 <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mt-8">

<div class="rounded-md bg-red-50 p-4">
  <div class="flex">
    <div class="flex-shrink-0">
      <!-- Heroicon name: solid/x-circle -->
      <svg class="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
      </svg>
    </div>
    <div class="ml-3">
      <h3 class="text-sm font-medium text-red-800">
        Авторизация неуспешна
      </h3>
      <div class="mt-2 text-sm text-red-700">
        <ul role="list" class="list-disc pl-5 space-y-1">
          <li>
            Не верный логин или пароль
          </li>
          <li>
            Повторите попытку
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
       </div>   

<div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mt-8">
    <!-- This example requires Tailwind CSS v2.0+ -->
<div class="rounded-md bg-green-50 p-4">
  <div class="flex">
    <div class="flex-shrink-0">
      <!-- Heroicon name: solid/check-circle -->
      <svg class="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
      </svg>
    </div>
    <div class="ml-3">
      <h3 class="text-sm font-medium text-green-800">
        Авторизация успешна
      </h3>
      <div class="mt-2 text-sm text-green-700">
        <p>
          Вы успешно авторизировались и можете загрузить/обновить список курсов
        </p>
      </div>

    </div>
  </div>
</div>
 </div>  

                    <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mt-8">
                        <!-- Replace with your content -->
                        <!-- This example requires Tailwind CSS v2.0+ -->
                       <span class="flex mb-6 align-middle">

                           

                       
                        <h1 class="text-2xl font-semibold text-gray-900 mr-2">Список курсов</h1>
                       
                        <svg class="mt-2 cursor-pointer" width="25" height="28" viewBox="0 0 25 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.23506 21.8501C3.95749 20.0029 2.49998 17.1707 2.49998 13.9942C2.49998 9.29879 5.6893 5.36501 9.99993 4.24338V1.64592C4.2944 2.81321 0 7.89828 0 13.9942C0 17.7613 1.64067 21.1393 4.23893 23.448C6.25004 25.3365 7.49995 22.8162 6.23506 21.8501ZM20.6557 4.44944C19.3751 3.2834 17.5001 5.17369 18.7293 6.11012C21.0279 7.95672 22.5002 10.8025 22.5002 13.9942C22.5002 18.6904 19.3103 22.6249 15.0001 23.7458V26.3438C20.7056 25.1752 25 20.0909 25 13.994C25 10.1773 23.3154 6.75993 20.6557 4.44944ZM11.1045 6.42028L15.1733 3.96396C15.7652 3.60651 15.7665 3.0243 15.1765 2.66433L11.0701 0.158747C10.4793 -0.200684 10.0026 0.0706425 10.0055 0.766668L10.0276 5.80751C10.0294 6.50317 10.5118 6.77774 11.1045 6.42028ZM13.9307 21.5818L9.82371 24.0874C9.23319 24.4474 9.23444 25.0294 9.8271 25.387L13.8955 27.8435C14.4875 28.2003 14.971 27.9266 14.974 27.23L14.9954 22.1894C14.9976 21.4939 14.5201 21.2224 13.9307 21.5818Z" fill="black"/>
</svg>
</span>

                        <div class="flex flex-col">
                            <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                    <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                        <table class="min-w-full divide-y divide-gray-200">
                                            <thead class="bg-gray-50">
                                                <tr>
                                                    <th scope="col"
                                                        class="px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider">
                                                        Название предмета
                                                    </th>
                                                    <th scope="col"
                                                        class="px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider">
                                                        Итоговый тест
                                                    </th>
                                                    <th scope="col"
                                                        class="px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider">
                                                        Форма контроля
                                                    </th>
                                                    <th scope="col"
                                                        class="px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider">
                                                        Набранно балов
                                                    </th>
                                                    <th scope="col"
                                                        class="px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider">
                                                        Max
                                                    </th>
                                                      <th scope="col"
                                                        class="px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider">
                                                        Стоимость
                                                    </th>
                                                    <th scope="col" class="relative px-6 py-3">
                                                   
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody class="bg-white divide-y divide-gray-200">
                                                <tr>
                                                    <td class="px-6 py-4 ">
                                                        <div class="flex items-center">
                                                            <div class="">
                                                                <div class="text-xs font-medium text-gray-900 mb-1">
                                                                    Высшая математика 2
                                                                </div>
                                                                <div class="text-gray-500 text-xs">
                                                                    Ковтун Александр
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td class="text-xs px-6 py-4 whitespace-nowrap text-gray-500">
                                                        Да

                                                    </td>
                                                    <td class="text-xs px-6 py-4 whitespace-nowrap text-gray-500">
                                                        зачет
                                                    </td>
                                                    <td class="px-6 py-4 whitespace-nowrap text-xs text-gray-700">
                                                        0
                                                    </td>
                                                    <td class="px-6 py-4 whitespace-nowrap text-xs text-gray-700">
                                                       <span class="font-medium"> 70</span> 
                                                    </td>
                                                    <td class="px-6 py-4 whitespace-nowrap text-xs text-gray-700">
                                                       <span class="font-bold">600</span> 
                                                    </td>
                                                   
                                                    <td
                                                        class="px-6 py-4 whitespace-nowrap text-right text-sm ">
                                                      <button type="button" class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
  Заказать
</button>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td class="px-6 py-4 ">
                                                        <div class="flex items-center">
                                                            <div class="">
                                                                <div class="text-xs font-medium text-gray-900 mb-1">
                                                                    Общая психология 2
                                                                </div>
                                                                <div class="text-xs text-gray-500">
                                                                    Ковтун Александр
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td class="text-xs px-6 py-4 whitespace-nowrap text-gray-500">
                                                        Да

                                                    </td>
                                                    <td class="text-xs px-6 py-4 whitespace-nowrap text-gray-500">
                                                        зачет
                                                    </td>
                                                    <td class="px-6 py-4 whitespace-nowrap text-xs text-gray-700">
                                                        0
                                                    </td>
                                                    <td class="px-6 py-4 whitespace-nowrap text-xs text-gray-700">
                                                       <span class="font-medium"> 70</span> 
                                                    </td>
                                                    <td class="px-6 py-4 whitespace-nowrap text-xs text-gray-700">
                                                       <span class="font-bold">600</span> 
                                                    </td>
                                                   
                                                    <td
                                                        class="px-6 py-4 whitespace-nowrap text-right  ">
                                                      <button type="button" class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
  Заказать
</button>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td class="px-6 py-4 ">
                                                        <div class="flex items-center">
                                                            <div class="">
                                                                <div class="text-xs font-medium text-gray-900 mb-1">
                                                                    Отчётность хозяйствующих субъектов

                                                                </div>
                                                                <div class="text-xs text-gray-500">
                                                                    Ковтун Александр
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td class="text-xs px-6 py-4 whitespace-nowrap text-gray-500">
                                                        Да

                                                    </td>
                                                    <td class="text-xs px-6 py-4 whitespace-nowrap text-gray-500">
                                                        зачет
                                                    </td>
                                                    <td class="px-6 py-4 whitespace-nowrap text-xs text-gray-700">
                                                        0
                                                    </td>
                                                    <td class="px-6 py-4 whitespace-nowrap text-xs text-gray-700">
                                                       <span class="font-medium"> 70</span> 
                                                    </td>
                                                    <td class="px-6 py-4 whitespace-nowrap text-xs text-gray-700">
                                                       <span class="font-bold">600</span> 
                                                    </td>
                                                   
                                                    <td
                                                        class="px-6 py-4 whitespace-nowrap text-right  ">
                                                      <button type="button" class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
  Заказать
</button>
                                                    </td>
                                                </tr>


                                                <tr>
                                                    <td class="px-6 py-4 ">
                                                        <div class="flex items-center">
                                                            <div class="">
                                                                <div class="text-xs font-medium text-gray-900 mb-1">
                                                                    Правоведение
                                                                </div>
                                                                <div class="text-xs text-gray-500">
                                                                    Ковтун Александр
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td class="text-xs px-6 py-4 whitespace-nowrap text-gray-500">
                                                        Да

                                                    </td>
                                                    <td class="text-xs px-6 py-4 whitespace-nowrap text-gray-500">
                                                        зачет
                                                    </td>
                                                    <td class="px-6 py-4 whitespace-nowrap text-xs text-gray-700">
                                                        0
                                                    </td>
                                                    <td class="px-6 py-4 whitespace-nowrap text-xs text-gray-700">
                                                       <span class="font-medium"> 70</span> 
                                                    </td>
                                                    <td class="px-6 py-4 whitespace-nowrap text-xs text-gray-700">
                                                       <span class="font-bold">600</span> 
                                                    </td>
                                                   
                                                    <td
                                                        class="px-6 py-4 whitespace-nowrap text-right  ">
                                                      <button type="button" class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
  Заказать
</button>
                                                    </td>
                                                </tr>


                                                <tr>
                                                    <td class="px-6 py-4 ">
                                                        <div class="flex items-center">
                                                            <div class="">
                                                                <div class="text-xs font-medium text-gray-900 mb-1">
                                                                    Психология дошкольного возраста 1
                                                                </div>
                                                                <div class="text-xs text-gray-500">
                                                                    Ковтун Александр
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td class="text-xs px-6 py-4 whitespace-nowrap text-gray-500">
                                                        Да

                                                    </td>
                                                    <td class="text-xs px-6 py-4 whitespace-nowrap text-gray-500">
                                                        зачет
                                                    </td>
                                                    <td class="px-6 py-4 whitespace-nowrap text-xs text-gray-700">
                                                        0
                                                    </td>
                                                    <td class="px-6 py-4 whitespace-nowrap text-xs text-gray-700">
                                                       <span class="font-medium"> 70</span> 
                                                    </td>
                                                    <td class="px-6 py-4 whitespace-nowrap text-xs text-gray-700">
                                                       <span class="font-bold">600</span> 
                                                    </td>
                                                   
                                                    <td
                                                        class="px-6 py-4 whitespace-nowrap text-right  ">
                                                      <button type="button" class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
  Заказать
</button>
                                                    </td>
                                                </tr>
                                                
                                               

                                                <!-- More people... -->
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- /End replace -->
                    </div>
                </div>
            </main>
        </div>
    </div>

</template>


