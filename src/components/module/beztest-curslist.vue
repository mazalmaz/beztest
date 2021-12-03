<template>
    <div>
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
</template>

<script>
export default {
    name: 'BeztestCurslist'
}
</script>