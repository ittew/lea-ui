<template>
    <button class="lea-button" 
        :class="{[`icon-${iconposition}`]: iconposition}"
        @click="$emit('click')"
    >
        <lea-icon v-if="icon && !loading" :name="icon" class="icon"></lea-icon>
        <lea-icon v-if="loading" name="jiazaizhong" class="icon loading"></lea-icon>
        <div class="content">
            <slot></slot>    
        </div>   
    </button>
</template>
<script>
export default {
    props: {
        icon: {},
        loading: {
            type: Boolean,
            default: false
        },
        iconposition: {
            type: String,
            default: 'left',
            validator (value) {
                return !(value!=="left" && value!=="right")
            }
        }
    }
}    
</script>
<style lang="scss">
.lea-button{
    font-size: var(--font-size);
    height: var(--button-height);
    padding: 0 0.8em;
    border-radius: var(--border-radius);
    border: 1px solid var(--border-color);
    background: var(--button-bg);
    outline: none;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    &:hover{
        border-color: var(--border-color-hover)
    }
    &:active{
        background-color: var(--button-active-bg)
    }
    .icon{
        order: 1;
        margin-right: .15em;
    }
    .content{
        order: 2;
    }
    &.icon-right{
        .icon{
            order: 2;
            margin-right:0;
            margin-left: .2em;
        }
        .content{
            order: 1;
        }
    }
}
.loading{
    animation: spin 1.5s infinite linear;
}
@keyframes spin{
    0% { transform: rotate(0deg)}
    100% { transform: rotate(360deg)}
}

</style>

