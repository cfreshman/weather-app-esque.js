// weather-app-esque.js 0.0.1 @ https://freshman.dev/lib/2/weather-app-esque/script.js https://freshman.dev/copyright.js
Object.entries({
    'common.js': '/lib/2/common/script.js',
}).map(([key,src])=>!window[key]&&document.head.append((x=>Object.assign(x,{innerHTML:(src=>(x=>{x.withCredentials=false;x.open('GET',src,false);x.send();return x.responseText})(new XMLHttpRequest()))(new URL(src,location.port==='3030'/*local testing on port 3030*/?location.origin:'https://freshman.dev').toString())}))(document.createElement('script'))))

// ignore reimport
{
    const names = lists.of('weather-app-esque.js wae WAE')
    if (names.some(name => !window[name])) {
        
        /* script
        */
        const version = `weather-app-esque v0.0.1`
        const definition = {
            
        }
        names.map(name => window[name] = merge(definition, {
            version, [name]:version, t:Date.now()
        }))

    }
}
