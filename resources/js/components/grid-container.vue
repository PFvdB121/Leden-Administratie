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
                    <ion-col :size="this.gridCols[key]" v-for="(value, key) in filterObject(item, 'id')">
                        {{ value }}
                    </ion-col>
                    <ion-col :size="this.gridCols.aanpassen" class="d-flex justify-content-center">
                        <ion-button @click="updating(item.id)">aanpassen</ion-button>
                    </ion-col>
                    <ion-col :size="this.gridCols.deleten" class="d-flex justify-content-center">
                        <ion-button @click="deleting(item.id)" color="danger">deleten</ion-button>
                    </ion-col>
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

            filterObject: function(object, filter){
                if(object !== null && object !== undefined){
                    var array = Object.entries(object);
                    array = array.filter((index) => {return index[0] !== filter});
                    object = Object.fromEntries(array);
                    return object;
                }
                return {};
            }
        },

        updated(){
            this.$refs.scroll1.addEventListener("scroll", this.syncScroll);
            this.gridItems = this.items;
        },

        props: {
            updating: Function,
            deleting: Function,
            items: Object,
            gridCols: Object,
            colomnBreedte: Number,
        }
    });
</script>

<style scoped>
    .leden-grid{
        min-width: v-bind(gridBreedte);
        --ion-grid-columns: v-bind(gridTotaal);
    }
</style>