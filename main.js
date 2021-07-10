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
재현@naver.com
`

// // console.log(str.match(/[가-힣]{4,}/g)) // ["반갑습니다", "배치깁니다"]

// // \b \w
// console.log(str.match(/\bf\w{1,}\b/g)) //["frozen", "fox"]

// // \d
// console.log(str.match(/\d{1,}/g)) // ["010", "9256", .. ]

// // \s
// console.log(str.match(/\s/g)) // ["\n", "\n", "\n", .. ] 줄바꿈도 포함


// const h = `   the hello world   !

// `

// console.log(h.replace(/\s/g,"")) // thehelloworld!


//(?=)
//(?<=)
console.log(str.match(/.{1,}(?=\@)/g)) // ["noth7305"]
console.log(str.match(/(?<=\@).{1,}/g)) // ["gmail.com"]
