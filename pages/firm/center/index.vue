<template>
  <div>
    <firm-info></firm-info>
  </div>
</template>
<script>
  import firmInfo from '~/components/firmInfo/firmInfo'
  export default  {
    middleware: 'firmauth',
    layout: 'firmcenter',
    components: {
      firmInfo
    }
  }
</script>

