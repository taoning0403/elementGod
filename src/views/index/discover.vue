<template>
  <div>
    发现页面
  </div>
</template>

<script>
import http from '@/utils/publicTools/http'
export default {


  methods : {
    xshl () {
      http.get('http://localhost:8080/ele/restapi/shopping/v1/sale_list_index?type=special_food&latitude=-1&longitude=-1&params=%7B%7D',
      )
      .then(res =>{
        console.log(res);
      })
    }
  },
  creared () {
    // this.xshl();
  },
  mounted () {
    console.log(1);
    this.xshl();
  }
}
</script>

<style>

</style>
