<template>
    <div class="cupfox">
        <Topnav />
        <div class="cupfox_iframe">
            <iframe
                id="iframe"
                src=""
                scrolling="no"
                border="0"
                frameborder="no"
                framespacing="0"
                allowfullscreen="true"
            >
            </iframe>
        </div>
    </div>
</template>

<script>
import Topnav from '../components/Topnav'
export default {
    components: {
        Topnav,
    },
    mounted(){
        this.openIframe(this.$route.query.href)
    },
    methods:{
        openIframe(url) {
            var oldIframe = document.getElementById('iframe')
            var iframe = document.createElement('iframe')
            iframe.setAttribute('id', 'iframe')
            // iframe.setAttribute('scrolling', 'no')
            iframe.setAttribute('border', '0')
            iframe.setAttribute('width', '100%')
            iframe.setAttribute('height', '100%')
            iframe.setAttribute('frameborder', 'no')
            iframe.setAttribute('framespacing', '0')
            iframe.setAttribute('allowfullscreen', 'true')
            iframe.src = url
            oldIframe.parentNode.insertBefore(iframe, oldIframe)
            oldIframe.parentNode.removeChild(oldIframe)
        },
    }
}
</script>

<style scoped>
.cupfox {
    height: 100%;
}
.cupfox .cupfox_iframe{
    height: 90vh;
    width: 100vw;
}
</style>
