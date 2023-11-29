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
            }
        }
    });
}