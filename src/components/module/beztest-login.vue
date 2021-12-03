<template>

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
</template>

<script>
export default {
    name: 'BeztestLogin'
}
</script>