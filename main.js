//` 강제개형 허용 가능
let str = `
010-9256-7305
noth7305@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
hxyp
http://localhost:1234
동해물과_백두산이 마르고 닳도록
`
console.log(str.match(/.{1,}(?=\@)/g)) // ["noth7305"]
console.log(str.match(/(?<=\@).{1,}/g)) // ["noth7305"]

