<template>
    <div id="hello">
        <h3>{{title}}</h3>
    </div>
</template>
<script>
    export default {
        name: 'hello',
        data() {
            return {title: 'hello world!'};
        }
    }
</script>