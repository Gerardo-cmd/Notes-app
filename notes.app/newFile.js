// Unix Epoch - January 1st 1970 00:00:00
const gerardoBirthday = new Date('August 30 2020')
const rosaBirthday = new Date('July 12 1999')

const timeStampGerardo = gerardoBirthday.getTime()
const timeStampRosa = rosaBirthday.getTime()

if (timeStampGerardo >= timeStampRosa){
    console.log(rosaBirthday.toString())
    console.log(gerardoBirthday.toString())
}
else{
    console.log(gerardoBirthday.toString())
    console.log(rosaBirthday.toString())
}