// import "@babel/polyfill";

const arr = [
    new Promise(()=>{}),
    new Promise(()=>{}),
]

arr.map(el => {
    console.log(el)
})

const obj = {
    a: {
        b1: {},
        b2: {
            c:5
        }
    }
}

const c = obj?.a?.b1?.c
console.log(c)