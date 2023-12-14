import { toastController } from "@ionic/vue";
module.exports.functions = function(app){
    app.mixin({
        methods: {
            redirectWithParams: function(url, params){
                if (Array.isArray(params) || typeof params === "object") {
                    var redirecting = url + "?";
                    var iteration = 0;
                    for(const p in params){
                        if (params[p] !== undefined && params[p] !== "" && params[p] !== null) {
                            iteration++;
                            if (iteration > 1) {
                                redirecting += "&";
                            }
                            redirecting += p + "=" + params[p];
                        }
                    }
                    window.location.replace(redirecting);
                }
                else{
                    console.error("Second parameter must be an array");
                }
            },

            validateEmail: function(email){
                const validRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                
                return !!email.match(validRegex);
            },

            gridColTellen: function (grid) {
                var col = 0;
                for(const g in grid) {
                    col += grid[g];
                };
                return col;
            },

            gridBreedteTellen: function(gridTotaal, colomnBreedte){
                var gridBreedte = gridTotaal * colomnBreedte + "px";
                return gridBreedte;
            },

            async Toast(message, color, duration, position){
                const toast = await toastController.create({
                    message: message,
                    color: color,
                    duration: duration,
                    position: position,
                });

                toast.present();
            },
        },

        mounted(){
            if (!Object.keys) {
                Object.keys = function(obj){
                    var keys = [];
    
                    for (var o in obj) {
                        if (obj.hasOwnProperty(o)) {
                            keys.push(o);
                        }
                    }
    
                    return keys;
                }
            }
        }
    });
}