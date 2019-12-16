<template>
    <div class="lea-button-group">
        <slot></slot>
    </div>
</template>
<script>
export default {
    mounted () {
        // 用户使用 lea-button-group 不正确警告信息
        for (const node of this.$el.children) {
            let nodeName = node.nodeName.toLowerCase()
            if (nodeName !== 'button') {
                console.warn(`lea-button-group 的子元素应该全是 lea-button, 但你写的是${nodeName}`)
            }    
        }
    }
}
</script>

<style lang="scss" scoped>
.lea-button-group{
    display: inline-flex;
    vertical-align: middle;
    .lea-button{
        border-radius: 0;
        &:not(:first-child){
            margin-left: -1px;
        }
        &:first-child{
            border-top-left-radius: var(--border-radius);
            border-bottom-left-radius: var(--border-radius);
        }
        &:last-child{
            border-top-right-radius: var(--border-radius);
            border-bottom-right-radius: var(--border-radius);
        }
        &:hover{
            position: relative;
            z-index:1;
        }
    }
}
</style>