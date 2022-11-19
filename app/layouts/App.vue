<template>
  <router-view />
</template>

<script>
export default {
  name: 'App',
  html() {
    return {
      title: 'App',
      meta: [
        { mid: 'theme-color', name: 'theme-color', content: '#3e4095', },
      ],
    }
  },
  beforeCreate() {
    $app.auth.init()
  },
}
</script>

<style lang="scss">
@import '~nast-ui/styles/global';
@import url('https://fonts.googleapis.com/css?family=Raleway|Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i');

@include initialize((
    default: (
        colors: (
            primary: #2A82D3,
            secondary: #4BB222,
        ),
        typography: (
            header-font: 'Roboto, sans-serif',
            text-font: '400 1em Mazzard, sans-serif',
            h1-font: '400 2em var(--header-font)',
            h3-font: '500 1.2em var(--header-font)',
            text-color: #474747,
        ),
    ),
));
.container{
  padding: 0 5px;
}

.n-table .cell{
  vertical-align: center;
}

.n-table .row.header .cell{
  font-weight: bold !important;
  font-size: 12px;
}

.n-table .row.item .cell{
  font-weight: bold;
  font-size: 12px;
}
</style>
