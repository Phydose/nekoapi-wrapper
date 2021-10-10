const { error } = require('console')
const fetch = require('node-fetch')
const baseurl = "https://api.phydo.repl.co"
const fun = baseurl + "/fun"
const image = baseurl + "/img"
const txt = baseurl + "/text"
// Misc Endpoints
async function neko() {
    try {
    const fetched = await fetch(img + "/sfw/neko")
    return (await fetched.json())
    } catch(error) {
        console.log("[nekoapi: neko()]: Something broke.")
    }
}
async function waifu() {
    try {
    const fetched = await fetch(img + "/sfw/waifu")
    return (await fetched.json())
    } catch(error) {
        console.log("[nekoapi: waifu()]: Something broke.")
    }
}
async function ascii(text) {
    if (!text) {
        console.log("[nekoapi: ascii()]: No text provided.")
    } else {
    const fetched = await fetch(txt + `/ascii?text=${encodeURIcomponent(text)}`)
    return (await fetched.json())
    }
}
async function owoify(text) {
    if (!text) {
        console.log("[nekoapi: owoify()]: No text provided.")
    } else {
    const fetched = await fetch(txt + `/owoify?text=${encodeURIcomponent(text)}`)
    return (await fetched.json())
    }
}
async function neko2() {
    try {
    const fetched = await fetch(img + "/sfw/neko2")
    return (await fetched.json())
    } catch(error) {
        console.log("[nekoapi: neko2()]: Something broke.")
    }
}
async function animequote() {
    try {
    const fetched = await fetch(fun + "/animequote")
    return (await fetched.json())
    } catch(error) {
        console.log("[nekoapi: animequote()]: Something broke.")
    }
}
// end of image endpoints
module.exports = {
   neko,
   waifu,
   neko2,
   ascii,
   owoify,
   animequote
}
