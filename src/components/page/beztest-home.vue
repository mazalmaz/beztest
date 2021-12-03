<template>
    <div>
          <BeztestLogin />
          <BeztestCurslist />
    </div>
</template>

<script>
import BeztestLogin from "../module/beztest-login.vue";
import BeztestCurslist from "../module/beztest-curslist.vue";

export default {
  name: "BeztestHome",
  components: {
    BeztestLogin,
    BeztestCurslist,
  },
};
</script>