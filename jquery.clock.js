// JavaScript Document

$(function(){
	'use strict';

	// 定数　（月・曜日の配列）
	var MONTH = {
				full: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
				short: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
			},
			DAY = {
				full: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
				short: ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'],
				ja: ['日', '月', '火', '水', '木', '金', '土']
			};

	// 表示中時刻
	var nowCurrent;

	// 毎秒ごとに時刻を取得し表示
	setInterval( clock, 100 );

	// 日付＆時間の出力関数
	function clock(){
		// 現在時間の取得
		var now = new Date();

		if ( now.getSeconds() !== nowCurrent ) {
			// 表示中時刻の更新
			nowCurrent = now.getSeconds();

			// 各値の取得
			now = {
				'cl-full': now,
				'cl-year': now.getFullYear(),
				'cl-month': MONTH.short[now.getMonth()],
				'cl-month-full': MONTH.full[now.getMonth()],
				'cl-month-num': now.getMonth() + 1,
				'cl-month-num-full': (now.getMonth() + 1).toString().padStart(2, '0'),
				'cl-date': now.getDate(),
				'cl-date-full': now.getDate().toString().padStart(2, '0'),
				'cl-day': DAY.short[now.getDay()],
				'cl-day-full': DAY.full[now.getDay()],
				'cl-day-ja': DAY.ja[now.getDay()],
				'cl-hour': now.getHours().toString().padStart(2, '0'),
				'cl-hour-12': (now.getHours() % 12).toString().padStart(2, '0'),
				'cl-ampm': (now.getHours() < 12) ? 'am' : 'pm',
				'cl-minute': now.getMinutes().toString().padStart(2, '0'),
				'cl-second': now.getSeconds().toString().padStart(2, '0'),
			};
	
			// 出力
			$.each( now, function( key, value ) {
				var className = '.'+key;
				$(className).html( value );
			});
		}
	}

});