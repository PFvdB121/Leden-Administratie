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

            waardeAanpassen: function(index, waarde){
                this[index] = waarde;
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

            noZero: function(val){
                if (String(this[val]).match(/^0+/)) {
                    this[val] = '';
                }
            },

            noDec: function(val){
                const num = Number(this[val]);
                if (this[val] && !isNaN(num) && !Number.isInteger(this[val])){
                    this[val] = Math.floor(this[val]);
                }
            },

            resDec: function(val){
                const re = /^\d+\.?\d{0,2}/
                if ((this[val] !== null && this[val] !== undefined && this[val] !== "") && String(this[val]).match(re) != String(this[val])) {
                    this[val] = String(String(this[val]).match(re));
                }
                else if(this[val] === null || this[val] === undefined){
                    this[val] = "";
                }
            },
        },
    });
}