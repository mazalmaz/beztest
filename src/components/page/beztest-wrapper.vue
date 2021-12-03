<template>
  <div>
  <div v-if="$route.path !== '/'">
    <BeztestSidebar/>
    <div class="md:pl-64 flex flex-col flex-1" >
      <BeztestHeader/>
      <main>
        <div class="py-6">
            <router-view />
        </div>
      </main>
    </div>
    </div>
    <router-view v-else/>

  </div>
</template>

<script>
import BeztestHeader from "../layouts/beztest-header.vue"
import BeztestSidebar from "../layouts/beztest-sidebar.vue"



export default {
  name: "BeztestWrapper",
  components: {
    BeztestHeader,
    BeztestSidebar
  },
};
</script>