// JavaScript Document

$(function(){

	// 定数　（月・曜日の配列）
	var MONTH = {
		full: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
		short: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
	},
	DAY = {
		full: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
		short: ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'],
		ja: ['日', '月', '火', '水', '木', '金', '土']
	}

	// 表示中時刻
	let nowCurrent

	// 毎秒ごとに時刻を取得し表示
	setInterval(clock, 100)

	// 日付＆時間の出力関数
	function clock() {
		// 現在時間の取得
		let now = new Date()

		if (now.getSeconds() !== nowCurrent) {
			// 表示中時刻の更新
			nowCurrent = now.getSeconds()

			// 各値の取得
			now = {
				'cl-year': now.getFullYear(),
				'cl-month': MONTH.full[now.getMonth()],
				'cl-month-short': MONTH.short[now.getMonth()],
				'cl-month-num': splitText(toTwoDigit(now.getMonth() + 1)),
				'cl-month-num-short': splitText(now.getMonth().toString()) + 1,
				'cl-date': splitText(toTwoDigit(now.getDate())),
				'cl-date-short': splitText(now.getDate().toString()),
				'cl-day': DAY.full[now.getDay()],
				'cl-day-short': DAY.short[now.getDay()],
				'cl-day-ja': DAY.ja[now.getDay()],
				'cl-hour': splitText(toTwoDigit(now.getHours())),
				'cl-hour-short': splitText(now.getHours().toString()),
				'cl-hour-12': splitText(toTwoDigit((now.getHours() % 12))),
				'cl-hour-12-short': splitText((now.getHours() % 12).toString()),
				'cl-minute': splitText(toTwoDigit(now.getMinutes())),
				'cl-minute-short': splitText(now.getMinutes().toString()),
				'cl-second': splitText(toTwoDigit(now.getSeconds())),
				'cl-second-short': splitText(now.getSeconds().toString()),
				'cl-ampm': (now.getHours() < 12) ? 'am' : 'pm',
			}
	
			// 出力
			$.each(now, function(key, value) {
				var className = '.' + key
				$(className).html(value)
			})
		}
	}

	// num to 2 digits str
	function toTwoDigit(num) {
		return num.toString().padStart(2, '0')
	}

	// 文字列分割
	function splitText(str) {
		const letters = str.split('')
		let splitedText = ''
		$.each(letters, (i, letter) => {
			splitedText += '<span>' + letter + '</span>'
		})
		return splitedText
	}

	// 等幅



})