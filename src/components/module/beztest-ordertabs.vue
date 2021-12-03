<template>
   <div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mt-8">
               <!-- Replace with your content -->
               <!-- This example requires Tailwind CSS v2.0+ -->
               <h1 class="text-2xl font-semibold text-gray-900 mr-2 mb-6">Список заказов</h1>
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
                                       Дата
                                    </th>
                                    <th scope="col"
                                       class="px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider">
                                       Форма контроля
                                    </th>
                                    <th scope="col"
                                       class="px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider">
                                       Срок
                                    </th>
                                    <th scope="col"
                                       class="px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider">
                                       Статус выполнения
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
                                       21.12.2021
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-xs text-gray-700">
                                       Зачет
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-xs text-gray-700">
                                       1-10 рабочих дней 
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-xs text-gray-700">
                                      <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
  Загрузил акт
</span>
                                    </td>
                                    <td
                                       class="px-6 py-4 whitespace-nowrap text-right text-sm ">
                                      
                                    </td>
                                 </tr>


                                    <tr>
                                    <td class="px-6 py-4 ">
                                       <div class="flex items-center">
                                          <div class="">
                                             <div class="text-xs font-medium text-gray-900 mb-1">
                                                Материаловедение сварки
                                             </div>
                                             <div class="text-gray-500 text-xs">
                                                Ковтун Александр
                                             </div>
                                          </div>
                                       </div>
                                    </td>
                                    <td class="text-xs px-6 py-4 whitespace-nowrap text-gray-500">
                                       11.12.2021
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-xs text-gray-700">
                                       Зачет
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-xs text-gray-700">
                                       5-7 рабочих дней 
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-xs text-gray-700">
                                      <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
  Принят к работе
</span>
                                    </td>
                                    <td
                                       class="px-6 py-4 whitespace-nowrap text-right text-sm ">
                                       
                                    </td>
                                 </tr>



                                  <tr>
                                    <td class="px-6 py-4 ">
                                       <div class="flex items-center">
                                          <div class="">
                                             <div class="text-xs font-medium text-gray-900 mb-1">
                                                Основы САПР	
                                             </div>
                                             <div class="text-gray-500 text-xs">
                                                Ковтун Александр
                                             </div>
                                          </div>
                                       </div>
                                    </td>
                                    <td class="text-xs px-6 py-4 whitespace-nowrap text-gray-500">
                                       04.12.2021
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-xs text-gray-700">
                                       Курсовая работа
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-xs text-gray-700">
                                       3 рабочих дня 
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-xs text-gray-700">
                                      <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
  Выполнен
</span>
                                    </td>
                                    <td
                                       class="px-6 py-4 whitespace-nowrap text-right text-sm ">
                                        <button type="button" class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                         Получить
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
</template>

<script>
export default {
    name: 'BeztestOrdertabs'
}
</script>