<template>
    <div class="w-100" v-if="items">
        <div ref="scroll1" class="sticky-top overflow-x-scroll">
            <ion-grid class="grid-gap leden-grid">
                <ion-row class="bg-secondary">
                    <ion-col v-for="(value, key) in gridCols" :size="value">
                        {{ key }}
                    </ion-col>
                </ion-row>
            </ion-grid>
        </div>
        <div ref="scroll2" class="overflow-x-hidden">
            <ion-grid class="grid-gap leden-grid">
                <ion-row v-for="item in items" class="bg-muted">
                    <ion-col :size="this.gridCols[key]" v-for="(value, key) in sortingObject(filterObject(item, gridCols), gridCols)">
                        {{ value }}
                    </ion-col>
                    <slot :item="item"></slot>
                </ion-row>
            </ion-grid>
        </div>
    </div>
</template>

<script>
    import { 
        IonGrid,
        IonRow,
        IonCol,
        IonButton,
    } from "@ionic/vue";

    export default({
        components: {
            IonGrid,
            IonRow,
            IonCol,
            IonButton,
        },

        created(){
            this.gridTotaal = this.gridColTellen(this.gridCols);
            this.gridBreedte = this.gridBreedteTellen(this.gridTotaal, this.colomnBreedte);
        },

        methods:{
            syncScroll: function(){
                this.$refs.scroll2.scrollLeft = this.$refs.scroll1.scrollLeft;
            },

            filterObject: function(object1, object2){
                if(object1 !== null && object1 !== undefined && object2 !== null && object2 !== undefined){
                    var array1 = Object.entries(object1);
                    var array2 = Object.keys(object2);
                    array1 = array1.filter((index) => {return array2.includes(index[0])});
                    object1 = Object.fromEntries(array1);
                    return object1;
                }
                return {};
            },

            sortingObject: function(object1, object2){
                if (object1 !== null && object1 !== undefined && object2 !== null && object2 !== undefined) {
                    var array1 = Object.entries(object1);
                    var array2 = Object.keys(this.filterObject(object2, object1));
                    array1.sort((a, b) => {return array2.indexOf(a[0]) - array2.indexOf(b[0])});
                    object1 = Object.fromEntries(array1);
                    return object1;
                }
            },
        },

        mounted(){
            this.$refs.scroll1.addEventListener("scroll", this.syncScroll);
        },

        props: {
            items: Object,
            gridCols: Object,
            colomnBreedte: Number,
        },
    });
</script>

<style scoped>
    .leden-grid{
        min-width: v-bind(gridBreedte);
        --ion-grid-columns: v-bind(gridTotaal);
    }
</style>