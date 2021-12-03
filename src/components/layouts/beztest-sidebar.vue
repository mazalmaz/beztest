<template>

  <!-- Static sidebar for desktop -->
  <div class="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
    <!-- Sidebar component, swap this element with another sidebar if you like -->
    <div class="flex flex-col flex-grow pt-5 bg-indigo-700 overflow-y-auto">
      <div class="flex items-center flex-shrink-0 px-4">
        <img class="h-8 w-auto" src="../../assets/img/logo.svg" alt="BezTest" />
      </div>
      <div class="mt-5 flex-1 flex flex-col">
        <nav class="flex-1 px-2 pb-4 space-y-1">
          <!-- Current: "bg-indigo-800 text-white", Default: "text-indigo-100 hover:bg-indigo-600" -->

          <router-link
            to="/main"
            class="
              text-white
              group
              flex
              items-center
              px-2
              py-2
              text-sm
              font-medium
              rounded-md
            "
          >
            <svg
              class="mr-3 flex-shrink-0 h-6 w-6 text-indigo-300"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 12.5394L5 10.5394M5 10.5394L12 3.5394L19 10.5394M5 10.5394V20.5394C5 21.0917 5.44772 21.5394 6 21.5394H9M19 10.5394L21 12.5394M19 10.5394V20.5394C19 21.0917 18.5523 21.5394 18 21.5394H15M9 21.5394C9.55228 21.5394 10 21.0917 10 20.5394V16.5394C10 15.9871 10.4477 15.5394 11 15.5394H13C13.5523 15.5394 14 15.9871 14 16.5394V20.5394C14 21.0917 14.4477 21.5394 15 21.5394M9 21.5394H15"
                stroke="#A5B4FC"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Главная</router-link
          >
          <router-link
            to="/order"
            class="
              text-indigo-100
              hover:bg-indigo-600
              group
              flex
              items-center
              px-2
              py-2
              text-sm
              font-medium
              rounded-md
            "
          >
            <svg
              class="mr-3 flex-shrink-0 h-6 w-6 text-indigo-300"
              width="23"
              height="21"
              viewBox="0 0 23 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 12.7948C16.2207 13.9199 13.1827 14.5394 10 14.5394C6.8173 14.5394 3.7793 13.9199 1 12.7948M14 5.5394V3.5394C14 2.43483 13.1046 1.5394 12 1.5394H8C6.89543 1.5394 6 2.43483 6 3.5394V5.5394M10 11.5394H10.01M3 19.5394H17C18.1046 19.5394 19 18.644 19 17.5394V7.5394C19 6.43483 18.1046 5.5394 17 5.5394H3C1.89543 5.5394 1 6.43483 1 7.5394V17.5394C1 18.644 1.89543 19.5394 3 19.5394Z"
                stroke="#A5B4FC"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Заказы</router-link
          >
          <router-link
            to="/sale"
            class="
              text-indigo-100
              hover:bg-indigo-600
              group
              flex
              items-center
              px-2
              py-2
              text-sm
              font-medium
              rounded-md
            "
          >
            <svg
              class="mr-3 flex-shrink-0 h-6 w-6 text-indigo-300"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 14.5394L15 8.5394M9.50003 9.0394H9.51003M14.5 14.0394H14.51M19 21.5394V5.5394C19 4.43483 18.1046 3.5394 17 3.5394H7C5.89543 3.5394 5 4.43483 5 5.5394V21.5394L8.5 19.5394L12 21.5394L15.5 19.5394L19 21.5394ZM10 9.0394C10 9.31554 9.77614 9.5394 9.5 9.5394C9.22386 9.5394 9 9.31554 9 9.0394C9 8.76326 9.22386 8.5394 9.5 8.5394C9.77614 8.5394 10 8.76326 10 9.0394ZM15 14.0394C15 14.3155 14.7761 14.5394 14.5 14.5394C14.2239 14.5394 14 14.3155 14 14.0394C14 13.7633 14.2239 13.5394 14.5 13.5394C14.7761 13.5394 15 13.7633 15 14.0394Z"
                stroke="#A5B4FC"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Скидки</router-link
          >
          <router-link
            to="/faq"
            class="
              text-indigo-100
              hover:bg-indigo-600
              group
              flex
              items-center
              px-2
              py-2
              text-sm
              font-medium
              rounded-md
            "
          >
            <svg
              class="mr-3 flex-shrink-0 h-6 w-6 text-indigo-300"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17 7.5394H19C20.1046 7.5394 21 8.43483 21 9.5394V15.5394C21 16.644 20.1046 17.5394 19 17.5394H17V21.5394L13 17.5394H9C8.44772 17.5394 7.94772 17.3155 7.58579 16.9536M7.58579 16.9536L11 13.5394H15C16.1046 13.5394 17 12.644 17 11.5394V5.5394C17 4.43483 16.1046 3.5394 15 3.5394H5C3.89543 3.5394 3 4.43483 3 5.5394V11.5394C3 12.644 3.89543 13.5394 5 13.5394H7V17.5394L7.58579 16.9536Z"
                stroke="#A5B4FC"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Вопросы</router-link
          >
        </nav>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "BeztestSidebar",
 

};
</script>