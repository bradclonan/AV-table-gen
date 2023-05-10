<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Create</router-link> |
      <router-link to="AVTableSample">Data on Created</router-link>|
      <router-link to="/Preview">Preview</router-link> |
       <router-link to="/AVComponents">Styler</router-link> |
      <router-link to="/TableCheatSheet">CheatSheet</router-link>
    </div>
    <hr />
    <router-view/>
  </div>
</template>
